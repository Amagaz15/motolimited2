/* ==========================================================
   MOTO LIMITED - CATÁLOGO

   Para agregar/quitar productos:
   - Buscá const products = [...]
   - Copiá, editá o eliminá bloques completos.
   - No hace falta tocar HTML ni CSS.
========================================================== */

const WHATSAPP_NUMBER = "5492236685699";
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
    code: "CCO-4",
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
    code: "CCO-5",
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
    code: "CCO-7",
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
    code: "GL-0002",
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
    code: "GL-0007",
    name: "CORONA Y PIÑON MOTOMEL SKUA 150 43/16T",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.720",
    image: "assets/articulos/005.png",
    tags: ["corona", "pinon", "motomel", "skua", "150", "16t", "transmision", "hao"]
  },
  {
    id: "prod-006",
    code: "GL-0010MG",
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
    code: "GL-0011",
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
    code: "GL-0016",
    name: "GUIA CADENA GILERA SMASH 110 (Ø12mm & Ø17mm)",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$750",
    image: "assets/articulos/008.jpg",
    tags: ["guia", "cadena", "gilera", "smash", "110", "12mm", "17mm", "transmision", "hao"]
  },
  {
    id: "prod-009",
    code: "GL-0017",
    name: "GUIA CADENA YAMAHA YBR 125",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.500",
    image: "assets/articulos/009.jpg",
    tags: ["guia", "cadena", "yamaha", "ybr", "125", "transmision", "hao"]
  },
  {
    id: "prod-010",
    code: "GL-0018",
    name: "GUIA CADENA CG TITAN 150 Y OTRAS REDONDO (Ø18mm)",
    category: "Transmisión",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$750",
    image: "assets/articulos/010.jpg",
    tags: ["guia", "cadena", "titan", "150", "otras", "redondo", "18mm", "transmision", "hao"]
  },
  {
    id: "prod-011",
    code: "GL-0022",
    name: "KIT RETENES DE MOTOR ZANELLA RX150",
    category: "Motor",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$1.500",
    image:  "assets/articulos/011.png",
    tags: ["kit", "retenes", "motor", "zanella", "rx150", "hao"]
  },
  {
    id: "prod-012",
    code: "GL-0023MG",
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
    code: "GL-0025MG",
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
    code: "GL-0026MG",
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
    code: "GL-0033MG",
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
    code: "GL-0037",
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
    code: "GL-0039MG",
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
    code: "GL-0042",
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
    code: "GL-0043",
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
    code: "GL-0044",
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
    code: "GL-0047",
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
    code: "GL-0049",
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
    code: "GL-0051",
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
    code: "GL-0056",
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
    code: "GL-0058",
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
    code: "GL-0059",
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
    code: "GL-0064",
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
    code: "GL-0067",
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
    code: "GL-0070",
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
    code: "GL-0074",
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
    code: "GL-0075",
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
    code: "GL-0076",
    name: "PASTILLAS DE FRENO HONDA TITAN 2000 (130mm)",
    category: "Frenos",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$4.530",
    image: "assets/articulos/032.jpg",
    tags: ["zapatas", "freno", "honda", "titan", "2000", "130mm", "frenos", "hao"]
  },
  {
    id: "prod-033",
    code: "GL-0077",
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
    code: "GL-0079",
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
    code: "GL-0080",
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
    code: "GL-0084MG",
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
    code: "GL-0100",
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
    code: "GL-0102",
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
    code: "GL-0103",
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
    code: "GL-0106",
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
    code: "GL-0107",
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
    code: "GL-0110",
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
    code: "GL-0111MG",
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
    code: "GL-0112MG",
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
    code: "GL-0113MG",
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
    code: "GL-0124",
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
    code: "GL-0129",
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
    code: "GL-0141MG",
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
    code: "GL-0153",
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
    code: "GL-0154",
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
    code: "GL-0156",
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
    code: "GL-0157",
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
    code: "GL-0158",
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
    code: "GL-0159",
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
    code: "GL-0168",
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
    code: "GL-0178",
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
    code: "GL-0210",
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
    code: "GL-0211",
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
    code: "GL-0214MG",
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
    code: "GL-0215MG",
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
    code: "GL-0217",
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
    code: "GL-0232",
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
    code: "GL-0233",
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
    code: "GL-0237",
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
    code: "GL-0238",
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
    code: "GL-0238MG",
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
    code: "GL-0239",
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
    code: "GL-0249",
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
    code: "GL-0250",
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
    code: "GL-0251",
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
    code: "GL-0252",
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
    code: "GL-0261",
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
    code: "GL-0263",
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
    code: "GL-0307",
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
    code: "GL-0332",
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
    code: "GL-0335",
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
    code: "GL-0337",
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
    code: "GL-0338",
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
    code: "GL-0339",
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
    code: "GL-0340",
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
    code: "GL-0343",
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
    code: "GL-0345",
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
    code: "GL-0347",
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
    code: "GL-0352MG",
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
    code: "GL-0353MG",
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
    code: "GL-0358",
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
    code: "GL-0359",
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
    code: "GL-0360",
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
    code: "GL-0361",
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
    code: "GL-0364",
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
    code: "GL-0365",
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
    code: "GL-0373",
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
    code: "GL-0377",
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
    code: "GL-0378",
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
    code: "GL-0379",
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
    code: "GL-0380",
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
    code: "GL-0381",
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
    code: "GL-0382",
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
    code: "GL-0383",
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
    code: "GL-0384",
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
    code: "GL-0385",
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
    code: "GL-0386MG",
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
    code: "GL-0387",
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
    code: "GL-0388",
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
    code: "GL-0389",
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
    code: "GL-0390",
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
    code: "GL-0391",
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
    code: "GL-0392",
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
    code: "GL-0393",
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
    code: "GL-0394",
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
    code: "GL-0395",
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
    code: "GL-0396",
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
    code: "GL-0397",
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
    code: "GL-0398",
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
    code: "GL-0399",
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
    code: "GL-0401",
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
    code: "GL-0403",
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
    code: "GL-0411",
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
    code: "GL-0412",
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
    code: "GL-0413",
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
    code: "GL-0414",
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
    code: "GL-0415",
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
    code: "GL-0416",
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
    code: "GL-0425",
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
    code: "GL-0427",
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
    code: "GL-0429",
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
    code: "GL-0430",
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
    code: "GL-0435",
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
    code: "GL-0447MG",
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
    code: "GL-0449",
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
    code: "GL-0450MG",
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
    code: "GL-0453MG",
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
    code: "GL-0464",
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
    code: "GL-0465",
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
    code: "GL-0466",
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
    code: "GL-0467",
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
    code: "GL-0468",
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
    code: "GL-0469",
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
    code: "GL-0471",
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
    code: "GL-0472MG",
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
    code: "GL-0475",
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
    code: "GL-0476",
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
    code: "GL-0478",
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
    code: "GL-0479",
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
    code: "GL-0480",
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
    code: "GL-0481",
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
    code: "GL-0482MG",
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
    code: "GL-0483MG",
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
    code: "GL-0484",
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
    code: "GL-0485",
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
    code: "GL-0486",
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
    code: "GL-0487",
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
    code: "GL-0488MG",
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
    code: "GL-0489",
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
    code: "GL-0490MG",
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
    code: "GL-0493",
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
    code: "GL-0494",
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
    code: "GL-0499",
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
    code: "GL-0500",
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
    code: "GL-0501",
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
    code: "GL-0502",
    name: "PUÑO NEGRO Y ROJO",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.082",
    image: "assets/articulos/161.jpg",
    tags: ["puno", "tipo", "pro", "taper", "rojo", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-162",
    code: "GL-0503",
    name: "PUÑO NEGRO Y AZUL",
    category: "Espejos y accesorios",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$3.082",
    image: "assets/articulos/162.jpg",
    tags: ["puno", "tipo", "pro", "taper", "azul", "espejos", "accesorios", "hao"]
  },
  {
    id: "prod-163",
    code: "GL-0505",
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
    code: "GL-0506",
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
    code: "GL-0507",
    name: "BATERÍA 12N5-3B GEL SELLADA",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$16.300",
    image: "assets/articulos/165.png",
    tags: ["bateria", "12n5", "gel", "sellada", "baterias", "hao"]
  },
  {
    id: "prod-166",
    code: "GL-0508",
    name: "BATERÍA 12N7A-3A GEL SELLADA",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$21.600",
    image: "assets/articulos/166.png",
    tags: ["bateria", "12n7a", "gel", "sellada", "baterias", "hao"]
  },
  {
    id: "prod-167",
    code: "GL-0509",
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
    code: "GL-0510",
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
    code: "GL-0511",
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
    code: "GL-0514MG",
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
    code: "GL-0515MG",
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
    code: "GL-0519MG",
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
    code: "GL-0523MG",
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
    code: "GL-0524MG",
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
    code: "GL-0526MG",
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
    code: "GL-0532MG",
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
    code: "GL-0533MG",
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
    code: "GL-0540MG",
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
    code: "GL-0550MG",
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
    code: "GL-0560MG",
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
    code: "GL-0585MG",
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
    code: "GL-0586MG",
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
    code: "GL-0587MG",
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
    code: "GL-0595MG",
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
    code: "GL-0596MG",
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
    code: "GL-0603",
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
    code: "GL-0604",
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
    code: "GL-0605",
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
    code: "GL-0615",
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
    code: "GL-0616",
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
    code: "GL-0617",
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
    code: "GL-0618",
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
    code: "GL-0698MG",
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
    code: "GL-0700MG",
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
    code: "GL-0701MG",
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
    code: "GL-0702MG",
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
    code: "GL-0703MG",
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
    code: "GL-0704MG",
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
    code: "GL-0705MG",
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
    code: "GL-0706",
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
    code: "GL-0717MG",
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
    code: "GL-0718MG",
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
    code: "GL-0719MG",
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
    code: "GL-0720MG",
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
    code: "GL-0721MG",
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
    code: "GL-0722MG",
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
    code: "GL-0723MG",
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
    code: "GL-0724MG",
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
    code: "GL-0725MG",
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
    code: "GL-0732MG",
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
    code: "GL-0735",
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
    code: "GL-0742",
    name: "BATERÍA DE GEL SELLADA YTX5-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$18.222",
    image: "assets/articulos/212.png",
    tags: ["bateria", "gel", "sellada", "ytx5", "baterias"]
  },
  {
    id: "prod-213",
    code: "GL-0743",
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
    code: "GL-0744",
    name: "BATERÍA DE GEL SELLADA YTX7A-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$22.022",
    image: "assets/articulos/214.png",
    tags: ["bateria", "gel", "sellada", "ytx7a", "baterias"]
  },
  {
    id: "prod-215",
    code: "GL-0745",
    name: "BATERÍA DE GEL SELLADA YBL6,5-LB",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$19.780",
    image: "assets/articulos/215.png",
    tags: ["bateria", "gel", "sellada", "ybl6", "baterias"]
  },
  {
    id: "prod-216",
    code: "GL-0746",
    name: "BATERÍA DE GEL SELLADA YTX9L-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/216.png",
    tags: ["bateria", "gel", "sellada", "ytx9l", "baterias"]
  },
  {
    id: "prod-217",
    code: "GL-0747",
    name: "BATERÍA DE GEL SELLADA 12N9-3B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/217.png",
    tags: ["bateria", "gel", "sellada", "12n9", "baterias"]
  },
  {
    id: "prod-218",
    code: "GL-0748",
    name: "BATERÍA DE GEL SELLADA 12N9-4B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$24.847",
    image: "assets/articulos/218.png",
    tags: ["bateria", "gel", "sellada", "12n9", "baterias"]
  },
  {
    id: "prod-219",
    code: "GL-0749",
    name: "BATERÍA DE GEL SELLADA 12N7-3B",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$21.700",
    image: "assets/articulos/219.png",
    tags: ["bateria", "gel", "sellada", "12n7", "baterias"]
  },
  {
    id: "prod-220",
    code: "GL-0750",
    name: "BATERÍA DE GEL SELLADA YTX4L-BS",
    category: "Baterías",
    brand: "HAO",
    detail: "Consultar compatibilidad y disponibilidad.",
    price: "$14.422",
    image: "assets/articulos/220.png",
    tags: ["bateria", "gel", "sellada", "ytx4l", "baterias"]
  },
  {
  id: "prod-221",
    code: "HRCUB-25017",
  name: "CUBIERTA 2.50-17 DJ-340 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 2.50-17 · Modelo DJ-340 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$17.960",
  image: "assets/articulos/221.jpg",
  tags: ["cubierta", "rueda", "2.50-17", "dj-340", "tt", "6pr", "horse runner"]
},
{
  id: "prod-222",
    code: "HRCUB-27514",
  name: "CUBIERTA 2.75-14 DJ-14 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 2.75-14 · Modelo DJ-14 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$21.505",
  image: "assets/articulos/222.jpg",
  tags: ["cubierta", "rueda", "2.75-14", "dj-14", "tt", "6pr", "horse runner"]
},
{
  id: "prod-223",
    code: "HRCUB-8010014",
  name: "CUBIERTA 80/100-14 DJ-801 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 80/100-14 · Modelo DJ-801 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$20.773",
  image: "assets/articulos/223.jpg",
  tags: ["cubierta", "rueda", "80/100-14", "dj-801", "tt", "6pr", "horse runner"]
},
{
  id: "prod-224",
    code: "HRCUB-30018",
  name: "CUBIERTA 3.00-18 DJ-340 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 3.00-18 · Modelo DJ-340 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$23.440",
  image: "assets/articulos/224.jpg",
  tags: ["cubierta", "rueda", "3.00-18", "dj-340", "tt", "6pr", "horse runner"]
},
{
  id: "prod-225",
    code: "HRCUB-1107017",
  name: "CUBIERTA 110/70-17 HD-582 TL 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 110/70-17 · Modelo HD-582 · TL · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$35.650",
  image: "assets/articulos/225.jpg",
  tags: ["cubierta", "rueda", "110/70-17", "hd-582", "tl", "6pr", "horse runner"]
},
{
  id: "prod-226",
    code: "HRCUB-1109017",
  name: "CUBIERTA 110/90-17 DJ-706 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 110/90-17 · Modelo DJ-706 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$49.445",
  image: "assets/articulos/226.jpg",
  tags: ["cubierta", "rueda", "110/90-17", "dj-706", "tt", "6pr", "horse runner"]
},
{
  id: "prod-227",
    code: "HRCUB-1207017",
  name: "CUBIERTA 120/70-17 HD-608 TL 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 120/70-17 · Modelo HD-608 · TL · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$47.364",
  image: "assets/articulos/227.jpg",
  tags: ["cubierta", "rueda", "120/70-17", "hd-608", "tl", "6pr", "horse runner"]
},
{
  id: "prod-228",
    code: "RUNCUB-130/70-17",
  name: "CUBIERTA 130/70-17 RUNSTONE",
  category: "Suspensión / ruedas",
  brand: "RUNSTONE",
  detail: "Medida 130/70-17. Consultar compatibilidad y disponibilidad.",
  price: "$56.266",
  image: "assets/articulos/228.jpg",
  tags: ["cubierta", "rueda", "130/70-17", "runstone"]
},
{
  id: "prod-229",
    code: "HRCUB-46018",
  name: "CUBIERTA 4.60-18 DJ-722 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 4.60-18 · Modelo DJ-722 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$51.064",
  image: "assets/articulos/229.jpg",
  tags: ["cubierta", "rueda", "4.60-18", "dj-722", "tt", "6pr", "horse runner"]
},
{
  id: "prod-230",
    code: "HRCUB-909019",
  name: "CUBIERTA 90/90-19 HD-576 TT 6PR HORSE RUNNER",
  category: "Suspensión / ruedas",
  brand: "HORSE RUNNER",
  detail: "Medida 90/90-19 · Modelo HD-576 · TT · 6PR. Consultar compatibilidad y disponibilidad.",
  price: "$37.113",
  image: "assets/articulos/230.jpg",
  tags: ["cubierta", "rueda", "90/90-19", "hd-576", "tt", "6pr", "horse runner"]
},
];

