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

// Guardá las fotos con estos nombres dentro de assets/categorias/.
const categories = [
  { name: "Baterías", image: "assets/categorias/baterias.png" },
  { name: "Motor", image: "assets/categorias/motor.jpg" },
  { name: "Transmisión", image: "assets/categorias/transmision.jpg" },
  { name: "Frenos", image: "assets/categorias/frenos.jpg" },
  { name: "Electricidad", image: "assets/categorias/electricidad.jpg" },
  { name: "Iluminación", image: "assets/categorias/iluminacion.jpg" },
  { name: "Espejos y accesorios", image: "assets/categorias/espejos.jpg" },
  { name: "Comandos y cables", image: "assets/categorias/cables.jpg" },
  { name: "Carburación", image: "assets/categorias/carburacion.jpg" },
  { name: "Suspensión / ruedas", image: "assets/categorias/suspension.png" }
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
    id: "prod-001",
    name: "CÁMARA 3,00 - 14 TR 4",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.315",
    image: "assets/articulos/001.jpg",
    tags: ["camara", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-002",
    name: "CÁMARA 2,50 - 17 TR 4",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.315",
    image: "assets/articulos/002.jpg",
    tags: ["camara", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-003",
    name: "CÁMARA 3,00 - 18 TR 4",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.558",
    image: "assets/articulos/003.jpg",
    tags: ["camara", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-004",
    name: "CABLE EMBRAGUE ZANELLA RX150",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.000",
    image: "assets/articulos/004.jpg",
    tags: ["cable", "embrague", "zanella", "rx150", "comandos", "cables", "hao"]
  },
  {
    id: "prod-005",
    name: "CORONA Y PIÑON MOTOMEL SKUA 150 43/16T",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.720",
    image: "assets/articulos/005.jpg",
    tags: ["corona", "pinon", "motomel", "skua", "150", "16t", "transmision", "hao"]
  },
  {
    id: "prod-006",
    name: "ESTATOR ZANELLA RX150",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.025",
    image: "assets/articulos/006.jpg",
    tags: ["estator", "zanella", "rx150", "electricidad", "mago"]
  },
  {
    id: "prod-007",
    name: "SET LLAVES (CONTACTO Y BAÚL) GILERA SMASH",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.350",
    image: "assets/articulos/007.jpg",
    tags: ["set", "llaves", "contacto", "baul", "gilera", "smash", "electricidad", "hao"]
  },
  {
    id: "prod-008",
    name: "TENSOR CADENA GILERA SMASH 110 (Ø12mm & Ø17mm)",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$750",
    image: "assets/articulos/008.jpg",
    tags: ["tensor", "cadena", "gilera", "smash", "110", "12mm", "17mm", "transmision", "hao"]
  },
  {
    id: "prod-009",
    name: "TENSOR CADENA YAMAHA YBR 125",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.500",
    image: "assets/articulos/009.jpg",
    tags: ["tensor", "cadena", "yamaha", "ybr", "125", "transmision", "hao"]
  },
  {
    id: "prod-010",
    name: "TENSOR CADENA CG TITAN 150 Y OTRAS REDONDO (Ø18mm)",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$750",
    image: "assets/articulos/010.jpg",
    tags: ["tensor", "cadena", "titan", "150", "otras", "redondo", "18mm", "transmision", "hao"]
  },
  {
    id: "prod-011",
    name: "KIT RETENES DE MOTOR ZANELLA RX150",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.500",
    image:  "assets/articulos/011.jpg",
    tags: ["kit", "retenes", "motor", "zanella", "rx150", "hao"]
  },
  {
    id: "prod-012",
    name: "JUNTAS DE MOTOR HONDA CG TITAN 150",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.200",
    image: "assets/articulos/012.jpg",
    tags: ["juntas", "motor", "honda", "titan", "150", "mago"]
  },
  {
    id: "prod-013",
    name: "JUNTAS DE MOTOR GILERA SMASH 110",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.055",
    image: "assets/articulos/013.jpg",
    tags: ["juntas", "motor", "gilera", "smash", "110", "mago"]
  },
  {
    id: "prod-014",
    name: "JUNTAS DE MOTOR ZANELLA RX150",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.382",
    image: "assets/articulos/014.jpg",
    tags: ["juntas", "motor", "zanella", "rx150", "mago"]
  },
  {
    id: "prod-015",
    name: "BENDIX MOTOMEL DAKAR (S/CORONA)",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.500",
    image: "assets/articulos/015.jpg",
    tags: ["bendix", "motomel", "dakar", "corona", "transmision", "mago"]
  },
  {
    id: "prod-016",
    name: "GUÍA DE VALVULAS GILERA SMASH 110 (2 PCS)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.450",
    image: "assets/articulos/016.jpg",
    tags: ["guia", "valvulas", "gilera", "smash", "110", "motor", "hao"]
  },
  {
    id: "prod-017",
    name: "CDI HONDA (5T) DAX 70/C90/C100 BIZ",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.242",
    image: "assets/articulos/017.jpg",
    tags: ["cdi", "honda", "dax", "c90", "c100", "biz", "electricidad", "mago"]
  },
  {
    id: "prod-018",
    name: "PLAQUETA CON CARBON HONDA TORNADO 250",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.335",
    image: "assets/articulos/018.jpg",
    tags: ["plaqueta", "carbon", "honda", "tornado", "250", "frenos", "hao"]
  },
  {
    id: "prod-019",
    name: "PLAQUETA CON CARBON HONDA TITAN 150",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.010",
    image: "assets/articulos/019.jpg",
    tags: ["plaqueta", "carbon", "honda", "titan", "150", "frenos", "hao"]
  },
  {
    id: "prod-020",
    name: "PLAQUETA CON CARBON ZANELLA RX150",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.382",
    image: "assets/articulos/020.jpg",
    tags: ["plaqueta", "carbon", "zanella", "rx150", "frenos", "hao"]
  },
  {
    id: "prod-021",
    name: "AROS DE PISTÓN ZANELLA (62mm) RX 150",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.175",
    image: "assets/articulos/021.jpg",
    tags: ["aros", "piston", "zanella", "62mm", "150", "motor", "hao"]
  },
  {
    id: "prod-022",
    name: "DISCO EMBRAGUE HONDA WAVE (4 PCS)",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.568",
    image: "assets/articulos/022.jpg",
    tags: ["disco", "embrague", "honda", "wave", "comandos", "cables", "hao"]
  },
  {
    id: "prod-023",
    name: "DISCO EMBRAGUE HONDA CG125 (5 PCS)",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.875",
    image: "assets/articulos/023.jpg",
    tags: ["disco", "embrague", "honda", "cg125", "comandos", "cables", "hao"]
  },
  {
    id: "prod-024",
    name: "KIT DISTRIBUCION GILERA SMASH (3 PCS DENTADO)",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.400",
    image: "assets/articulos/024.jpg",
    tags: ["kit", "distribucion", "gilera", "smash", "dentado", "transmision", "hao"]
  },
  {
    id: "prod-025",
    name: "VÁLVULAS GILERA SMASH 110",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.680",
    image: "assets/articulos/025.jpg",
    tags: ["valvulas", "gilera", "smash", "110", "motor", "hao"]
  },
  {
    id: "prod-026",
    name: "VÁLVULAS ZANELLA RX150",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.010",
    image: "assets/articulos/026.jpg",
    tags: ["valvulas", "zanella", "rx150", "motor", "hao"]
  },
  {
    id: "prod-027",
    name: "PATADA DE ARRANQUE GILERA SMASH 110",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.156",
    image: "assets/articulos/027.jpg",
    tags: ["patada", "arranque", "gilera", "smash", "110", "electricidad", "hao"]
  },
  {
    id: "prod-028",
    name: "FAROL DELANTERO GILERA SMASH (GIRO AMBAR)",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.625",
    image: "assets/articulos/028.jpg",
    tags: ["farol", "delantero", "gilera", "smash", "giro", "ambar", "iluminacion", "hao"]
  },
  {
    id: "prod-029",
    name: "KIT CILINDRO COMPLETO GILERA SMASH",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$26.380",
    image: "assets/articulos/029.jpg",
    tags: ["kit", "cilindro", "gilera", "smash", "motor", "hao"]
  },
  {
    id: "prod-030",
    name: "CAPUCHÓN DE BUJÍA SMASH \\TITAN",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$700",
    image: "assets/articulos/030.jpg",
    tags: ["capuchon", "bujia", "smash", "titan", "electricidad", "hao"]
  },
  {
    id: "prod-031",
    name: "ZAPATAS DE FRENO GILERA SMASH 110 (CRUZADO)",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.910",
    image: "assets/articulos/031.jpg",
    tags: ["zapatas", "freno", "gilera", "smash", "110", "cruzado", "frenos", "hao"]
  },
  {
    id: "prod-032",
    name: "ZAPATAS DE FRENO HONDA TITAN 2000 (130mm)",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.530",
    image: "assets/articulos/032.jpg",
    tags: ["zapatas", "freno", "honda", "titan", "2000", "130mm", "frenos", "hao"]
  },
  {
    id: "prod-033",
    name: "VARILLA DE FRENO GILERA SMASH 110",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.060",
    image: "assets/articulos/033.jpg",
    tags: ["varilla", "freno", "gilera", "smash", "110", "frenos", "hao"]
  },
  {
    id: "prod-034",
    name: "BUJÍA D8EA (RX150)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$980",
    image: "assets/articulos/034.jpg",
    tags: ["bujia", "d8ea", "rx150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-035",
    name: "BUJÍA C7HSA (110)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.030",
    image: "assets/articulos/035.jpg",
    tags: ["bujia", "c7hsa", "110", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-036",
    name: "CADENA REFORZADA 428H-110",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$7.425",
    image: "assets/articulos/036.jpg",
    tags: ["cadena", "reforzada", "428h", "110", "transmision", "mago"]
  },
  {
    id: "prod-037",
    name: "CABLE FRENO DELANTERO HONDA STORM",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.010",
    image: "assets/articulos/037.jpg",
    tags: ["cable", "freno", "delantero", "honda", "storm", "frenos", "hao"]
  },
  {
    id: "prod-038",
    name: "CABLE EMBRAGUE HONDA STORM 125 (108cm)",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.915",
    image: "assets/articulos/038.jpg",
    tags: ["cable", "embrague", "honda", "storm", "125", "108cm", "comandos", "cables", "hao"]
  },
  {
    id: "prod-039",
    name: "CABLE EMBRAGUE HONDA CG 125 TITAN",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.681",
    image: "assets/articulos/039.jpg",
    tags: ["cable", "embrague", "honda", "125", "titan", "comandos", "cables", "hao"]
  },
  {
    id: "prod-040",
    name: "CABLE EMBRAGUE HONDA CG 150 TITAN",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.681",
    image: "assets/articulos/040.jpg",
    tags: ["cable", "embrague", "honda", "150", "titan", "comandos", "cables", "hao"]
  },
  {
    id: "prod-041",
    name: "CABLE VELOCIMETRO MOTOMEL SKUA 150",
    category: "Comandos y cables",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.868",
    image: "assets/articulos/041.jpg",
    tags: ["cable", "velocimetro", "motomel", "skua", "150", "comandos", "cables", "mago"]
  },
  {
    id: "prod-042",
    name: "CABLE ACELERADOR HONDA WAVE",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "",
    image: "assets/articulos/042.jpg",
    tags: ["cable", "acelerador", "honda", "wave", "comandos", "cables", "hao"]
  },
  {
    id: "prod-043",
    name: "CADENA REFORZADA 428H-118",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.220",
    image: "assets/articulos/043.jpg",
    tags: ["cadena", "reforzada", "428h", "118", "transmision", "mago"]
  },
  {
    id: "prod-044",
    name: "CADENA DISTRIBUCION  25H-84L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.635",
    image: "assets/articulos/044.jpg",
    tags: ["cadena", "distribucion", "25h", "84l", "transmision", "mago"]
  },
  {
    id: "prod-045",
    name: "CADENA DISTRIBUCION  25H-90L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.821",
    image: "assets/articulos/045.jpg",
    tags: ["cadena", "distribucion", "25h", "90l", "transmision", "mago"]
  },
  {
    id: "prod-046",
    name: "CORONA Y PIÑÓN ZANELLA RX150 38/15T DORADA",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.202",
    image: "assets/articulos/046.jpg",
    tags: ["corona", "pinon", "zanella", "rx150", "15t", "dorada", "transmision", "hao"]
  },
  {
    id: "prod-047",
    name: "SET LLAVES (CONTACTO Y BAÚL) ZANELLA RX150",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$22.365",
    image: "assets/articulos/047.jpg",
    tags: ["set", "llaves", "contacto", "baul", "zanella", "rx150", "electricidad", "hao"]
  },
  {
    id: "prod-048",
    name: "RELAY ARRANQUE CON FUSIBLE",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.140",
    image: "assets/articulos/048.jpg",
    tags: ["relay", "arranque", "fusible", "electricidad", "mago"]
  },
  {
    id: "prod-049",
    name: "BIELA HONDA CD100 CORTA",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$9.105",
    image: "assets/articulos/049.jpg",
    tags: ["biela", "honda", "cd100", "corta", "motor", "hao"]
  },
  {
    id: "prod-050",
    name: "BIELA ZANELLA RX150",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.440",
    image: "assets/articulos/050.jpg",
    tags: ["biela", "zanella", "rx150", "motor", "hao"]
  },
  {
    id: "prod-051",
    name: "PATADA DE ARRANQUE HONDA TITAN150",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.370",
    image: "assets/articulos/051.jpg",
    tags: ["patada", "arranque", "honda", "titan150", "electricidad", "hao"]
  },
  {
    id: "prod-052",
    name: "PATADA DE ARRANQUE MOTOMEL CUSTOM 150",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.323",
    image: "assets/articulos/052.jpg",
    tags: ["patada", "arranque", "motomel", "custom", "150", "electricidad", "hao"]
  },
  {
    id: "prod-053",
    name: "PALANCA DE CAMBIO ZANELLA RX 150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.550",
    image: "assets/articulos/053.jpg",
    tags: ["palanca", "cambio", "zanella", "150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-054",
    name: "FAROL TRASERO GILERA SMASH / BIZ  (ROJO-AMBAR)",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$9.480",
    image: "assets/articulos/054.jpg",
    tags: ["farol", "trasero", "gilera", "smash", "biz", "rojo", "ambar", "iluminacion"]
  },
  {
    id: "prod-055",
    name: "FAROL DELANTERO HONDA CG125 TITAN",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$10.505",
    image: "assets/articulos/055.jpg",
    tags: ["farol", "delantero", "honda", "cg125", "titan", "iluminacion", "hao"]
  },
  {
    id: "prod-056",
    name: "CADENA REFORZADA 428H-136",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$10.930",
    image: "assets/articulos/056.jpg",
    tags: ["cadena", "reforzada", "428h", "136", "transmision", "hao"]
  },
  {
    id: "prod-057",
    name: "KIT REPARACION CARBURADOR GILERA SMASH",
    category: "Carburación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.035",
    image: "assets/articulos/057.jpg",
    tags: ["kit", "reparacion", "carburador", "gilera", "smash", "carburacion", "hao"]
  },
  {
    id: "prod-058",
    name: "KIT REPARACION CARBURADOR ZANELLA RX150",
    category: "Carburación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.035",
    image: "assets/articulos/058.jpg",
    tags: ["kit", "reparacion", "carburador", "zanella", "rx150", "carburacion", "hao"]
  },
  {
    id: "prod-059",
    name: "CDI GILERA (4T,12V,DC) SMASH",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.202",
    image: "assets/articulos/059.jpg",
    tags: ["cdi", "gilera", "12v", "smash", "electricidad", "mago"]
  },
  {
    id: "prod-060",
    name: "CDI HONDA WAVE",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.710",
    image: "assets/articulos/060.jpg",
    tags: ["cdi", "honda", "wave", "electricidad", "mago"]
  },
  {
    id: "prod-061",
    name: "DISCO EMBRAGUE GILERA SMASH 110 (3 PCS)",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.568",
    image: "assets/articulos/061.jpg",
    tags: ["disco", "embrague", "gilera", "smash", "110", "comandos", "cables", "hao"]
  },
  {
    id: "prod-062",
    name: "ARBOL DE LEVAS GILERA SMASH 110 (CORTO)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$7.705",
    image: "assets/articulos/062.jpg",
    tags: ["arbol", "levas", "gilera", "smash", "110", "corto", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-063",
    name: "ARBOL DE LEVAS GILERA SMASH 110 (LARGO)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.640",
    image: "assets/articulos/063.jpg",
    tags: ["arbol", "levas", "gilera", "smash", "110", "largo", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-064",
    name: "ARBOL DE LEVAS ZANELLA RX150/ SKUA150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$12.513",
    image: "assets/articulos/064.jpg",
    tags: ["arbol", "levas", "zanella", "rx150", "skua150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-065",
    name: "JUNTAS DE MOTOR HONDA WAVE",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.755",
    image: "assets/articulos/065.jpg",
    tags: ["juntas", "motor", "honda", "wave", "hao"]
  },
  {
    id: "prod-066",
    name: "JUNTAS DE MOTOR HONDA WAVE",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.200",
    image: "assets/articulos/066.jpg",
    tags: ["juntas", "motor", "honda", "wave", "mago"]
  },
  {
    id: "prod-067",
    name: "KIT RETENES DE MOTOR GILERA SMASH 110",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.635",
    image: "assets/articulos/067.jpg",
    tags: ["kit", "retenes", "motor", "gilera", "smash", "110", "hao"]
  },
  {
    id: "prod-068",
    name: "BOCA DE ADMISIÓN ZANELLA RX 150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.430",
    image: "assets/articulos/068.jpg",
    tags: ["boca", "admision", "zanella", "150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-069",
    name: "BOCA DE ADMISIÓN HONDA TITAN CG150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.000",
    image: "assets/articulos/069.jpg",
    tags: ["boca", "admision", "honda", "titan", "cg150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-070",
    name: "BOCA DE ADMISIÓN MOTOMEL DAKAR 200",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.710",
    image: "assets/articulos/070.jpg",
    tags: ["boca", "admision", "motomel", "dakar", "200", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-071",
    name: "BOCA DE ADMISIÓN MOTOMEL CUSTOM 150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.710",
    image: "assets/articulos/071.jpg",
    tags: ["boca", "admision", "motomel", "custom", "150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-072",
    name: "BOCA DE ADMISIÓN HONDA TITAN 2000",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.568",
    image: "assets/articulos/072.jpg",
    tags: ["boca", "admision", "honda", "titan", "2000", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-073",
    name: "RETEN SUSPENSION GILERA SMASH (26x37x10.5)",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.074",
    image: "assets/articulos/073.jpg",
    tags: ["reten", "suspension", "gilera", "smash", "26x37x10", "ruedas", "hao"]
  },
  {
    id: "prod-074",
    name: "RETEN SUSPENSION ZANELLA RX 150 (31x43x10.5)",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.168",
    image: "assets/articulos/074.jpg",
    tags: ["reten", "suspension", "zanella", "150", "31x43x10", "ruedas", "hao"]
  },
  {
    id: "prod-075",
    name: "SET BULONES PARA CORONA ZANELLA RX150/STORM",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$934",
    image: "assets/articulos/075.jpg",
    tags: ["set", "bulones", "corona", "zanella", "rx150", "storm", "transmision", "hao"]
  },
  {
    id: "prod-076",
    name: "BOBINA DE IGNICIÓN GILERA SMASH 110",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.315",
    image: "assets/articulos/076.jpg",
    tags: ["bobina", "ignicion", "gilera", "smash", "110", "electricidad", "hao"]
  },
  {
    id: "prod-077",
    name: "VÁLVULAS YAMAHA CRYPTON T105",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.915",
    image: "assets/articulos/077.jpg",
    tags: ["valvulas", "yamaha", "crypton", "t105", "motor", "hao"]
  },
  {
    id: "prod-078",
    name: "BIELA GILERA SMASH LARGA",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$9.105",
    image: "assets/articulos/078.jpg",
    tags: ["biela", "gilera", "smash", "larga", "motor", "hao"]
  },
  {
    id: "prod-079",
    name: "KIT TECLAS GILERA  SMASH (5PCS)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.130",
    image: "assets/articulos/079.jpg",
    tags: ["kit", "teclas", "gilera", "smash", "5pcs", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-080",
    name: "KIT TECLAS GILERA FUTURA",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.335",
    image: "assets/articulos/080.jpg",
    tags: ["kit", "teclas", "gilera", "futura", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-081",
    name: "BOCA DE ADMISIÓN MOTOMEL SKUA 150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "",
    image: "assets/articulos/081.jpg",
    tags: ["boca", "admision", "motomel", "skua", "150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-082",
    name: "ESPEJO HONDA CBT125",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.160",
    image: "assets/articulos/082.jpg",
    tags: ["espejo", "honda", "cbt125", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-083",
    name: "BIELA YAMAHA (COLOR DORADO) CRYPTON T105",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.440",
    image: "assets/articulos/083.jpg",
    tags: ["biela", "yamaha", "color", "dorado", "crypton", "t105", "motor", "hao"]
  },
  {
    id: "prod-084",
    name: "CADENA REFORZADA 420H-112",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$7.000",
    image: "assets/articulos/084.jpg",
    tags: ["cadena", "reforzada", "420h", "112", "transmision", "mago"]
  },
  {
    id: "prod-085",
    name: "CADENA REFORZADA 520H-118",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$14.850",
    image: "assets/articulos/085.jpg",
    tags: ["cadena", "reforzada", "520h", "118", "transmision", "mago"]
  },
  {
    id: "prod-086",
    name: "MAZA TRASERA ZANELLA RX150 C/ RULEMAN Y BUJES",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$45.000",
    image: "assets/articulos/086.jpg",
    tags: ["maza", "trasera", "zanella", "rx150", "ruleman", "bujes", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-087",
    name: "MAZA TRASERA HONDA BIZ C-100 / C-105 SOLA",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$36.185",
    image: "assets/articulos/087.jpg",
    tags: ["maza", "trasera", "honda", "biz", "100", "105", "sola", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-088",
    name: "MAZA TRASERA HONDA WAVE NF 100 C/ RULEMAN",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$25.220",
    image: "assets/articulos/088.jpg",
    tags: ["maza", "trasera", "honda", "wave", "100", "ruleman", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-089",
    name: "MAZA TRASERA MOTOMEL SKUA 150/200 V6 COMPLETA",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$36.185",
    image: "assets/articulos/089.jpg",
    tags: ["maza", "trasera", "motomel", "skua", "150", "200", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-090",
    name: "MAZA TRASERA YAMAHA YBR125 COMPLETA",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$25.220",
    image: "assets/articulos/090.jpg",
    tags: ["maza", "trasera", "yamaha", "ybr125", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-091",
    name: "MAZA TRASERA YAMAHA CRYPTON T-105 / T-110",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$25.220",
    image: "assets/articulos/091.jpg",
    tags: ["maza", "trasera", "yamaha", "crypton", "105", "110", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-092",
    name: "TAPA TANQUE GILERA SMASH 110",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.730",
    image: "assets/articulos/092.jpg",
    tags: ["tapa", "tanque", "gilera", "smash", "110", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-093",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (0,25  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/093.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor"]
  },
  {
    id: "prod-094",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (0,50  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/094.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-095",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (0,75  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/095.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-096",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (1,00  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/096.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-097",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (1,25  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/097.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-098",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (1,50  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/098.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-099",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (1,75  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/099.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-100",
    name: "KIT PISTÓN COMPLETO GILERA SMASH 110 (2,00  DIA 52,4 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.410",
    image: "assets/articulos/100.jpg",
    tags: ["kit", "piston", "gilera", "smash", "110", "pin", "motor", "hao"]
  },
  {
    id: "prod-101",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (0,00 STD  DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/101.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-102",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (0,25 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/102.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "mago"]
  },
  {
    id: "prod-103",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (0,50 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/103.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-104",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (0,75 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/104.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-105",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (1,00 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/105.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-106",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (1,25 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/106.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-107",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (1,50 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/107.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-108",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (1,75 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/108.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-109",
    name: "KIT PISTÓN COMPLETO ZANELLA RX 150 (2,00 DIA 62,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.800",
    image: "assets/articulos/109.jpg",
    tags: ["kit", "piston", "zanella", "150", "pin", "motor", "hao"]
  },
  {
    id: "prod-110",
    name: "LAMPARA BOSCH BA20D (B35)TK55 12V 35/35W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$610",
    image: "assets/articulos/110.jpg",
    tags: ["lampara", "bosch", "ba20d", "b35", "tk55", "12v", "35w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-111",
    name: "LAMPARA HALÓGENA H4 P43T 12V 35/35W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$900",
    image: "assets/articulos/111.jpg",
    tags: ["lampara", "halogena", "p43t", "12v", "35w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-112",
    name: "LAMPARA HALÓGENA DELANTERA SMASH P15D-25-1 H6 12V 18/18W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$560",
    image: "assets/articulos/112.jpg",
    tags: ["lampara", "halogena", "delantera", "smash", "p15d", "12v", "18w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-113",
    name: "LAMPARA HALÓGENA DELANTERA SMASH P15D-25-1 H6 12V 35/35W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$560",
    image: "assets/articulos/113.jpg",
    tags: ["lampara", "halogena", "delantera", "smash", "p15d", "12v", "35w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-114",
    name: "LAMPARA TRASERA SMASH BAY15D (S25)TK38 12V 21/5W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$250",
    image: "assets/articulos/114.jpg",
    tags: ["lampara", "trasera", "smash", "bay15d", "s25", "tk38", "12v", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-115",
    name: "LAMPARA TRASERA SMASH BAY15D (S25)TK38 12V 21/5W ROJA",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$300",
    image: "assets/articulos/115.jpg",
    tags: ["lampara", "trasera", "smash", "bay15d", "s25", "tk38", "12v", "roja", "iluminacion", "hao"]
  },
  {
    id: "prod-116",
    name: "FAROL TRASERO GILERA SMASH (CRISTAL-CRISTAL)",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$9.480",
    image: "assets/articulos/116.jpg",
    tags: ["farol", "trasero", "gilera", "smash", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-117",
    name: "FAROL DELANTERO ZANELLA RX 150",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$13.000",
    image: "assets/articulos/117.jpg",
    tags: ["farol", "delantero", "zanella", "150", "iluminacion", "hao"]
  },
  {
    id: "prod-118",
    name: "BIELA HONDA CG 150 TITAN / XR 150L 96X14X28mm",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.115",
    image: "assets/articulos/118.jpg",
    tags: ["biela", "honda", "150", "titan", "150l", "96x14x28mm", "motor", "hao"]
  },
  {
    id: "prod-119",
    name: "BIELA HONDA XR 250 TORNADO/ TWISTER",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$15.645",
    image: "assets/articulos/119.jpg",
    tags: ["biela", "honda", "250", "tornado", "twister", "motor", "hao"]
  },
  {
    id: "prod-120",
    name: "BIELA MOTOMEL DAKAR 200 CADENERA 103.5x17x30",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$12.750",
    image: "assets/articulos/120.jpg",
    tags: ["biela", "motomel", "dakar", "200", "cadenera", "103", "5x17x30", "motor", "hao"]
  },
  {
    id: "prod-121",
    name: "BIELA MOTOMEL DAKAR 200 VARILLERA 105.5x15x32",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$12.750",
    image: "assets/articulos/121.jpg",
    tags: ["biela", "motomel", "dakar", "200", "varillera", "105", "5x15x32", "motor", "hao"]
  },
  {
    id: "prod-122",
    name: "BIELA MOTOMEL SKUA 200 / MOTARD 103.5x16x30",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$13.500",
    image: "assets/articulos/122.jpg",
    tags: ["biela", "motomel", "skua", "200", "motard", "103", "5x16x30", "motor", "hao"]
  },
  {
    id: "prod-123",
    name: "BOCA DE ADMISIÓN HONDA STORM 125",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.440",
    image: "assets/articulos/123.jpg",
    tags: ["boca", "admision", "honda", "storm", "125", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-124",
    name: "BUJÍA CPR8EA9 (10 mm)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.168",
    image: "assets/articulos/124.jpg",
    tags: ["bujia", "cpr8ea9", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-125",
    name: "CABLE ACELERADOR HONDA STORM",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.500",
    image: "assets/articulos/125.jpg",
    tags: ["cable", "acelerador", "honda", "storm", "comandos", "cables", "hao"]
  },
  {
    id: "prod-126",
    name: "CABLE EMBRAGUE MOTOMEL DAKAR 200",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.820",
    image: "assets/articulos/126.jpg",
    tags: ["cable", "embrague", "motomel", "dakar", "200", "comandos", "cables", "hao"]
  },
  {
    id: "prod-127",
    name: "CABLE EMBRAGUE YAMAHA FZ16",
    category: "Comandos y cables",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.665",
    image: "assets/articulos/127.jpg",
    tags: ["cable", "embrague", "yamaha", "fz16", "comandos", "cables", "hao"]
  },
  {
    id: "prod-128",
    name: "MAZA TRASERA GILERA SMASH 110 SOLA",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$27.454",
    image: "assets/articulos/128.jpg",
    tags: ["maza", "trasera", "gilera", "smash", "110", "sola", "suspension", "ruedas", "hao"]
  },
  {
    id: "prod-129",
    name: "CORONA Y PIÑÓN YAMAHA CRYPTON NEW 36/15T",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.502",
    image: "assets/articulos/129.jpg",
    tags: ["corona", "pinon", "yamaha", "crypton", "new", "15t", "transmision", "mago"]
  },
  {
    id: "prod-130",
    name: "CORONA Y PIÑÓN HONDA WAVE NEW DORADA 37/14T",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/130.jpg",
    tags: ["corona", "pinon", "honda", "wave", "new", "dorada", "14t", "transmision", "hao"]
  },
  {
    id: "prod-131",
    name: "CORONA Y PIÑÓN HONDA CG 125 43/14T",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.510",
    image: "assets/articulos/131.jpg",
    tags: ["corona", "pinon", "honda", "125", "14t", "transmision", "mago"]
  },
  {
    id: "prod-132",
    name: "JUNTAS DE MOTOR MOTOMEL SKUA 150",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.382",
    image: "assets/articulos/132.jpg",
    tags: ["juntas", "motor", "motomel", "skua", "150", "mago"]
  },
  {
    id: "prod-133",
    name: "LAMPARA MUELITA T5 12V 5W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$140",
    image: "assets/articulos/133.jpg",
    tags: ["lampara", "muelita", "12v", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-134",
    name: "LAMPARA MUELITA T6 12V 5W AMBAR",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$190",
    image: "assets/articulos/134.jpg",
    tags: ["lampara", "muelita", "12v", "ambar", "iluminacion", "hao"]
  },
  {
    id: "prod-135",
    name: "LAMPARA MUELITA T13 W2.1x9.5D 12V 10W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$140",
    image: "assets/articulos/135.jpg",
    tags: ["lampara", "muelita", "t13", "1x9", "12v", "10w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-136",
    name: "LAMPARA MUELITA T13 W2.1x9.5D 12V 10W AMBAR",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$190",
    image: "assets/articulos/136.jpg",
    tags: ["lampara", "muelita", "t13", "1x9", "12v", "10w", "ambar", "iluminacion", "hao"]
  },
  {
    id: "prod-137",
    name: "LAMPARA DE GIRO 1 POLO BA15S (G18)TK21 12V 10W CRISTAL",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$235",
    image: "assets/articulos/137.jpg",
    tags: ["lampara", "giro", "polo", "ba15s", "g18", "tk21", "12v", "10w", "cristal", "iluminacion", "hao"]
  },
  {
    id: "prod-138",
    name: "LAMPARA DE GIRO 1 POLO BA15S (G18)TK21 12V 10W AMBAR",
    category: "Iluminación",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$235",
    image: "assets/articulos/138.jpg",
    tags: ["lampara", "giro", "polo", "ba15s", "g18", "tk21", "12v", "10w", "ambar", "iluminacion", "hao"]
  },
  {
    id: "prod-139",
    name: "JUNTA DE ESCAPE HONDA CG125 DORADA",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$100",
    image: "assets/articulos/139.jpg",
    tags: ["junta", "escape", "honda", "cg125", "dorada", "motor", "hao"]
  },
  {
    id: "prod-140",
    name: "RELAY ARRANQUE SIN FUSIBLE",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.535",
    image: "assets/articulos/140.jpg",
    tags: ["relay", "arranque", "sin", "fusible", "electricidad", "mago"]
  },
  {
    id: "prod-141",
    name: "PASTILLA DE FRENO DELANTERA GILERA SMASH 110 CON GANCHO",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.200",
    image: "assets/articulos/141.jpg",
    tags: ["pastilla", "freno", "delantera", "gilera", "smash", "110", "gancho", "frenos", "hao"]
  },
  {
    id: "prod-142",
    name: "PASTILLA DE FRENO DELANTERA GILERA SMASH 110 SIN GANCHO",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.195",
    image: "assets/articulos/142.jpg",
    tags: ["pastilla", "freno", "delantera", "gilera", "smash", "110", "sin", "gancho", "frenos", "hao"]
  },
  {
    id: "prod-143",
    name: "PASTILLA DE FRENO DELANTERA MOTOMEL SKUA 150",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.430",
    image: "assets/articulos/143.jpg",
    tags: ["pastilla", "freno", "delantera", "motomel", "skua", "150", "frenos"]
  },
  {
    id: "prod-144",
    name: "ZAPATAS DE FRENO YAMAHA CRYPTON T-105",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.455",
    image: "assets/articulos/144.jpg",
    tags: ["zapatas", "freno", "yamaha", "crypton", "105", "frenos", "hao"]
  },
  {
    id: "prod-145",
    name: "ZAPATAS DE FRENO YAMAHA YBR 125",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.575",
    image: "assets/articulos/145.jpg",
    tags: ["zapatas", "freno", "yamaha", "ybr", "125", "frenos", "hao"]
  },
  {
    id: "prod-146",
    name: "ZAPATAS DE FRENO ZANELLA RX 150 PUNTA REDONDA",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.763",
    image: "assets/articulos/146.jpg",
    tags: ["zapatas", "freno", "zanella", "150", "punta", "redonda", "frenos", "hao"]
  },
  {
    id: "prod-147",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (0,00 STD DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/147.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "mago"]
  },
  {
    id: "prod-148",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (0,25 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/148.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "mago"]
  },
  {
    id: "prod-149",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (0,50 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/149.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "hao"]
  },
  {
    id: "prod-150",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (0,75 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/150.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "hao"]
  },
  {
    id: "prod-151",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (1,00 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/151.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "hao"]
  },
  {
    id: "prod-152",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (1,25 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/152.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "hao"]
  },
  {
    id: "prod-153",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (1,50 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/153.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "mago"]
  },
  {
    id: "prod-154",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (1,75 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/154.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "hao"]
  },
  {
    id: "prod-155",
    name: "KIT PISTÓN COMPLETO HONDA C100 BIZ / WAVE (2,00 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.310",
    image: "assets/articulos/155.jpg",
    tags: ["kit", "piston", "honda", "c100", "biz", "wave", "pin", "motor", "mago"]
  },
  {
    id: "prod-156",
    name: "RETEN SUSPENSION HONDA CBX250 / NS200 (37x50x11)",
    category: "Suspensión / ruedas",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.260",
    image: "assets/articulos/156.jpg",
    tags: ["reten", "suspension", "honda", "cbx250", "ns200", "37x50x11", "ruedas", "hao"]
  },
  {
    id: "prod-157",
    name: "CDI ZANELLA RX150 FICHA CUADRADA (6 PIN)",
    category: "Electricidad",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.050",
    image: "assets/articulos/157.jpg",
    tags: ["cdi", "zanella", "rx150", "ficha", "cuadrada", "pin", "electricidad", "hao"]
  },
  {
    id: "prod-158",
    name: "PUÑO TIPO CROOS UNICOLOR 125mm ROJO",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.755",
    image: "assets/articulos/158.jpg",
    tags: ["puno", "tipo", "croos", "unicolor", "125mm", "rojo", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-159",
    name: "PUÑO TIPO CROOS UNICOLOR 125mm AZUL",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.755",
    image: "assets/articulos/159.jpg",
    tags: ["puno", "tipo", "croos", "unicolor", "125mm", "azul", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-160",
    name: "PUÑO TIPO CROOS UNICOLOR 125mm NEGRO",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.755",
    image: "assets/articulos/160.jpg",
    tags: ["puno", "tipo", "croos", "unicolor", "125mm", "negro", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-161",
    name: "PUÑO TIPO PRO TAPER ROJO",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.082",
    image: "assets/articulos/161.jpg",
    tags: ["puno", "tipo", "pro", "taper", "rojo", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-162",
    name: "PUÑO TIPO PRO TAPER AZUL",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.082",
    image: "assets/articulos/162.jpg",
    tags: ["puno", "tipo", "pro", "taper", "azul", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-163",
    name: "CORONA Y PIÑON MOTOMEL SKUA 150 46/17T DORADA",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.240",
    image: "assets/articulos/163.jpg",
    tags: ["corona", "pinon", "motomel", "skua", "150", "17t", "dorada", "transmision", "hao"]
  },
  {
    id: "prod-164",
    name: "CORONA Y PIÑÓN YAMAHA YBR 125 43/14T DORADA",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.540",
    image: "assets/articulos/164.jpg",
    tags: ["corona", "pinon", "yamaha", "ybr", "125", "14t", "dorada", "transmision", "hao"]
  },
  {
    id: "prod-165",
    name: "BATERÍA 12N5-3B GEL SELLADA",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$16.300",
    image: "assets/articulos/165.jpg",
    tags: ["bateria", "12n5", "gel", "sellada", "baterias", "hao"]
  },
  {
    id: "prod-166",
    name: "BATERÍA 12N7A-3A GEL SELLADA",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$21.600",
    image: "assets/articulos/166.jpg",
    tags: ["bateria", "12n7a", "gel", "sellada", "baterias", "hao"]
  },
  {
    id: "prod-167",
    name: "PUÑO TIPO PRO TAPER FUCSIA",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.760",
    image: "assets/articulos/167.jpg",
    tags: ["puno", "tipo", "pro", "taper", "fucsia", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-168",
    name: "PUÑO TIPO PRO TAPER VERDE",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.760",
    image: "assets/articulos/168.jpg",
    tags: ["puno", "tipo", "pro", "taper", "verde", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-169",
    name: "PUÑO TIPO PRO TAPER NARANJA",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.760",
    image: "assets/articulos/169.jpg",
    tags: ["puno", "tipo", "pro", "taper", "naranja", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-170",
    name: "KIT PISTÓN COMPLETO HONDA WAVE S 110 (0,25 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/170.jpg",
    tags: ["kit", "piston", "honda", "wave", "110", "pin", "motor", "mago"]
  },
  {
    id: "prod-171",
    name: "KIT PISTÓN COMPLETO HONDA WAVE S 110 (0,50 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/171.jpg",
    tags: ["kit", "piston", "honda", "wave", "110", "pin", "motor", "mago"]
  },
  {
    id: "prod-172",
    name: "KIT PISTÓN COMPLETO HONDA WAVE S 110 (1,50 DIA 50,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/172.jpg",
    tags: ["kit", "piston", "honda", "wave", "110", "pin", "motor", "mago"]
  },
  {
    id: "prod-173",
    name: "KIT PISTÓN COMPLETO YAMAHA YBR125 (0,25 DIA 54,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/173.jpg",
    tags: ["kit", "piston", "yamaha", "ybr125", "pin", "motor", "mago"]
  },
  {
    id: "prod-174",
    name: "KIT PISTÓN COMPLETO YAMAHA YBR125 (0,50 DIA 54,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/174.jpg",
    tags: ["kit", "piston", "yamaha", "ybr125", "pin", "motor", "mago"]
  },
  {
    id: "prod-175",
    name: "KIT PISTÓN COMPLETO YAMAHA YBR125 (1,00 DIA 54,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.142",
    image: "assets/articulos/175.jpg",
    tags: ["kit", "piston", "yamaha", "ybr125", "pin", "motor", "mago"]
  },
  {
    id: "prod-176",
    name: "KIT PISTÓN COMPLETO BAJAJ ROUSER NS200 (0,25 DIA 72,0 mm , PIN 17 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.710",
    image: "assets/articulos/176.jpg",
    tags: ["kit", "piston", "bajaj", "rouser", "ns200", "pin", "motor", "mago"]
  },
  {
    id: "prod-177",
    name: "KIT PISTÓN COMPLETO BAJAJ ROUSER NS200 (0,50 DIA 72,0 mm , PIN 17 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.710",
    image: "assets/articulos/177.jpg",
    tags: ["kit", "piston", "bajaj", "rouser", "ns200", "pin", "motor", "mago"]
  },
  {
    id: "prod-178",
    name: "KIT PISTÓN COMPLETO HONDA CG150 TITÁN (0,00 STD DIA 57,3 mm , PIN 14 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.415",
    image: "assets/articulos/178.jpg",
    tags: ["kit", "piston", "honda", "cg150", "titan", "pin", "motor", "mago"]
  },
  {
    id: "prod-179",
    name: "KIT PISTÓN COMPLETO YAMAHA CRYPTON T-105 (0,25 DIA 49,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.900",
    image: "assets/articulos/179.jpg",
    tags: ["kit", "piston", "yamaha", "crypton", "105", "pin", "motor", "mago"]
  },
  {
    id: "prod-180",
    name: "KIT PISTÓN COMPLETO YAMAHA NEW CRYPTON T-110 (0,50 DIA 51,0 mm , PIN 13 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.110",
    image: "assets/articulos/180.jpg",
    tags: ["kit", "piston", "yamaha", "new", "crypton", "110", "pin", "motor", "mago"]
  },
  {
    id: "prod-181",
    name: "KIT PISTÓN COMPLETO YAMAHA FZ16 STD DIA 58,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.355",
    image: "assets/articulos/181.jpg",
    tags: ["kit", "piston", "yamaha", "fz16", "pin", "motor", "mago"]
  },
  {
    id: "prod-182",
    name: "KIT PISTÓN COMPLETO YAMAHA FZ16 (0,25 DIA 58,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.355",
    image: "assets/articulos/182.jpg",
    tags: ["kit", "piston", "yamaha", "fz16", "pin", "motor", "mago"]
  },
  {
    id: "prod-183",
    name: "KIT PISTÓN COMPLETO YAMAHA FZ16 (0,50 DIA 58,0 mm , PIN 15 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.355",
    image: "assets/articulos/183.jpg",
    tags: ["kit", "piston", "yamaha", "fz16", "pin", "motor", "mago"]
  },
  {
    id: "prod-184",
    name: "KIT PISTÓN COMPLETO HONDA CBX250 / XR250 TORNADO (0,25 DIA 73,0 mm , PIN 17 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$7.186",
    image: "assets/articulos/184.jpg",
    tags: ["kit", "piston", "honda", "cbx250", "xr250", "tornado", "pin", "motor", "mago"]
  },
  {
    id: "prod-185",
    name: "KIT PISTÓN COMPLETO HONDA CBX250 / XR250 TORNADO (0,50 DIA 73,0 mm , PIN 17 mm)",
    category: "Motor",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$7.186",
    image: "assets/articulos/185.jpg",
    tags: ["kit", "piston", "honda", "cbx250", "xr250", "tornado", "pin", "motor", "mago"]
  },
  {
    id: "prod-186",
    name: "CORONA Y PIÑÓN BAJAJ ROUSER NS200 39/14T DORADA",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$6.242",
    image: "assets/articulos/186.jpg",
    tags: ["corona", "pinon", "bajaj", "rouser", "ns200", "14t", "dorada", "transmision", "hao"]
  },
  {
    id: "prod-187",
    name: "ESPEJO HONDA CG150",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.300",
    image: "assets/articulos/187.jpg",
    tags: ["espejo", "honda", "cg150", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-188",
    name: "ESPEJO HONDA XR250 TORNADO (REDONDO)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.630",
    image: "assets/articulos/188.jpg",
    tags: ["espejo", "honda", "xr250", "tornado", "redondo", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-189",
    name: "ZAPATAS DE FRENO HONDA XR250 TORNADO",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.110",
    image: "assets/articulos/189.jpg",
    tags: ["zapatas", "freno", "honda", "xr250", "tornado", "frenos", "hao"]
  },
  {
    id: "prod-190",
    name: "PASTILLA DE FRENO DELANTERA HONDA XR250 TORNADO",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.100",
    image: "assets/articulos/190.jpg",
    tags: ["pastilla", "freno", "delantera", "honda", "xr250", "tornado", "frenos", "hao"]
  },
  {
    id: "prod-191",
    name: "PASTILLA DE FRENO DELANTERA BAJAJ ROUSER NS200",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.100",
    image: "assets/articulos/191.jpg",
    tags: ["pastilla", "freno", "delantera", "bajaj", "rouser", "ns200", "frenos", "hao"]
  },
  {
    id: "prod-192",
    name: "PASTILLA DE FRENO TRASERA BAJAJ ROUSER NS200",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.100",
    image: "assets/articulos/192.jpg",
    tags: ["pastilla", "freno", "trasera", "bajaj", "rouser", "ns200", "frenos", "hao"]
  },
  {
    id: "prod-193",
    name: "CADENA DISTRIBUCION 25H X 86L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.730",
    image: "assets/articulos/193.jpg",
    tags: ["cadena", "distribucion", "25h", "86l", "transmision", "mago"]
  },
  {
    id: "prod-194",
    name: "CADENA DISTRIBUCION 404H x 86L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.335",
    image: "assets/articulos/194.jpg",
    tags: ["cadena", "distribucion", "404h", "86l", "transmision", "mago"]
  },
  {
    id: "prod-195",
    name: "CADENA DISTRIBUCION 404H x 90L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.475",
    image: "assets/articulos/195.jpg",
    tags: ["cadena", "distribucion", "404h", "90l", "transmision", "mago"]
  },
  {
    id: "prod-196",
    name: "CADENA DISTRIBUCION 404H x 92L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.615",
    image: "assets/articulos/196.jpg",
    tags: ["cadena", "distribucion", "404h", "92l", "transmision", "mago"]
  },
  {
    id: "prod-197",
    name: "CADENA DISTRIBUCION 404H x 94L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.755",
    image: "assets/articulos/197.jpg",
    tags: ["cadena", "distribucion", "404h", "94l", "transmision", "mago"]
  },
  {
    id: "prod-198",
    name: "CADENA DISTRIBUCION 404H x 96L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$2.900",
    image: "assets/articulos/198.jpg",
    tags: ["cadena", "distribucion", "404h", "96l", "transmision", "mago"]
  },
  {
    id: "prod-199",
    name: "CADENA DISTRIBUCION 409H x 126L",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.000",
    image: "assets/articulos/199.jpg",
    tags: ["cadena", "distribucion", "409h", "126l", "transmision", "mago"]
  },
  {
    id: "prod-200",
    name: "CADENA DISTRIBUCION 409H x 94L",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$5.000",
    image: "assets/articulos/200.jpg",
    tags: ["cadena", "distribucion", "409h", "94l", "transmision", "hao"]
  },
  {
    id: "prod-201",
    name: "ESTATOR ZANELLA RX150 2017 8 CAMPOS LUCES ENCENDIDAS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$6.388",
    image: "assets/articulos/201.jpg",
    tags: ["estator", "zanella", "rx150", "2017", "campos", "luces", "encendidas", "electricidad", "mago"]
  },
  {
    id: "prod-202",
    name: "ESTATOR HONDA WAVE S 110 12 CAMPOS LUCES ENCENDIDAS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$10.352",
    image: "assets/articulos/202.jpg",
    tags: ["estator", "honda", "wave", "110", "campos", "luces", "encendidas", "electricidad", "mago"]
  },
  {
    id: "prod-203",
    name: "ESTATOR YAMAHA NEW CRYPTON T-110 12 CAMPOS LUCES ENCENDIDAS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$11.265",
    image: "assets/articulos/203.jpg",
    tags: ["estator", "yamaha", "new", "crypton", "110", "campos", "luces", "encendidas", "electricidad", "mago"]
  },
  {
    id: "prod-204",
    name: "ESTATOR YAMAHA FZ16 12 CAMPOS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$10.352",
    image: "assets/articulos/204.jpg",
    tags: ["estator", "yamaha", "fz16", "campos", "electricidad", "mago"]
  },
  {
    id: "prod-205",
    name: "ESTATOR YAMAHA CRYPTON T-105 7 CAMPOS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$9.224",
    image: "assets/articulos/205.jpg",
    tags: ["estator", "yamaha", "crypton", "105", "campos", "electricidad", "mago"]
  },
  {
    id: "prod-206",
    name: "ESTATOR HONDA NEW CG150 TITAN (2017)",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.118",
    image: "assets/articulos/206.jpg",
    tags: ["estator", "honda", "new", "cg150", "titan", "2017", "electricidad", "mago"]
  },
  {
    id: "prod-207",
    name: "ESTATOR HONDA XR250 TORNADO / TWISTER 18 CAMPOS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$13.467",
    image: "assets/articulos/207.jpg",
    tags: ["estator", "honda", "xr250", "tornado", "twister", "campos", "electricidad", "mago"]
  },
  {
    id: "prod-208",
    name: "ESTATOR HONDA CB190R 18 CAMPOS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$15.000",
    image: "assets/articulos/208.jpg",
    tags: ["estator", "honda", "cb190r", "campos", "electricidad", "mago"]
  },
  {
    id: "prod-209",
    name: "ESTATOR YAMAHA YBR 125 CHINA 7 CAMPOS",
    category: "Electricidad",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$10.855",
    image: "assets/articulos/209.jpg",
    tags: ["estator", "yamaha", "ybr", "125", "china", "campos", "electricidad", "mago"]
  },
  {
    id: "prod-210",
    name: "CORONA Y PIÑON HONDA NXR125 BROSS 54T/17T",
    category: "Transmisión",
    brand: "MAGO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$6.760",
    image: "assets/articulos/210.jpg",
    tags: ["corona", "pinon", "honda", "nxr125", "bross", "54t", "17t", "transmision", "mago"]
  },
  {
    id: "prod-211",
    name: "RGULADOR DE VOLTAJE TRIFÁSICO GILERA SMASH (LUZENCENDIDA)",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$8.545",
    image: "assets/articulos/211.jpg",
    tags: ["rgulador", "voltaje", "trifasico", "gilera", "smash", "luzencendida", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-212",
    name: "BATERÍA DE GEL SELLADA YTX5-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$18.222",
    image: "assets/articulos/212.jpg",
    tags: ["bateria", "gel", "sellada", "ytx5", "baterias"]
  },
  {
    id: "prod-213",
    name: "BATERÍA DE GEL SELLADA YTX7L-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$21.700",
    image: "assets/articulos/213.jpg",
    tags: ["bateria", "gel", "sellada", "ytx7l", "baterias"]
  },
  {
    id: "prod-214",
    name: "BATERÍA DE GEL SELLADA YTX7A-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$22.022",
    image: "assets/articulos/214.jpg",
    tags: ["bateria", "gel", "sellada", "ytx7a", "baterias"]
  },
  {
    id: "prod-215",
    name: "BATERÍA DE GEL SELLADA YBL6,5-LB",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$19.780",
    image: "assets/articulos/215.jpg",
    tags: ["bateria", "gel", "sellada", "ybl6", "baterias"]
  },
  {
    id: "prod-216",
    name: "BATERÍA DE GEL SELLADA YTX9L-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/216.jpg",
    tags: ["bateria", "gel", "sellada", "ytx9l", "baterias"]
  },
  {
    id: "prod-217",
    name: "BATERÍA DE GEL SELLADA 12N9-3B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/217.jpg",
    tags: ["bateria", "gel", "sellada", "12n9", "baterias"]
  },
  {
    id: "prod-218",
    name: "BATERÍA DE GEL SELLADA 12N9-4B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/218.jpg",
    tags: ["bateria", "gel", "sellada", "12n9", "baterias"]
  },
  {
    id: "prod-219",
    name: "BATERÍA DE GEL SELLADA 12N7-3B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$21.700",
    image: "assets/articulos/219.jpg",
    tags: ["bateria", "gel", "sellada", "12n7", "baterias"]
  },
  {
    id: "prod-220",
    name: "BATERÍA DE GEL SELLADA YTX4L-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$14.422",
    image: "assets/articulos/220.jpg",
    tags: ["bateria", "gel", "sellada", "ytx4l", "baterias"]
  },
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
        <img class="category-image" src="${category.image}" alt="${category.name}" loading="lazy">
        <div class="category-info">
          <h3>${category.name}</h3>
          <p>${count} productos</p>
        </div>
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
