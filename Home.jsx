import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Star, TrendingUp, Shield, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Productos Premium',
      description: 'Solo las mejores marcas del mercado'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Precios Competitivos',
      description: 'Las mejores ofertas en componentes'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Garantía Oficial',
      description: 'Todos los productos con garantía'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Envío Rápido',
      description: 'Entrega en 24-48 horas'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Martínez',
      role: 'Gamer Profesional',
      comment: 'Excelente servicio y productos de alta calidad. Armé mi PC gaming perfecta gracias a su asesoría.',
      rating: 5
    },
    {
      name: 'Ana García',
      role: 'Desarrolladora',
      comment: 'Encontré todos los componentes que necesitaba. Envío rápido y excelente atención al cliente.',
      rating: 5
    },
    {
      name: 'Miguel Torres',
      role: 'Editor de Video',
      comment: 'Precios muy competitivos y gran variedad. Recomendado al 100% para profesionales.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#FF6600]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#FF6600] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Miles de clientes satisfechos confían en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-gray-200 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF6600] text-[#FF6600]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6600]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6600]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in duration-700">
            ¿Listo para Armar tu PC?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-in fade-in duration-700" style={{ animationDelay: '100ms' }}>
            Encuentra todos los componentes que necesitas en un solo lugar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700" style={{ animationDelay: '200ms' }}>
            <a href="#products">
              <Button
                size="lg"
                className="bg-[#FF6600] hover:bg-[#e55a00] text-white text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Ver Productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