const CART_STORAGE_KEY = "motolimited-cart";

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function parsePrice(price) {
  const cleanPrice = String(price || "")
    .replace(/\s/g, "")
    .replace("$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const value = Number(cleanPrice);
  return Number.isFinite(value) ? value : 0;
}

function formatMoney(value) {
  return `$${value.toLocaleString("es-AR")}`;
}

function getCartProduct(item) {
  return products.find(product => product.id === item.id) || item;
}

function getProductCode(item) {
  const product = getCartProduct(item);
  return product.code || item.code || product.id || item.id || "SIN-CODIGO";
}

function getItemPrice(item) {
  const product = getCartProduct(item);
  return parsePrice(product.price || item.price);
}

function getCartTotal() {
  return state.cart.reduce((total, item) => {
    return total + getItemPrice(item) * item.qty;
  }, 0);
}

function getCartItemsWithoutPrice() {
  return state.cart.filter(item => getItemPrice(item) <= 0).length;
}

const state = {
  search: "",
  category: "Todas",
  brand: "Todas",
  cart: loadCart()
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
const cartTotal = $("#cartTotal");
const floatingCartCount = $("#floatingCartCount");
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
    product.code,
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
          <div class="product-code">${product.code || product.id}</div>
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
      code: product.code || product.id,
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
  saveCart();

  const totalItems = state.cart.reduce((total, item) => total + item.qty, 0);
  const totalPedido = getCartTotal();
  const itemsSinPrecio = getCartItemsWithoutPrice();

  cartCount.textContent = totalItems;

  if (floatingCartCount) {
    floatingCartCount.textContent = totalItems;
    floatingCartCount.hidden = totalItems === 0;
  }

  if (cartTotal) {
    cartTotal.textContent = totalPedido > 0 ? formatMoney(totalPedido) : "$0";
  }

  if (state.cart.length === 0) {
    cartItems.innerHTML = `<p class="muted">Todavía no agregaste productos.</p>`;
    sendOrder.href = whatsappUrl("Hola Moto Limited, quiero consultar por repuestos.");

    if (cartTotal) {
      cartTotal.textContent = "$0";
    }

    return;
  }

  cartItems.innerHTML = state.cart.map(item => {
    const product = getCartProduct(item);
    const productCode = getProductCode(item);
    const unitPrice = getItemPrice(item);
    const subtotal = unitPrice * item.qty;

    const priceLine = unitPrice > 0
      ? `Precio unitario: ${formatMoney(unitPrice)} · Subtotal: ${formatMoney(subtotal)}`
      : "Precio: consultar";

    return `
      <div class="cart-item">
        <div>
          <span class="cart-product-code">Código: ${productCode}</span>
          <h4>${product.name || item.name}</h4>
          <p>${product.category || item.category} · ${product.brand || item.brand || "Marca a confirmar"} · Cantidad: ${item.qty}</p>
          <p>${priceLine}</p>
        </div>
        <button type="button" data-remove="${item.id}">Quitar</button>
      </div>
    `;
  }).join("");

  document.querySelectorAll("[data-remove]").forEach(button => {
    button.addEventListener("click", () => removeFromCart(button.dataset.remove));
  });

  const orderLines = state.cart.map((item, index) => {
    const product = getCartProduct(item);
    const productCode = getProductCode(item);
    const unitPrice = getItemPrice(item);
    const subtotal = unitPrice * item.qty;

    const priceText = unitPrice > 0
      ? `Precio unitario: ${formatMoney(unitPrice)} | Subtotal: ${formatMoney(subtotal)}`
      : "Precio a consultar";

    return `${index + 1}. Código: ${productCode} | ${product.name || item.name} | Cantidad: ${item.qty} | ${priceText}`;
  });

  const totalText = totalPedido > 0
    ? `Total estimado del pedido: ${formatMoney(totalPedido)}`
    : "Total estimado del pedido: a confirmar";

  const message = [
    "Hola Moto Limited, quiero consultar por estos repuestos:",
    "",
    ...orderLines,
    "",
    totalText,
    itemsSinPrecio > 0 ? `Productos sin precio cargado: ${itemsSinPrecio}. El total puede variar.` : "",
    "",
    "También quiero confirmar compatibilidad, stock y precio final."
  ].filter(Boolean).join("\n");

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
  bindEvents();
  initWhatsappLinks();
  renderCart();
  bindHeaderScroll();
}


init();
