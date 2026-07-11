/* ==========================================================
   MOTO LIMITED - CATÁLOGO

   Para agregar/quitar productos:
   - Buscá const products = [...]
   - Copiá, editá o eliminá bloques completos.
   - No hace falta tocar HTML ni CSS.
========================================================== */

const WHATSAPP_NUMBER = "5492233033185";
// Cambiar por el WhatsApp definitivo de Moto Limited.
// Formato: 549 + código de área + número, sin espacios ni guiones.

const categories = [
  { name: "Baterías", icon: "🔋" },
  { name: "Motor", icon: "🏍️" },
  { name: "Transmisión", icon: "⚙️" },
  { name: "Frenos", icon: "🛞" },
  { name: "Electricidad", icon: "⚡" },
  { name: "Iluminación", icon: "💡" },
  { name: "Espejos y accesorios", icon: "🔧" },
  { name: "Comandos y cables", icon: "〽️" },
  { name: "Carburación", icon: "⛽" },
  { name: "Suspensión / ruedas", icon: "🧰" }
];

const quickTags = [
  "Honda Wave",
  "Honda CG150",
  "Honda Tornado",
  "Yamaha Crypton",
  "Yamaha YBR125",
  "Gilera Smash",
  "Zanella RX150",
  "Bajaj Rouser NS200",
  "Motomel Skua",
  "FZ16"
];

