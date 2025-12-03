import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#FF6600] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <span className="text-white font-bold text-lg">PC Components</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu tienda de confianza para componentes de PC. Calidad garantizada y los mejores precios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF6600]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF6600]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#FF6600] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${contactData.email}`} className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300 text-sm">
                  {contactData.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#FF6600] mt-0.5 flex-shrink-0" />
                <a href={`tel:${contactData.phone}`} className="text-gray-400 hover:text-[#FF6600] transition-colors duration-300 text-sm">
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6600] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{contactData.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF6600]">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href={contactData.social.facebook}
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.twitter}
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.instagram}
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.linkedin}
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PC Components. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
