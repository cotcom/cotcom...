import React from 'react';
import { aboutData } from '../data/mockData';
import { CheckCircle2, Award, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '10,000+', label: 'Clientes Satisfechos' },
    { icon: <Award className="w-8 h-8" />, value: '500+', label: 'Productos Disponibles' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '10+', label: 'Años de Experiencia' },
    { icon: <CheckCircle2 className="w-8 h-8" />, value: '99%', label: 'Satisfacción del Cliente' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjb21wdXRlciUyMGhhcmR3YXJlfGVufDB8fHx8MTc2MzcwNTUwM3ww&ixlib=rb-4.1.0&q=85"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 to-[#1a1a1a]/70"></div>
        <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{aboutData.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Expertos en tecnología comprometidos con tu satisfacción
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#FF6600]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#1a1a1a] mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-in fade-in duration-700">
              <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {aboutData.features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#FF6600]/10 rounded-lg flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#FF6600] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h3 className="text-3xl font-bold mb-4 text-[#FF6600]">Nuestra Misión</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Proporcionar componentes de PC de alta calidad a precios accesibles, ayudando a nuestros clientes a construir las computadoras de sus sueños con el mejor servicio y soporte técnico del mercado.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <h3 className="text-3xl font-bold mb-4 text-[#FF6600]">Nuestra Visión</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Convertirnos en la tienda líder en componentes de PC en la región, reconocida por nuestra excelencia en servicio, variedad de productos y compromiso con la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