const products = [
  {
    id: "BAT-YTX5L-BS",
    name: "Batería YTX5L-BS gel sellada",
    category: "Baterías",
    brand: "HAO",
    detail: "Batería sellada para motos. Confirmar compatibilidad según modelo.",
    price: "",
    image: "",
    tags: ["bateria", "gel", "sellada", "ytx5l"]
  },
  {
    id: "BAT-YTX7L-BS",
    name: "Batería YTX7L-BS gel sellada",
    category: "Baterías",
    brand: "HAO",
    detail: "Modelo YTX7L-BS. Consultar aplicación y disponibilidad.",
    price: "",
    image: "",
    tags: ["bateria", "gel", "ytx7l"]
  },
  {
    id: "BAT-YTX7A-BS",
    name: "Batería YTX7A-BS gel sellada",
    category: "Baterías",
    brand: "HAO",
    detail: "Batería sellada. Revisar modelo exacto antes de confirmar compra.",
    price: "",
    image: "",
    tags: ["bateria", "gel", "ytx7a"]
  },
  {
    id: "BAT-12N7-3B",
    name: "Batería 12N7-3B gel sellada",
    category: "Baterías",
    brand: "HAO",
    detail: "Modelo 12N7-3B. Consultar compatibilidad.",
    price: "",
    image: "",
    tags: ["bateria", "12n7", "gel"]
  },
  {
    id: "ESP-CG150",
    name: "Espejo Honda CG150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Espejo para Honda CG150. Confirmar rosca y modelo.",
    price: "",
    image: "",
    tags: ["espejo", "honda", "cg150", "titan"]
  },
  {
    id: "ESP-XR250-TORNADO",
    name: "Espejo Honda XR250 Tornado 10 mm redondo",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Espejo redondo 10 mm para XR250 Tornado. Confirmar aplicación.",
    price: "",
    image: "",
    tags: ["espejo", "honda", "xr250", "tornado"]
  },
  {
    id: "ESP-CBT125",
    name: "Espejo Honda CBT125",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Espejo para Honda CBT125. Imagen y compatibilidad a confirmar.",
    price: "",
    image: "",
    tags: ["espejo", "honda", "cbt125"]
  },
  {
    id: "CAD-25H-86L",
    name: "Cadena distribución 25H-86L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Cadena de distribución 25H-86L.",
    price: "",
    image: "",
    tags: ["cadena", "distribucion", "25h", "86l"]
  },
  {
    id: "CAD-404H-86L",
    name: "Cadena distribución 404H-86L Yamaha Crypton T-110",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Cadena de distribución 404H-86L para Yamaha Crypton T-110.",
    price: "",
    image: "",
    tags: ["cadena", "distribucion", "crypton", "t110"]
  },
  {
    id: "COR-PIN-ROUSER-NS200",
    name: "Corona y piñón Bajaj Rouser NS200 39/14T",
    category: "Transmisión",
    brand: "HAO",
    detail: "Kit corona y piñón 39/14T para Bajaj Rouser NS200.",
    price: "",
    image: "",
    tags: ["corona", "piñon", "rouser", "ns200", "bajaj"]
  },
  {
    id: "COR-PIN-YBR125",
    name: "Corona y piñón Yamaha YBR125 43/14T dorada",
    category: "Transmisión",
    brand: "HAO",
    detail: "Corona y piñón para Yamaha YBR125, relación 43/14T.",
    price: "",
    image: "",
    tags: ["corona", "piñon", "ybr", "ybr125", "yamaha"]
  },
  {
    id: "PAST-XR250-FRONT",
    name: "Pastilla de freno delantera Honda XR250 Tornado",
    category: "Frenos",
    brand: "HAO",
    detail: "Pastilla delantera para Honda XR250 Tornado.",
    price: "",
    image: "",
    tags: ["pastilla", "freno", "honda", "xr250", "tornado"]
  },
  {
    id: "PAST-NS200-DEL",
    name: "Pastilla de freno delantera Bajaj Rouser NS200",
    category: "Frenos",
    brand: "HAO",
    detail: "Pastilla delantera para Bajaj Rouser NS200.",
    price: "",
    image: "",
    tags: ["pastilla", "freno", "rouser", "ns200"]
  },
  {
    id: "ZAP-WAVE",
    name: "Zapatas de freno Honda Wave",
    category: "Frenos",
    brand: "HAO",
    detail: "Zapatas de freno. Confirmar modelo exacto antes de vender.",
    price: "",
    image: "",
    tags: ["zapata", "freno", "wave", "honda"]
  },
  {
    id: "KIT-PISTON-WAVE-110",
    name: "Kit pistón completo Honda Wave S 110",
    category: "Motor",
    brand: "MAGO",
    detail: "Disponible en varias medidas. Confirmar medida, diámetro y pin.",
    price: "",
    image: "",
    tags: ["piston", "kit", "honda", "wave", "110"]
  },
  {
    id: "KIT-PISTON-XR250",
    name: "Kit pistón completo Honda CBX250 / XR250 Tornado",
    category: "Motor",
    brand: "HAO",
    detail: "Kit pistón completo para CBX250 / XR250 Tornado. Confirmar medida.",
    price: "",
    image: "",
    tags: ["piston", "kit", "honda", "xr250", "tornado", "cbx250"]
  },
  {
    id: "KIT-PISTON-YBR125",
    name: "Kit pistón completo Yamaha YBR125",
    category: "Motor",
    brand: "MAGO",
    detail: "Kit pistón completo para Yamaha YBR125. Confirmar medida.",
    price: "",
    image: "",
    tags: ["piston", "ybr", "yamaha", "ybr125"]
  },
  {
    id: "KIT-PISTON-ROUSER-NS200",
    name: "Kit pistón completo Bajaj Rouser NS200",
    category: "Motor",
    brand: "MAGO",
    detail: "Kit pistón completo para Rouser NS200. Confirmar medida y pin.",
    price: "",
    image: "",
    tags: ["piston", "rouser", "ns200", "bajaj"]
  },
  {
    id: "JUNTAS-WAVE",
    name: "Juntas de motor Honda Wave",
    category: "Motor",
    brand: "MAGO",
    detail: "Juego de juntas de motor para Honda Wave.",
    price: "",
    image: "",
    tags: ["juntas", "motor", "honda", "wave"]
  },
  {
    id: "JUNTAS-CG150",
    name: "Juntas de motor Honda CG Titan 150",
    category: "Motor",
    brand: "MAGO",
    detail: "Juego de juntas para Honda CG Titan 150.",
    price: "",
    image: "",
    tags: ["juntas", "motor", "honda", "cg150", "titan"]
  },
  {
    id: "ESTATOR-WAVE",
    name: "Estator Honda New Wave 12 campos",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Estator para Honda New Wave 12 campos, luces siempre encendidas.",
    price: "",
    image: "",
    tags: ["estator", "honda", "wave", "electricidad"]
  },
  {
    id: "ESTATOR-CRYPTON",
    name: "Estator Yamaha New Crypton T-110 12 campos",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Estator para Yamaha New Crypton T-110 12 campos.",
    price: "",
    image: "",
    tags: ["estator", "yamaha", "crypton", "t110"]
  },
  {
    id: "CDI-SMASH",
    name: "CDI Gilera Smash",
    category: "Electricidad",
    brand: "MAGO",
    detail: "CDI para Gilera Smash. Confirmar versión.",
    price: "",
    image: "",
    tags: ["cdi", "gilera", "smash"]
  },
  {
    id: "REG-SMASH",
    name: "Regulador de voltaje trifásico Gilera Smash 110",
    category: "Electricidad",
    brand: "HAO",
    detail: "Regulador trifásico para Gilera Smash 110.",
    price: "",
    image: "",
    tags: ["regulador", "voltaje", "gilera", "smash"]
  },
  {
    id: "LAMP-H4-P43T",
    name: "Lámpara halógena H4 P43T 12V 35/35W cristal",
    category: "Iluminación",
    brand: "HAO",
    detail: "Lámpara halógena H4 P43T, 12V 35/35W.",
    price: "",
    image: "",
    tags: ["lampara", "h4", "halogena", "cristal"]
  },
  {
    id: "LAMP-GIRO-BA15S",
    name: "Lámpara de giro 1 polo BA15S 12V 10W",
    category: "Iluminación",
    brand: "HAO",
    detail: "Lámpara de giro 1 polo BA15S. Cristal o ámbar según disponibilidad.",
    price: "",
    image: "",
    tags: ["lampara", "giro", "ba15s", "ambar"]
  },
  {
    id: "FAROL-SMASH",
    name: "Farol delantero Gilera Smash",
    category: "Iluminación",
    brand: "HAO",
    detail: "Farol delantero para Gilera Smash. Confirmar versión.",
    price: "",
    image: "",
    tags: ["farol", "delantero", "gilera", "smash"]
  },
  {
    id: "CABLE-EMBRAGUE-TITAN",
    name: "Cable embrague Honda CG150 Titan",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Cable de embrague para Honda CG150 Titan.",
    price: "",
    image: "",
    tags: ["cable", "embrague", "honda", "cg150", "titan"]
  },
  {
    id: "CABLE-ACEL-STORM",
    name: "Cable acelerador Honda Storm",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Cable acelerador para Honda Storm.",
    price: "",
    image: "",
    tags: ["cable", "acelerador", "honda", "storm"]
  },
  {
    id: "KIT-CARB-SMASH",
    name: "Kit reparación carburador Gilera Smash",
    category: "Carburación",
    brand: "HAO",
    detail: "Kit de reparación de carburador para Gilera Smash.",
    price: "",
    image: "",
    tags: ["carburador", "kit", "gilera", "smash"]
  },
  {
    id: "MAZA-YBR125",
    name: "Maza trasera Yamaha YBR125 completa",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Maza trasera completa para Yamaha YBR125.",
    price: "",
    image: "",
    tags: ["maza", "trasera", "yamaha", "ybr125"]
  },
  {
    id: "RETEN-SUSP-NS200",
    name: "Retén suspensión Honda CBX250 / NS200",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Retén de suspensión. Confirmar medida y aplicación.",
    price: "",
    image: "",
    tags: ["reten", "suspension", "cbx250", "ns200"]
  }
];

