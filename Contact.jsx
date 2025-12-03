import React, { useState } from 'react';
import { contactData } from '../data/mockData';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: '¡Mensaje enviado!',
      description: 'Gracias por contactarnos. Te responderemos pronto.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: contactData.email,
      link: `mailto:${contactData.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      value: contactData.phone,
      link: `tel:${contactData.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Dirección',
      value: contactData.address,
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', url: contactData.social.facebook },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', url: contactData.social.twitter },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', url: contactData.social.instagram },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: contactData.social.linkedin }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1627281796892-39e266ee50be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjb21wdXRlciUyMGhhcmR3YXJlfGVufDB8fHx8MTc2MzcwNTUwM3ww&ixlib=rb-4.1.0&q=85"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/95 to-[#1a1a1a]/70"></div>
        <div className="relative z-10 text-center animate-in fade-in slide-in-from-bottom duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Estamos aquí para ayudarte. Envíanos tu consulta
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="animate-in fade-in slide-in-from-left duration-700">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Información de Contacto</h2>
                <p className="text-gray-600 mb-8">
                  Puedes contactarnos a través de cualquiera de estos medios. Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM.
                </p>
              </div>

              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-gray-200 animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#FF6600]/10 rounded-full flex items-center justify-center text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#1a1a1a] hover:text-[#FF6600] transition-colors duration-300 break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#1a1a1a] break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <div className="animate-in fade-in slide-in-from-left duration-700" style={{ animationDelay: '300ms' }}>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1a1a1a] hover:bg-[#FF6600] rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-gray-200 animate-in fade-in slide-in-from-right duration-700">
                <CardHeader>
                  <CardTitle className="text-3xl text-[#1a1a1a]">Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1a1a1a]">Nombre Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre"
                          required
                          className="border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1a1a1a]">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                          className="border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#1a1a1a]">Asunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿En qué podemos ayudarte?"
                        required
                        className="border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1a1a1a]">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-[#FF6600] focus:ring-[#FF6600] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#FF6600] hover:bg-[#e55a00] text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]/10">
          <p className="text-[#1a1a1a] text-xl font-semibold">Mapa de ubicación</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
