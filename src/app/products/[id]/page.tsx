import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Heart, Share2, Plus, Minus, ChevronDown } from "lucide-react";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Sirena",
    category: "Escultura",
    price: "$120.00",
    description: "Una exploración caprichosa del mito y el material, acabada en esmalte espuma de mar. Cada pieza está esculpida a mano, presentando variaciones únicas que resaltan el proceso orgánico de creación.",
    image: "/img/sintitulo1.png",
    details: [
      { id: 'dimensions', title: "Dimensiones", content: "Alto: 24cm | Ancho: 15cm | Profundidad: 12cm. Peso aproximado: 1.2kg" },
      { id: 'materials', title: "Material y Cuidado", content: "Gres esmaltado a alta temperatura. Limpiar con un paño húmedo. No apto para lavavajillas o microondas." },
      { id: 'shipping', title: "Envío y Devoluciones", content: "Envío estándar en 3-5 días hábiles. Las piezas personalizadas o hechas a pedido pueden tomar hasta 3 semanas." }
    ]
  },
  {
    id: 2,
    title: "Origen",
    category: "Vasija",
    price: "$85.00",
    description: "Formas de tierra cruda que celebran la belleza de la imperfección. Con textura porosa y un acabado mate en tonos tierra.",
    image: "/img/sintitulo2.png",
    details: [
      { id: 'dimensions', title: "Dimensiones", content: "Alto: 18cm | Diámetro: 20cm" },
      { id: 'materials', title: "Material y Cuidado", content: "Cerámica de baja temperatura con acabado natural. Mantener alejado de líquidos oscuros." },
      { id: 'shipping', title: "Envío y Devoluciones", content: "Envío estándar en 3-5 días hábiles." }
    ]
  },
  {
    id: 3,
    title: "Eco",
    category: "Cuenco",
    price: "$45.00",
    description: "Siluetas mínimas diseñadas para rituales cotidianos. Su acabado semi-brillante interior contrasta maravillosamente con el exterior crudo.",
    image: "/img/sintitulo3.png",
    details: [
      { id: 'dimensions', title: "Dimensiones", content: "Alto: 8cm | Diámetro: 16cm" },
      { id: 'materials', title: "Material y Cuidado", content: "Gres apto para uso alimentario. Seguro para microondas y lavavajillas." },
      { id: 'shipping', title: "Envío y Devoluciones", content: "Envío estándar en 3-5 días hábiles." }
    ]
  },
  {
    id: 4,
    title: "Lava",
    category: "Jarrón",
    price: "$150.00",
    description: "Inspirado en flujos volcánicos, con una textura exterior pronunciada que invita a ser tocada.",
    image: "/img/sintitulo4.png",
    details: [
      { id: 'dimensions', title: "Dimensiones", content: "Alto: 30cm | Diámetro base: 12cm" },
      { id: 'materials', title: "Material y Cuidado", content: "Gres negro texturizado. Retiene agua de forma segura para arreglos florales." },
      { id: 'shipping', title: "Envío y Devoluciones", content: "Envío especial con embalaje protector en 5-7 días hábiles." }
    ]
  },
  {
    id: 5,
    title: "Coral",
    category: "Plato",
    price: "$55.00",
    description: "Texturas delicadas que asemejan algas en el fondo del océano, con sutiles toques de esmalte transparente.",
    image: "/img/sintitulo5.png",
    details: [
      { id: 'dimensions', title: "Dimensiones", content: "Alto: 3cm | Diámetro: 26cm" },
      { id: 'materials', title: "Material y Cuidado", content: "Apto para alimentos. Lavar preferiblemente a mano para mantener la textura." },
      { id: 'shipping', title: "Envío y Devoluciones", content: "Envío estándar en 3-5 días hábiles." }
    ]
  }
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brandBackground flex flex-col font-sans text-gray-900 pb-20">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32 pt-32 transition-colors">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Image Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative group">
              {/* Decorative Blob background */}
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10 animate-pulse"></div>
              
              <div className="aspect-[4/5] w-full rounded-[30%_70%_70%_30%/50%_60%_40%_50%] overflow-hidden bg-primary/5 shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <span className="bg-brandBackground/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-gray-800 shadow-sm border border-black/5">
                  Nuevo
                </span>
                <span className="bg-primary/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider text-white shadow-sm">
                  Hecho a mano
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation (Simplified) */}
            <div className="grid grid-cols-4 gap-4 px-4">
              <button className="aspect-square rounded-2xl overflow-hidden border-2 border-primary cursor-pointer hover:opacity-80 transition-opacity">
                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
              </button>
              <button className="aspect-square rounded-2xl overflow-hidden border border-gray-200 cursor-pointer hover:border-primary/50 transition-colors opacity-70 hover:opacity-100">
                <img src={product.image} alt="Thumbnail 2" className="w-full h-full object-cover grayscale" />
              </button>
              <div className="aspect-square rounded-2xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                +2
              </div>
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center">
            
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors">Colección</Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </nav>

            <header className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-secondary font-medium tracking-widest uppercase text-xs mb-3 block">
                    {product.category}
                  </span>
                  <h1 className="text-5xl md:text-6xl font-serif text-gray-900 tracking-tight leading-none mb-4">
                    {product.title}
                  </h1>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center justify-center rounded-full w-10 h-10 border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="flex items-center justify-center rounded-full w-10 h-10 border border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-3xl font-light text-gray-700">{product.price}</p>
            </header>

            <div className="prose prose-lg text-gray-600 font-light mb-10 leading-relaxed">
              <p>{product.description}</p>
            </div>

            {/* Actions */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-full bg-white h-14 w-32">
                  <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                    <Minus size={16} />
                  </button>
                  <input 
                    className="w-12 h-full text-center bg-transparent border-none text-lg font-medium outline-none focus:ring-0" 
                    readOnly 
                    type="number" 
                    value="1" 
                  />
                  <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                    <Plus size={16} />
                  </button>
                </div>
                <button className="flex-1 h-14 bg-gray-900 hover:bg-primary text-white rounded-full font-medium tracking-wide uppercase text-sm transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300">
                  Agregar al carrito
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                En stock y listo para enviar
              </p>
            </div>

            {/* Expandable Details (Hardcoded open state for visual replication) */}
            <div className="border-t border-gray-200">
              {product.details.map((detail, idx) => (
                <div key={detail.id} className="border-b border-gray-200 py-5">
                  <button className="w-full flex justify-between items-center text-left group">
                    <span className="font-serif text-xl text-gray-900 group-hover:text-primary transition-colors">
                      {detail.title}
                    </span>
                    <ChevronDown size={20} className={`text-gray-400 group-hover:text-primary transition-transform ${idx === 0 ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Simulate first one open */}
                  <div className={`mt-4 text-gray-600 font-light leading-relaxed pr-8 ${idx !== 0 ? 'hidden' : ''}`}>
                    <p>{detail.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