const state = {
  search: "",
  category: "Todas",
  brand: "Todas",
  cart: []
};

const $ = (selector) => document.querySelector(selector);

const headerSearchForm = $("#headerSearchForm");
const headerSearchInput = $("#headerSearchInput");
const categoryGrid = $("#categoryGrid");
const sidebarCategories = $("#sidebarCategories");
const quickTagsBox = $("#quickTags");
const categoryFilter = $("#categoryFilter");
const brandFilter = $("#brandFilter");
const clearFilters = $("#clearFilters");
const productGrid = $("#productGrid");
const visibleCount = $("#visibleCount");
const totalProducts = $("#totalProducts");
const emptyState = $("#emptyState");
const cartItems = $("#cartItems");
const cartCount = $("#cartCount");
const clearCart = $("#clearCart");
const sendOrder = $("#sendOrder");
const heroWhatsapp = $("#heroWhatsapp");
const floatingWhatsapp = $("#floatingWhatsapp");
const menuButton = $("#menuButton");
const categoryNav = $("#categoryNav");

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getUniqueBrands() {
  return [...new Set(products.map(product => product.brand).filter(Boolean))].sort();
}

function setCategory(categoryName) {
  state.category = categoryName;
  categoryFilter.value = categoryName;
  renderProducts();
  markActiveCategories();
}

