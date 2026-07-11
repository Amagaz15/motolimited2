MOTO LIMITED WEB V2
===================

Esta versión se parece más a una tienda online/catálogo tipo ecommerce:

- Barra superior de beneficios.
- Header con logo, buscador grande, acceso a consulta y carrito.
- Menú horizontal de categorías.
- Hero tipo banner comercial.
- Categorías destacadas CON IMÁGENES.
- Catálogo con sidebar de categorías.
- Buscador por repuesto, moto, medida o marca.
- Carrito cotizador por WhatsApp.
- Lugar para precio debajo de cada producto.
- Productos editables desde script.js.

IMPORTANTE
----------
No es una copia de otra página. Toma estructura general de ecommerce y la adapta a Moto Limited.

CAMBIAR WHATSAPP
----------------
Abrir script.js y cambiar:

const WHATSAPP_NUMBER = "5492233033185";

Usar formato internacional sin espacios ni guiones.
Ejemplo Argentina:
5492231234567

AGREGAR IMÁGENES A CATEGORÍAS
------------------------------
En script.js buscar:

const categories = [

Cada categoría tiene un campo "image". Para agregar imagen:

image: "assets/nombre-foto.jpg"

Si image está vacío "", aparece solo el emoji/ícono.
La imagen recubrirá todo el cuadrado (object-fit: cover).

Ejemplo:
{ name: "Baterías", icon: "🔋", image: "assets/baterias.jpg" }

AGREGAR PRODUCTOS
-----------------
En script.js buscar:

const products = [

Copiar un bloque como este:

{
  id: "BAT-YTX9-BS",
  name: "Batería YTX9-BS gel sellada",
  category: "Baterías",
  brand: "HAO",
  detail: "Batería sellada. Confirmar compatibilidad.",
  price: "$ 00.000",
  image: "",
  tags: ["bateria", "ytx9", "gel"]
}

PEGARLO dentro del array y cambiar datos.

QUITAR PRODUCTOS
----------------
Borrar el bloque completo del producto.

PONER PRECIO
------------
Completar:

price: "$ 18.500"

OCULTAR PRECIO
--------------
Dejar:

price: ""

La página mostrará "Consultar precio".

PONER FOTO
----------
Guardar la foto en assets y completar:

image: "assets/nombre-foto.jpg"

Si image queda vacío, aparece "Imagen ilustrativa".

FOTOS RECOMENDADAS
-------------------
Para las categorías: 600x400px o más (landscape)
Para los productos: 400x400px (cuadrada)

SUBIR A GITHUB
--------------
Subir estos archivos:
- index.html
- styles.css
- script.js
- carpeta assets
