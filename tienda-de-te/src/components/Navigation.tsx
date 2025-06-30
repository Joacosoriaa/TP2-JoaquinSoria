import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'tienda', label: 'Tienda' },
    { id: 'tutoriales', label: 'Tutoriales' },
    { id: 'menu-tienda', label: 'Menú Tienda' },
    { id: 'trabaja-con-nosotros', label: 'Trabaja con Nosotros' },
    { id: 'franquicias', label: 'Franquicias' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavigation = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-tea fixed-top">
      <div className="container">
        <a 
          className="navbar-brand-tea"
          onClick={() => handleNavigation('home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="brand-icon-tea">
            <Leaf size={24} color="white" />
          </div>
          <span>TeaVerde</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`nav-link nav-link-tea ${currentPage === item.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;