function setSearch(value) {
  state.search = value;
  headerSearchInput.value = value;
  renderProducts();
}

function renderCategoryCards() {
  categoryGrid.innerHTML = categories.map(category => {
    const count = products.filter(product => product.category === category.name).length;

    return `
      <article class="category-card" data-category-card="${category.name}">
        <div class="icon">${category.icon}</div>
        <h3>${category.name}</h3>
        <p>${count} productos</p>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-category-card]").forEach(card => {
    card.addEventListener("click", () => {
      setCategory(card.dataset.categoryCard);
      document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderSidebar() {
  if (sidebarCategories) {
    const items = ["Todas", ...categories.map(category => category.name)];

    sidebarCategories.innerHTML = items.map(item => `
      <button type="button" data-sidebar-category="${item}">${item}</button>
    `).join("");

    document.querySelectorAll("[data-sidebar-category]").forEach(button => {
      button.addEventListener("click", () => setCategory(button.dataset.sidebarCategory));
    });
  }

  quickTagsBox.innerHTML = quickTags.map(tag => `
    <button type="button" data-quick-tag="${tag}">${tag}</button>
  `).join("");

  document.querySelectorAll("[data-quick-tag]").forEach(button => {
    button.addEventListener("click", () => {
      setSearch(button.dataset.quickTag);
      document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function fillFilters() {
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.name;
    option.textContent = category.name;
    categoryFilter.appendChild(option);
  });

  getUniqueBrands().forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function productMatches(product) {
  const searchableText = normalize([
    product.id,
    product.name,
    product.category,
    product.brand,
    product.detail,
    ...(product.tags || [])
  ].join(" "));

  const matchesSearch = !state.search || searchableText.includes(normalize(state.search));
  const matchesCategory = state.category === "Todas" || product.category === state.category;
  const matchesBrand = state.brand === "Todas" || product.brand === state.brand;

  return matchesSearch && matchesCategory && matchesBrand;
}

function renderProducts() {
  const filtered = products.filter(productMatches);

  totalProducts.textContent = products.length;
  visibleCount.textContent = filtered.length;
  emptyState.hidden = filtered.length > 0;

  productGrid.innerHTML = filtered.map(product => {
    const image = product.image
      ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
      : `
        <div class="fallback-product">
          <strong>${product.category}</strong>
          <span>Imagen ilustrativa</span>
        </div>
      `;

    const price = product.price || "Consultar precio";

    return `
      <article class="product-card">
        <div class="product-image">
          ${image}
        </div>

        <div class="product-info">
          <div class="product-brand">${product.brand || "Marca a confirmar"}</div>
          <h3 class="product-title">${product.name}</h3>
          <p class="product-detail">${product.detail}</p>

          <div class="product-bottom">
            <div class="price">
              <span>Precio</span>
              <strong>${price}</strong>
            </div>

            <div class="product-actions">
              <input class="qty-input" id="qty-${product.id}" type="number" min="1" value="1" aria-label="Cantidad ${product.name}">
              <button class="add-btn" type="button" data-add="${product.id}">Agregar</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.add;
      const qtyInput = document.getElementById(`qty-${id}`);
      const qty = Math.max(1, Number(qtyInput.value || 1));
      addToCart(id, qty);
    });
  });

  markActiveCategories();
}

