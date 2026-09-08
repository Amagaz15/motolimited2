/* Recepción de pedidos Moto Limited. URL deducida del dominio y path del flujo.
   Comparar con Production URL del nodo Recibir pedido antes de publicar. */
(() => {
  const WEBHOOK = 'https://diego-n8n.ztshtc.easypanel.host/webhook/motolimited-pedidos-v1';
  const KEY = 'motolimited-pedido-pendiente-v1';
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let enviando = false;

  function leerEstado() {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data.id !== 'string' || typeof data.hash !== 'string') {
      throw new Error('No se pudo leer el pedido pendiente. Consultá al vendedor antes de volver a enviarlo.');
    }
    return data;
  }

  function estadoPedidoMotoLimited() {
    try {
      const data = leerEstado();
      return { pendiente: Boolean(data && !data.confirmado), confirmado: Boolean(data?.confirmado) };
    } catch { return { pendiente: false, confirmado: false }; }
  }

  async function confirmarPedidoMotoLimited({ nombre, negocio, telefono, items, direccion, email, descripcion = '', notas = '' }) {
    if (enviando) throw new Error('Ya estamos enviando el pedido.');
    enviando = true;
    try {
      if (!window.isSecureContext || !crypto.subtle || !crypto.randomUUID) {
        throw new Error('Abrí la página publicada con HTTPS para confirmar el pedido.');
      }
      if (typeof nombre !== 'string' || nombre.trim().length < 2 || nombre.length > 100 || typeof negocio !== 'string' || negocio.trim().length < 2 || negocio.length > 150) {
        throw new Error('Completá el nombre y el nombre del local (al menos dos caracteres).');
      }
      if (!/^\d{8,15}$/.test(String(telefono).replace(/\D/g, ''))) throw new Error('Ingresá un teléfono válido, incluyendo el código de área.');

      // Aclaración: se acepta 'descripcion' o el alias legado 'notas'.
      const aclaracion = (typeof descripcion === 'string' && descripcion.trim()) ? descripcion : (typeof notas === 'string' ? notas : '');
      if (typeof direccion !== 'string' || direccion.trim().length < 2 || direccion.length > 200) {
        throw new Error('Completá la dirección y ciudad.');
      }
      if (typeof email !== 'string' || email.length > 120 || !EMAIL_RE.test(email.trim())) {
        throw new Error('Ingresá un email de contacto válido.');
      }
      if (aclaracion.length > 1000) throw new Error('Acortá la aclaración del pedido.');

      if (!Array.isArray(items) || !items.length || items.length > 100) throw new Error('El pedido debe contener entre 1 y 100 productos.');
      const skus = new Set();
      for (const item of items) {
        if (!item || !/^[A-Za-z0-9._-]{1,64}$/.test(item.sku) || skus.has(item.sku) || !Number.isInteger(item.cantidad) || item.cantidad < 1 || item.cantidad > 10000) {
          throw new Error('Revisá los códigos y las cantidades: deben ser unidades enteras, sin códigos repetidos.');
        }
        skus.add(item.sku);
      }

      const contenido = {
        cliente: { nombre: nombre.trim(), negocio: negocio.trim(), telefono: String(telefono).trim() },
        direccion: direccion.trim(),
        email: email.trim(),
        descripcion: aclaracion.trim(),
        items: items.map(i => ({ sku: i.sku, cantidad: i.cantidad })).sort((a, b) => a.sku.localeCompare(b.sku)),
        confirmado: true, website: '',
      };
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(contenido)));
      const hash = Array.from(new Uint8Array(bytes), n => n.toString(16).padStart(2, '0')).join('');
      const anterior = leerEstado();
      if (anterior && anterior.hash !== hash && !anterior.confirmado) {
        throw new Error('Hay un pedido anterior sin confirmar. Reintentá con el mismo carrito y datos, o consultá al vendedor antes de crear otro.');
      }
      const pedido_id = anterior?.hash === hash ? anterior.id : crypto.randomUUID();
      // Si ya recibimos confirmación para este contenido, no volver a enviarlo.
      if (anterior?.hash === hash && anterior.confirmado && anterior.resultado?.ok === true) return { ...anterior.resultado, repetido: true };
      // Guardar el ID ANTES de enviar. El carrito y el formulario los conserva script.js.
      localStorage.setItem(KEY, JSON.stringify({ id: pedido_id, hash, confirmado: false }));
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);
      let response;
      try {
        response = await fetch(WEBHOOK, {
          method: 'POST',
          body: new URLSearchParams({ payload: JSON.stringify({ ...contenido, pedido_id }) }),
          signal: controller.signal,
          credentials: 'omit',
        });
      } catch {
        throw new Error('No se pudo confirmar la recepción. Tu carrito se conserva: reintentá sin modificarlo.');
      } finally { clearTimeout(timeout); }
      let result;
      try { result = await response.json(); }
      catch { throw new Error('No se recibió una confirmación válida. Tu carrito se conserva: reintentá sin modificarlo.'); }
      if (!response.ok || result.ok !== true) {
        // El flujo rechaza estos casos antes de escribir en Sheets.
        if ([400, 403, 413, 422].includes(response.status)) localStorage.removeItem(KEY);
        throw new Error(result.message || 'No se pudo confirmar el pedido. Reintentá con los mismos datos.');
      }
      if (result.pedido_id !== pedido_id) throw new Error('La confirmación no corresponde al pedido enviado. Conservá el carrito y consultá al vendedor.');
      // Una falla local posterior no invalida una confirmación ya recibida.
      try { localStorage.setItem(KEY, JSON.stringify({ id: pedido_id, hash, confirmado: true, resultado: result })); }
      catch { /* El ID pendiente previo permite consultar el mismo pedido. */ }
      return result;
    } finally { enviando = false; }
  }

  function comenzarNuevoPedidoMotoLimited() {
    if (enviando) throw new Error('Esperá a que termine el envío.');
    const anterior = leerEstado();
    if (anterior && !anterior.confirmado) throw new Error('Primero confirmá el resultado del pedido pendiente.');
    localStorage.removeItem(KEY);
  }

  window.confirmarPedidoMotoLimited = confirmarPedidoMotoLimited;
  window.comenzarNuevoPedidoMotoLimited = comenzarNuevoPedidoMotoLimited;
  window.estadoPedidoMotoLimited = estadoPedidoMotoLimited;
})();
