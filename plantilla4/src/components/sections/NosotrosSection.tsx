import { useEffect, useState } from 'react'
import Container from '../features/Container'
import { FiTarget } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { LuBuilding2 } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa6';
import { BiAward } from 'react-icons/bi';
import { GiSparkles } from 'react-icons/gi';
import { motion } from 'framer-motion';

const StatCounter = ({ end, label, duration = 2000 }: { end: number, label: string, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) return;

    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + increment >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
        {Math.floor(count)}{label === 'Años' ? '' : '+'}
      </div>
      <div className="text-sm sm:text-base text-blue-100">{label}</div>
    </div>
  );
};

export default function NosotrosSection() {

  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0 });
  const [activeCard] = useState<string | null>('');

  useEffect(() => {
    setIsVisible(true);
    // Animación de contadores
    const timer = setTimeout(() => {
      setStats({ projects: 150, clients: 89, years: 12 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: LuBuilding2,
      title: "Asesoría personalizada y cercana",
      description: "Cada cliente es único, y así tratamos cada viaje. Escuchamos tus ideas, te orientamos y diseñamos rutas a tu medida para que vivas exactamente la experiencia que buscas."
    },
    {
      icon: FaUser,
      title: "Amplia variedad de destinos y experiencias",
      description: "Desde escapadas locales hasta viajes internacionales, ofrecemos tours culturales, de aventura, de relax y más. Con Traveling, el mundo está a tu alcance."
    },
    {
      icon: BiAward,
      title: "Seguridad y respaldo garantizado",
      description: "Trabajamos con operadores certificados, seguros de viaje y asistencia 24/7. Tu tranquilidad es nuestra prioridad, antes, durante y después del viaje."
    },
    {
      icon: GiSparkles,
      title: "Precios competitivos con calidad",
      description: "Ofrecemos paquetes accesibles sin sacrificar calidad. Gracias a nuestras alianzas estratégicas, obtienes más beneficios y mejores precios por tu inversión."
    }
  ];

  return (
    <div className='w-full bg-slate-50' id="nosotros">
      <div className="py-8 sm:py-12 lg:py-16" style={{ backgroundColor: '#4F959D' }}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center max-w-4xl mx-auto">
            <StatCounter end={stats.projects} label="Proyectos" />
            <StatCounter end={stats.clients} label="Clientes" />
            <StatCounter end={stats.years} label="Años" />
          </div>
        </div>
      </div>

      <Container className='relative h-auto'>
        <div className='absolute top-1/3 right-0 w-10 h-10 bg-primary/50 rounded-full'></div>
        <div className='absolute top-2/3 left-0 w-10 h-10 bg-primary/50 rounded-full'></div>
        <div className='absolute top-1/2 left-1/2 w-10 h-10 bg-primary/50 rounded-full'></div>
        <div className='absolute top-1/4 right-1/2 w-10 h-10 bg-primary/50 rounded-full'></div>

        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-4 py-8'>
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 hover:border-b-4 hover:-translate-y-2" style={{ borderColor: '#205781' }}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#98D2C0' }}>
                    <FiTarget className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#205781' }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#205781' }}>Nuestra Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Diseñar y construir espacios arquitectónicos excepcionales que mejoren la calidad de vida
                  de las personas, respetando el medio ambiente y superando las expectativas de nuestros clientes
                  a través de la innovación, la creatividad y la excelencia técnica.
                </p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">

              <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 hover:border-b-4 hover:-translate-y-2" style={{ borderColor: '#4F959D' }}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#98D2C0' }}>
                    <BsEye className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#205781' }} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#205781' }}>Nuestra Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Ser reconocidos como la firma arquitectónica líder en innovación sostenible,
                  creando espacios icónicos que definan el futuro de la arquitectura y contribuyan
                  al desarrollo de comunidades prósperas y equilibradas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 sm:py-4 lg:py-5">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#205781' }}>¿Por qué elegir Traveling?</h2>
              <motion.div
                className="w-24 h-1 mx-auto mb-6 rounded-full"
                style={{ backgroundColor: '#205781' }}
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Combinamos experiencia, innovación y pasión para crear espacios únicos
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative bg-white rounded-xl hover:bg-primary sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="relative overflow-hidden">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${activeCard === `feature-${index}` ? 'scale-110' : ''}`} style={{ backgroundColor: '#98D2C0' }}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#205781' }} />
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-primary group-hover:text-terciary">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-white">{feature.description}</p>

                    {/* Hover effect background */}
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-300 -z-10 ${activeCard === `feature-${index}` ? 'opacity-5' : 'opacity-0'}`}
                      style={{ backgroundColor: '#4F959D' }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
