import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Sirena",
    category: "Escultura",
    price: "$120.00",
    description: "Una exploración caprichosa del mito y el material, acabada en esmalte espuma de mar.",
    image: "/img/sintitulo1.png",
    positionClass: "relative md:absolute md:top-0 md:left-0 w-full md:w-[45%]",
    maskClass: "organic-shape-1",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "Origen",
    category: "Vasija",
    price: "$85.00",
    description: "Formas de tierra cruda que celebran la belleza de la imperfección.",
    image: "/img/sintitulo2.png",
    positionClass: "relative mt-16 md:mt-0 md:absolute md:top-[18%] md:right-0 w-full md:w-[40%]",
    maskClass: "organic-shape-2",
    aspectClass: "aspect-square",
  },
  {
    id: 3,
    title: "Eco",
    category: "Cuenco",
    price: "$45.00",
    description: "Siluetas mínimas diseñadas para rituales cotidianos.",
    image: "/img/sintitulo3.png",
    positionClass: "relative mt-16 md:mt-0 md:absolute md:top-[45%] md:left-[5%] w-full md:w-[35%]",
    maskClass: "organic-shape-3",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "Lava",
    category: "Jarrón",
    price: "$150.00",
    description: "Inspirado en flujos volcánicos, con una textura exterior pronunciada.",
    image: "/img/sintitulo4.png",
    positionClass: "relative mt-16 md:mt-0 md:absolute md:top-[65%] md:right-[10%] w-full md:w-[42%]",
    maskClass: "organic-shape-1",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Coral",
    category: "Plato",
    price: "$55.00",
    description: "Texturas delicadas que asemejan algas en el fondo del océano.",
    image: "/img/sintitulo5.png",
    positionClass: "relative mt-16 md:mt-0 md:absolute md:top-[85%] md:left-[15%] w-full md:w-[38%]",
    maskClass: "organic-shape-2",
    aspectClass: "aspect-square",
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-brandBackground overflow-x-hidden pt-20">
      <Navbar />
      
      <div className="relative flex flex-col w-full">
        {/* Decorative Background Shapes */}
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] bg-sand rounded-full blur-[80px] opacity-30 pointer-events-none -z-10"></div>
        <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] opacity-30 pointer-events-none -z-10"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] opacity-30 pointer-events-none -z-10"></div>

        {/* Hero Section */}
        <section className="relative z-10 px-6 md:px-16 py-12 md:py-24 max-w-7xl mx-auto w-full">
          <div className="text-center mb-24 md:mb-32">
            <span className="text-secondary font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              Colección Primavera 2024
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gray-900 mb-6 md:mb-8 leading-tight">
              Curaduría <br className="hidden md:block" /> Artística
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed font-light">
              Una exploración dinámica de forma y textura. Las piezas se esparcen como si estuvieran en pleno proceso de creación, capturando la energía fluida del estudio.
            </p>
          </div>

          {/* Dynamic Artistic Gallery */}
          <div className="relative min-h-[auto] md:min-h-[1900px] lg:min-h-[2200px] w-full mb-32 flex flex-col md:block">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`${product.positionClass} group z-20 hover:z-50 transition-all duration-700`}
              >
                <div className={`relative ${product.maskClass} overflow-hidden bg-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className={`w-full h-auto ${product.aspectClass} object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 md:p-8 flex flex-col w-full h-full justify-end items-start pointer-events-none">
                  </div>
                </div>

                {/* Floating details - shown on hover */}
                <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 md:p-10 pointer-events-none transition-opacity duration-500">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brandBackground text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2 block font-medium shadow-sm">
                      {product.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 md:mb-3 drop-shadow-md">
                      {product.title}
                    </h3>
                    <p className="text-white/90 font-light text-sm hidden sm:block max-w-sm mb-4 md:mb-6 drop-shadow-sm">
                      {product.description}
                    </p>
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-brandBackground text-gray-900 px-5 md:px-8 py-2 md:py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors inline-block pointer-events-auto"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>

                {/* Floating label positioned outside the shape */}
                <div className="absolute top-4 sm:top-8 right-0 sm:right-[-20px] md:right-[-40px] bg-brandBackground shadow-xl px-4 md:px-6 py-2 md:py-3 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 border border-primary/10 z-40 pointer-events-none">
                  <span className="text-sm md:text-base font-medium text-gray-800 whitespace-nowrap">
                    {product.title} / {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-24">
            <Link href="#contact" className="inline-flex items-center gap-3 text-lg font-serif italic text-gray-600 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
              ¿No encuentras lo que buscas? Contáctanos para un pedido personalizado <ArrowRight size={20} />
            </Link>
          </div>
        </section>

      </div>
      
      <Footer />
    </main>
  );
}
