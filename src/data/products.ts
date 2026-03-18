export type ProductDetailSection = {
  id: string;
  title: string;
  content: string;
};

export type Product = {
  id: string;
  title: string;
  category: string;
  priceLabel: string;
  description: string;
  image: string;
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
    details: [
      {
        id: "dimensions",
        title: "Dimensiones",
        content: "Alto: 24cm | Ancho: 15cm | Profundidad: 12cm. Peso aproximado: 1.2kg",
      },
      {
        id: "materials",
        title: "Material y Cuidado",
        content: "Gres esmaltado a alta temperatura. Limpiar con un paño húmedo. No apto para lavavajillas o microondas.",
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
    details: [
      {
        id: "dimensions",
        title: "Dimensiones",
        content: "Alto: 18cm | Diámetro: 20cm",
      },
      {
        id: "materials",
        title: "Material y Cuidado",
        content: "Cerámica de baja temperatura con acabado natural. Mantener alejado de líquidos oscuros.",
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
    details: [
      {
        id: "dimensions",
        title: "Dimensiones",
        content: "Alto: 8cm | Diámetro: 16cm",
      },
      {
        id: "materials",
        title: "Material y Cuidado",
        content: "Gres apto para uso alimentario. Seguro para microondas y lavavajillas.",
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
    details: [
      {
        id: "dimensions",
        title: "Dimensiones",
        content: "Alto: 30cm | Diámetro base: 12cm",
      },
      {
        id: "materials",
        title: "Material y Cuidado",
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
