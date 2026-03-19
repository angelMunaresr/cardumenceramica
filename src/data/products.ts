export type ProductDetailSection = {
  id: string;
  title: string;
  content: string;
};

export type ProductSpecs = {
  size: string;
  material: string;
  finish: string;
  technique: string;
  firing: string;
  care: string;
};

export type Product = {
  id: string;
  title: string;
  category: string;
  priceLabel: string;
  description: string;
  image: string;
  specs: ProductSpecs;
  details?: ProductDetailSection[];
};

const products: Product[] = [
  {
    id: "1",
    title: "Sirena",
    category: "Escultura",
    priceLabel: "$120.00",
    description:
      "Una exploración caprichosa del mito y el material, acabada en esmalte espuma de mar. Cada pieza está esculpida a mano, presentando variaciones únicas que resaltan el proceso orgánico de creación.",
    image: "/img/sintitulo1.png",
    specs: {
      size: "24 × 15 × 12 cm (alto × ancho × profundidad)",
      material: "Gres (alta temperatura)",
      finish: "Esmalte satinado con matices marinos",
      technique: "Modelado a mano + texturizado orgánico",
      firing: "Cocción a alta temperatura (≈ 1240°C)",
      care: "Limpiar con paño húmedo. No microondas ni lavavajillas.",
    },
    details: [
      {
        id: "dimensions",
        title: "Tamaño y Peso",
        content: "24 × 15 × 12 cm. Peso aproximado: 1.2 kg. Puede variar ligeramente por ser una pieza hecha a mano.",
      },
      {
        id: "materials",
        title: "Material",
        content: "Gres de alta temperatura. Esmalte satinado con variaciones naturales del horneado.",
      },
      {
        id: "shipping",
        title: "Envío y Devoluciones",
        content: "Envío estándar en 3-5 días hábiles. Las piezas personalizadas o hechas a pedido pueden tomar hasta 3 semanas.",
      },
    ],
  },
  {
    id: "2",
    title: "Origen",
    category: "Vasija",
    priceLabel: "$85.00",
    description:
      "Formas de tierra cruda que celebran la belleza de la imperfección. Con textura porosa y un acabado mate en tonos tierra.",
    image: "/img/sintitulo2.png",
    specs: {
      size: "18 cm alto × 20 cm diámetro",
      material: "Cerámica de alta temperatura",
      finish: "Mate mineral con textura porosa",
      technique: "Construcción manual + engobe",
      firing: "Alta temperatura (≈ 1220–1240°C)",
      care: "Evitar líquidos muy oscuros por tiempos prolongados. Lavar a mano.",
    },
    details: [
      {
        id: "dimensions",
        title: "Tamaño",
        content: "Alto: 18cm | Diámetro: 20cm",
      },
      {
        id: "materials",
        title: "Material y Acabado",
        content: "Cerámica de alta temperatura con acabado mate. Textura porosa y variaciones naturales.",
      },
      {
        id: "shipping",
        title: "Envío y Devoluciones",
        content: "Envío estándar en 3-5 días hábiles.",
      },
    ],
  },
  {
    id: "3",
    title: "Eco",
    category: "Cuenco",
    priceLabel: "$45.00",
    description:
      "Siluetas mínimas diseñadas para rituales cotidianos. Su acabado semi-brillante interior contrasta maravillosamente con el exterior crudo.",
    image: "/img/sintitulo3.png",
    specs: {
      size: "8 cm alto × 16 cm diámetro",
      material: "Gres (apto uso alimentario)",
      finish: "Interior semi-brillante, exterior crudo",
      technique: "Torno + acabado manual",
      firing: "Alta temperatura (≈ 1240°C)",
      care: "Apto lavavajillas y microondas (uso doméstico).",
    },
    details: [
      {
        id: "dimensions",
        title: "Tamaño",
        content: "Alto: 8cm | Diámetro: 16cm",
      },
      {
        id: "materials",
        title: "Uso y Cuidado",
        content: "Apto para alimentos. Recomendado: evitar cambios térmicos bruscos.",
      },
      {
        id: "shipping",
        title: "Envío y Devoluciones",
        content: "Envío estándar en 3-5 días hábiles.",
      },
    ],
  },
  {
    id: "4",
    title: "Lava",
    category: "Jarrón",
    priceLabel: "$150.00",
    description:
      "Inspirado en flujos volcánicos, con una textura exterior pronunciada que invita a ser tocada.",
    image: "/img/sintitulo4.png",
    specs: {
      size: "30 cm alto × 12 cm diámetro base",
      material: "Gres negro texturizado",
      finish: "Textura exterior marcada, interior sellado",
      technique: "Modelado + texturizado en capas",
      firing: "Alta temperatura (≈ 1240°C)",
      care: "Lavar a mano. Secar bien el exterior texturizado.",
    },
    details: [
      {
        id: "dimensions",
        title: "Tamaño",
        content: "Alto: 30cm | Diámetro base: 12cm",
      },
      {
        id: "materials",
        title: "Material",
        content: "Gres negro texturizado. Retiene agua de forma segura para arreglos florales.",
      },
      {
        id: "shipping",
        title: "Envío y Devoluciones",
        content: "Envío especial con embalaje protector en 5-7 días hábiles.",
      },
    ],
  },
];

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

export async function getProducts(options?: {
  simulateEmpty?: boolean;
  simulateError?: boolean;
  delayMs?: number;
}) {
  await sleep(options?.delayMs ?? 350);

  if (options?.simulateError) {
    throw new Error("No se pudieron cargar los productos");
  }

  if (options?.simulateEmpty) {
    return [] as Product[];
  }

  return products;
}

export async function getProductById(
  id: string,
  options?: { simulateError?: boolean; delayMs?: number }
) {
  await sleep(options?.delayMs ?? 250);

  if (options?.simulateError) {
    throw new Error("No se pudo cargar el producto");
  }

  return products.find((p) => p.id === id) ?? null;
}
