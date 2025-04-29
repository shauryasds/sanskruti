import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#deecf9] text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Sanskruti Holistic</h3>
            <p className="text-black/80 text-sm leading-relaxed">
              Bridging ancient wellness with modern science for transformative healing.
            </p>
            <Link 
              to="/contact" 
              className="inline-block text-[#deecf9] bg-black px-4 py-2 rounded-lg
                        hover:bg-gray-800 transition-all duration-200 text-sm
                        font-medium shadow-sm"
            >
              Book Consultation
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Explore</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-black/80 hover:text-black text-sm 
                              transition-all duration-200 hover:pl-1.5"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Therapies</h4>
            <ul className="space-y-2">
              {['Ayurveda', 'Yoga', 'Panchakarma', 'Reiki'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-black/80 hover:text-black text-sm 
                              transition-all duration-200 hover:pl-1.5"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Connect</h4>
            <ul className="space-y-2 text-black/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <div>
                  <p>HSR Layout, Sector 1</p>
                  <p>Bangalore - 560102</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919886332684" className="hover:text-black transition-colors">
                  +91-9886332684
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:sanskrutiholistic@gmail.com" className="hover:text-black transition-colors">
                  sanskrutiholistic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-4 text-center">
          <p className="text-black/60 text-xs">
            © {new Date().getFullYear()} Sanskruti Holistic Center. 
            <span className="hidden sm:inline pl-2">Embracing wellness through tradition.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;