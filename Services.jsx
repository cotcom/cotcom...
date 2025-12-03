import React from 'react';
import { servicesData } from '../data/mockData';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const getIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  const additionalServices = [
    {
      title: 'Envío Express',
      description: 'Recibe tus productos en 24-48 horas',
      details: 'Envío gratuito en compras superiores a $50. Seguimiento en tiempo real de tu pedido.'
    },
    {
      title: 'Financiamiento',
      description: 'Paga en cómodas cuotas mensuales',
      details: 'Planes de financiamiento flexibles de 3, 6 y 12 meses sin intereses.'
    },
    {
      title: 'Compatibilidad',
      description: 'Verificamos la compatibilidad de tus componentes',
      details: 'Aseguramos que todos los componentes que elijas sean 100% compatibles entre sí.'
    },
    {
      title: 'Actualizaciones',
      description: 'Mejora tu PC con nuevos componentes',
      details: 'Te asesoramos sobre las mejores actualizaciones para tu sistema actual.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562408590-e32931084e23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtb3RoZXJib2FyZHxlbnwwfHx8fDE3NjM3MDU1MDh8MA&ixlib=rb-4.1.0&q=85"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 to-[#1a1a1a]/70"></div>
        <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Soluciones completas para todas tus necesidades tecnológicas
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Servicios Principales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios profesionales para ayudarte con tu PC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#FF6600]/10 rounded-full flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-xl text-[#1a1a1a] group-hover:text-[#FF6600] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-[#FF6600] hover:text-[#e55a00] group/btn"
                  >
                    Más información
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Servicios Adicionales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más beneficios para hacer tu experiencia aún mejor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-gray-200 animate-in fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-[#1a1a1a] group-hover:text-[#FF6600] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de expertos y descubre cómo podemos ayudarte
          </p>
          <Button
            size="lg"
            className="bg-[#FF6600] hover:bg-[#e55a00] text-white text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
          >
            Contáctanos Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
