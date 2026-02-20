export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  brand: string;
  sku: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
  subcategories: { name: string; slug: string }[];
}

export const categories: Category[] = [
  {
    name: "Confeção",
    slug: "confecao",
    description:
      "Fornos, fogões, fritadeiras e grelhadores profissionais para a sua cozinha.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    icon: "Flame",
    productCount: 245,
    subcategories: [
      { name: "Fornos", slug: "fornos" },
      { name: "Fogões", slug: "fogoes" },
      { name: "Fritadeiras", slug: "fritadeiras" },
      { name: "Fry-Tops", slug: "fry-tops" },
      { name: "Grelhadores", slug: "grelhadores" },
      { name: "Fornos de Pizza", slug: "fornos-pizza" },
    ],
  },
  {
    name: "Frio Comercial",
    slug: "frio-comercial",
    description:
      "Armários, bancadas, arcas e expositores refrigerados para conservação ideal.",
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=400&fit=crop",
    icon: "Snowflake",
    productCount: 312,
    subcategories: [
      { name: "Armários Refrigerados", slug: "armarios" },
      { name: "Bancadas Refrigeradas", slug: "bancadas" },
      { name: "Arcas Congeladoras", slug: "arcas" },
      { name: "Expositores", slug: "expositores" },
      { name: "Vitrines", slug: "vitrines" },
      { name: "Saladetes", slug: "saladetes" },
    ],
  },
  {
    name: "Lavagem",
    slug: "lavagem",
    description:
      "Máquinas de lavar louça e copos profissionais de alta eficiência.",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop",
    icon: "Droplets",
    productCount: 87,
    subcategories: [
      { name: "Lavagem de Louça", slug: "lavagem-louca" },
      { name: "Lavagem de Copos", slug: "lavagem-copos" },
      { name: "Túnel", slug: "tunel" },
      { name: "Capota", slug: "capota" },
      { name: "Acessórios", slug: "acessorios-lavagem" },
    ],
  },
  {
    name: "Máquinas de Gelo",
    slug: "maquinas-gelo",
    description:
      "Máquinas de gelo em cubo, escamas e granulado para todas as necessidades.",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop",
    icon: "Cuboid",
    productCount: 54,
    subcategories: [
      { name: "Cubos", slug: "cubos" },
      { name: "Escamas", slug: "escamas" },
      { name: "Granulado", slug: "granulado" },
      { name: "Depósitos", slug: "depositos" },
    ],
  },
  {
    name: "Preparação",
    slug: "preparacao",
    description:
      "Equipamentos de preparação dinâmica: picadoras, cortadoras e mixers.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
    icon: "ChefHat",
    productCount: 96,
    subcategories: [
      { name: "Picadoras de Carne", slug: "picadoras" },
      { name: "Trituradores", slug: "trituradores" },
      { name: "Mixers", slug: "mixers" },
      { name: "Cortadoras", slug: "cortadoras" },
    ],
  },
  {
    name: "Bar & Cafetaria",
    slug: "bar-cafetaria",
    description:
      "Tudo para o seu bar e cafetaria: máquinas de café, expositores e complementos.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    icon: "Coffee",
    productCount: 128,
    subcategories: [
      { name: "Máquinas de Café", slug: "maquinas-cafe" },
      { name: "Equipamentos de Bar", slug: "equipamentos-bar" },
      { name: "Complementos", slug: "complementos" },
      { name: "Palamenta & Menage", slug: "palamenta" },
    ],
  },
  {
    name: "Mobiliário Inox",
    slug: "mobiliario-inox",
    description:
      "Mesas, bancadas e estantes em aço inoxidável para cozinhas profissionais.",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
    icon: "Table",
    productCount: 73,
    subcategories: [
      { name: "Mesas de Trabalho", slug: "mesas" },
      { name: "Bancadas", slug: "bancadas-inox" },
      { name: "Estantes", slug: "estantes" },
      { name: "Elementos Neutros", slug: "elementos-neutros" },
    ],
  },
  {
    name: "Embalamento",
    slug: "embalamento",
    description:
      "Máquinas de embalar a vácuo e equipamentos sous vide profissionais.",
    image:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&h=400&fit=crop",
    icon: "Package",
    productCount: 41,
    subcategories: [
      { name: "Vácuo", slug: "vacuo" },
      { name: "Sous Vide", slug: "sous-vide" },
      { name: "Acessórios", slug: "acessorios-embalamento" },
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Forno Convetor Elétrico 10 GN 1/1",
    slug: "forno-convetor-eletrico-10gn",
    category: "Confeção",
    categorySlug: "confecao",
    subcategory: "Fornos",
    price: 5568.75,
    originalPrice: 7425.0,
    image:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    ],
    description:
      "Forno convetor profissional com 10 níveis GN 1/1. Ideal para restaurantes e hotéis de média e grande dimensão. Controlo digital de temperatura e humidade com programas pré-definidos.",
    specs: {
      Capacidade: "10 GN 1/1",
      Potência: "16.2 kW",
      Alimentação: "Elétrico Trifásico",
      Dimensões: "850 x 825 x 1100 mm",
      Peso: "142 kg",
      Temperatura: "30°C - 300°C",
    },
    inStock: true,
    featured: true,
    brand: "Giorik",
    sku: "GIO-FC10E",
  },
  {
    id: "2",
    name: "Armário Refrigerado 700L Inox",
    slug: "armario-refrigerado-700l",
    category: "Frio Comercial",
    categorySlug: "frio-comercial",
    subcategory: "Armários Refrigerados",
    price: 1121.75,
    originalPrice: 1409.0,
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&h=600&fit=crop",
    ],
    description:
      "Armário refrigerado em aço inoxidável com capacidade de 700 litros. Porta de batente com fecho automático. Refrigeração ventilada com descongelação automática.",
    specs: {
      Capacidade: "700 Litros",
      Temperatura: "-2°C / +8°C",
      Refrigerante: "R290",
      Dimensões: "720 x 810 x 2100 mm",
      Peso: "95 kg",
      Prateleiras: "3 ajustáveis",
    },
    inStock: true,
    featured: true,
    brand: "Infrico",
    sku: "INF-AR700",
  },
  {
    id: "3",
    name: "Máquina de Lavar Louça de Capota",
    slug: "maquina-lavar-louca-capota",
    category: "Lavagem",
    categorySlug: "lavagem",
    subcategory: "Capota",
    price: 2616.0,
    originalPrice: 3270.0,
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=600&fit=crop",
    ],
    description:
      "Máquina de lavar louça de capota com bomba de enxaguamento e descalcificador integrado. Ciclos de 60, 120 e 180 segundos. Capacidade para 60 cestos/hora.",
    specs: {
      Capacidade: "60 cestos/hora",
      Ciclos: "60 / 120 / 180 seg",
      Cesto: "500 x 500 mm",
      Dimensões: "690 x 760 x 1490 mm",
      Potência: "6.75 kW",
      "Consumo água": "2.5 L/ciclo",
    },
    inStock: true,
    featured: true,
    brand: "Winterhalter",
    sku: "WIN-PT500",
  },
  {
    id: "4",
    name: "Máquina de Gelo em Cubo Delta NG 60",
    slug: "maquina-gelo-cubo-delta-ng60",
    category: "Máquinas de Gelo",
    categorySlug: "maquinas-gelo",
    subcategory: "Cubos",
    price: 1000.0,
    originalPrice: 1250.0,
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=600&fit=crop",
    ],
    description:
      "Máquina de gelo em cubo com produção de 60kg/24h. Depósito de 30kg integrado. Sistema de limpeza automático e indicador de nível.",
    specs: {
      Produção: "60 kg/24h",
      Depósito: "30 kg",
      "Tipo de gelo": "Cubo oco 33g",
      Dimensões: "500 x 580 x 800 mm",
      Refrigerante: "R290",
      Peso: "45 kg",
    },
    inStock: true,
    featured: true,
    brand: "ITV",
    sku: "ITV-DNG60",
  },
  {
    id: "5",
    name: "Fogão 6 Queimadores com Forno Gás",
    slug: "fogao-6-queimadores-forno-gas",
    category: "Confeção",
    categorySlug: "confecao",
    subcategory: "Fogões",
    price: 2536.0,
    originalPrice: 3170.0,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    ],
    description:
      "Fogão profissional com 6 queimadores de alta potência e forno a gás GN 2/1. Estrutura em aço inoxidável AISI 304. Queimadores com acendimento piezoelétrico.",
    specs: {
      Queimadores: "6 x 6 kW",
      "Forno": "GN 2/1 a gás",
      Potência: "50.4 kW total",
      Dimensões: "1200 x 900 x 900 mm",
      Linha: "900",
      Peso: "185 kg",
    },
    inStock: true,
    featured: false,
    brand: "Fagor",
    sku: "FAG-CG9061",
  },
  {
    id: "6",
    name: "Bancada Refrigerada 3 Portas GN 1/1",
    slug: "bancada-refrigerada-3-portas",
    category: "Frio Comercial",
    categorySlug: "frio-comercial",
    subcategory: "Bancadas Refrigeradas",
    price: 1176.0,
    originalPrice: 1470.0,
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop",
    ],
    description:
      "Bancada refrigerada com 3 portas em aço inoxidável. Tampo em inox AISI 304 com rebaixo posterior. Compressor tropicalizado para ambientes quentes.",
    specs: {
      Capacidade: "420 Litros",
      Portas: "3",
      Temperatura: "-2°C / +8°C",
      Dimensões: "1795 x 700 x 850 mm",
      Refrigerante: "R290",
      Peso: "120 kg",
    },
    inStock: true,
    featured: true,
    brand: "Infrico",
    sku: "INF-BMGN1003",
  },
  {
    id: "7",
    name: "Fritadeira Elétrica 2x10L",
    slug: "fritadeira-eletrica-2x10l",
    category: "Confeção",
    categorySlug: "confecao",
    subcategory: "Fritadeiras",
    price: 506.75,
    originalPrice: 589.0,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=600&fit=crop",
    ],
    description:
      "Fritadeira elétrica dupla com dois tanques de 10 litros cada. Termostato regulável até 190°C. Zona fria para resíduos. Construção em aço inoxidável.",
    specs: {
      Capacidade: "2 x 10 Litros",
      Potência: "2 x 9 kW",
      Temperatura: "0°C - 190°C",
      Dimensões: "800 x 700 x 290 mm",
      Linha: "700",
      Peso: "32 kg",
    },
    inStock: true,
    featured: false,
    brand: "Fagor",
    sku: "FAG-FE7210",
  },
  {
    id: "8",
    name: "Forno Pizza 6+6 Pizzas Ø33cm",
    slug: "forno-pizza-6-6-pizzas",
    category: "Confeção",
    categorySlug: "confecao",
    subcategory: "Fornos de Pizza",
    price: 420.0,
    originalPrice: 830.0,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop",
    ],
    description:
      "Forno de pizza com câmara dupla para 6+6 pizzas de 33cm. Base em pedra refratária. Termómetro analógico integrado em cada câmara.",
    specs: {
      Capacidade: "6+6 pizzas Ø33cm",
      Câmaras: "2",
      Potência: "2 x 8.4 kW",
      "Base": "Pedra refratária",
      Dimensões: "1060 x 1040 x 750 mm",
      Peso: "175 kg",
    },
    inStock: true,
    featured: true,
    brand: "Cuppone",
    sku: "CUP-TP635L",
  },
  {
    id: "9",
    name: "Vitrine Expositora Refrigerada 1500mm",
    slug: "vitrine-expositora-refrigerada-1500",
    category: "Frio Comercial",
    categorySlug: "frio-comercial",
    subcategory: "Vitrines",
    price: 1168.0,
    originalPrice: 1460.0,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=600&fit=crop",
    ],
    description:
      "Vitrine expositora refrigerada com vidro curvo e iluminação LED. Ideal para pastelarias, cafés e take-away. Base com reserva de frio.",
    specs: {
      Comprimento: "1500 mm",
      Temperatura: "+2°C / +10°C",
      Iluminação: "LED integrada",
      Dimensões: "1500 x 800 x 1350 mm",
      Refrigerante: "R290",
      Prateleiras: "2 níveis",
    },
    inStock: true,
    featured: false,
    brand: "Jordão",
    sku: "JOR-VRC1500",
  },
  {
    id: "10",
    name: "Máquina de Embalar a Vácuo de Campânula",
    slug: "maquina-embalar-vacuo-campanula",
    category: "Embalamento",
    categorySlug: "embalamento",
    subcategory: "Vácuo",
    price: 752.0,
    originalPrice: 940.0,
    image:
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=600&h=600&fit=crop",
    ],
    description:
      "Máquina de embalar a vácuo de campânula profissional. Barra de soldadura de 420mm. Bomba de 20m³/h. Painel digital com 10 programas.",
    specs: {
      "Barra soldadura": "420 mm",
      Bomba: "20 m³/h",
      Programas: "10 pré-definidos",
      "Câmara": "460 x 480 x 180 mm",
      Dimensões: "540 x 620 x 465 mm",
      Peso: "52 kg",
    },
    inStock: true,
    featured: false,
    brand: "Sammic",
    sku: "SAM-SV420",
  },
  {
    id: "11",
    name: "Máquina de Café Expresso 2 Grupos",
    slug: "maquina-cafe-expresso-2-grupos",
    category: "Bar & Cafetaria",
    categorySlug: "bar-cafetaria",
    subcategory: "Máquinas de Café",
    price: 3200.0,
    originalPrice: 4100.0,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    ],
    description:
      "Máquina de café expresso profissional com 2 grupos. Caldeira de 11.5 litros em cobre. Pré-infusão programável e doseamento volumétrico.",
    specs: {
      Grupos: "2",
      Caldeira: "11.5 Litros (cobre)",
      Potência: "3.5 kW",
      Dimensões: "720 x 560 x 520 mm",
      Bomba: "Rotativa",
      Peso: "65 kg",
    },
    inStock: true,
    featured: true,
    brand: "La Cimbali",
    sku: "CIM-M26BE",
  },
  {
    id: "12",
    name: "Mesa de Trabalho Inox 1800x700mm",
    slug: "mesa-trabalho-inox-1800x700",
    category: "Mobiliário Inox",
    categorySlug: "mobiliario-inox",
    subcategory: "Mesas de Trabalho",
    price: 327.2,
    originalPrice: 409.0,
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=600&fit=crop",
    ],
    description:
      "Mesa de trabalho em aço inoxidável AISI 304 com prateleira inferior. Pés reguláveis em altura. Reforço traseiro de 40mm.",
    specs: {
      Material: "Inox AISI 304",
      Dimensões: "1800 x 700 x 850 mm",
      "Prateleira inferior": "Sim",
      "Pés": "Reguláveis",
      Reforço: "Traseiro 40mm",
      Peso: "35 kg",
    },
    inStock: true,
    featured: false,
    brand: "Distform",
    sku: "DIS-MT1807",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