function markActiveCategories() {
  document.querySelectorAll("[data-sidebar-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.sidebarCategory === state.category);
  });

  document.querySelectorAll("[data-nav-category]").forEach(link => {
    link.classList.toggle("active", link.dataset.navCategory === state.category);
  });
}

function addToCart(productId, qty) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      brand: product.brand,
      price: product.price,
      qty
    });
  }

  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  renderCart();
}

function renderCart() {
  const totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
  cartCount.textContent = totalItems;

  if (state.cart.length === 0) {
    cartItems.innerHTML = `<p class="muted">Todavía no agregaste productos.</p>`;
    sendOrder.href = whatsappUrl("Hola Moto Limited, quiero consultar por repuestos.");
    return;
  }

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div>
        <h4>${item.name}</h4>
        <p>${item.category} · ${item.brand || "Marca a confirmar"} · Cantidad: ${item.qty}</p>
        <p>${item.price ? `Precio: ${item.price}` : "Precio: consultar"}</p>
      </div>
      <button type="button" data-remove="${item.id}">Quitar</button>
    </div>
  `).join("");

  document.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove));
  });

  const orderLines = state.cart.map((item, index) => {
    return `${index + 1}. ${item.name} | Cantidad: ${item.qty} | ${item.price || "Precio a consultar"}`;
  });

  const message = [
    "Hola Moto Limited, quiero consultar por estos repuestos:",
    "",
    ...orderLines,
    "",
    "También quiero confirmar compatibilidad, stock y precio final."
  ].join("\n");

  sendOrder.href = whatsappUrl(message);
}

function resetFilters() {
  state.search = "";
  state.category = "Todas";
  state.brand = "Todas";

  headerSearchInput.value = "";
  categoryFilter.value = "Todas";
  brandFilter.value = "Todas";

  renderProducts();
}

function bindEvents() {
  headerSearchForm.addEventListener("submit", event => {
    event.preventDefault();
    setSearch(headerSearchInput.value);
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
  });

  headerSearchInput.addEventListener("input", event => {
    setSearch(event.target.value);
  });

  categoryFilter.addEventListener("change", event => {
    setCategory(event.target.value);
  });

  brandFilter.addEventListener("change", event => {
    state.brand = event.target.value;
    renderProducts();
  });

  clearFilters.addEventListener("click", resetFilters);

  clearCart.addEventListener("click", () => {
    state.cart = [];
    renderCart();
  });

  document.querySelectorAll("[data-nav-category]").forEach(link => {
    link.addEventListener("click", () => {
      setCategory(link.dataset.navCategory);
      categoryNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menú";
    });
  });

  menuButton.addEventListener("click", () => {
    const open = categoryNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Cerrar" : "Menú";
  });
}

function initWhatsappLinks() {
  const message = "Hola Moto Limited, quiero consultar por repuestos de motos.";
  heroWhatsapp.href = whatsappUrl(message);
  floatingWhatsapp.href = whatsappUrl(message);
  sendOrder.href = whatsappUrl(message);
}

// Header compacto: pasados 40px de scroll agrega la clase
// "is-compact" al header (las reglas están en styles.css), que
// oculta la franja roja, el buscador, el carrito y el menú, y
// deja solo el logo. Al volver arriba, se muestra todo de nuevo.
function bindHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  function updateHeader() {
    header.classList.toggle("is-compact", window.scrollY > 40);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

function init() {
  fillFilters();
  renderCategoryCards();
  renderSidebar();
  renderProducts();
  renderCart();
  bindEvents();
  initWhatsappLinks();
  bindHeaderScroll();
}


init();