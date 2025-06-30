import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-tea">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section-tea">
              <div className="footer-brand-tea">
                <div className="brand-icon-tea me-2">
                  <Leaf size={20} color="white" />
                </div>
                <span className="h5 mb-0 text-white">TeaVerde</span>
              </div>
              <p className="footer-description-tea">
                Especializados en tés premium de la más alta calidad. 
                Desde 2010 compartiendo la pasión por el té auténtico.
              </p>
              <div className="social-links-tea">
                <a href="#" className="social-link-tea">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link-tea">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link-tea">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section-tea">
              <h5>Enlaces Rápidos</h5>
              <ul>
                <li><a href="#">Nuestra Historia</a></li>
                <li><a href="#">Certificaciones</a></li>
                <li><a href="#">Política de Calidad</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          {/* Products */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section-tea">
              <h5>Productos</h5>
              <ul>
                <li><a href="#">Té Verde</a></li>
                <li><a href="#">Té Negro</a></li>
                <li><a href="#">Té Blanco</a></li>
                <li><a href="#">Té Oolong</a></li>
                <li><a href="#">Infusiones</a></li>
                <li><a href="#">Accesorios</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-section-tea">
              <h5>Contacto</h5>
              <div className="contact-info-tea">
                <MapPin size={20} />
                <div>
                  <p className="mb-0">Av. Corrientes 1234<br />Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="contact-info-tea">
                <Phone size={20} />
                <p className="mb-0">+54 11 4567-8900</p>
              </div>
              <div className="contact-info-tea">
                <Mail size={20} />
                <p className="mb-0">info@teaverde.com.ar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-tea">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">© 2024 TeaVerde. Todos los derechos reservados.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="me-3">Política de Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;