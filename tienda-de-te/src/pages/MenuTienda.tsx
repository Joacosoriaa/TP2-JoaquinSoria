import React, { useState } from 'react';
import { Coffee, Clock, MapPin, Phone, Star } from 'lucide-react';
import '../styles/menu-tienda.css';

const MenuTienda: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('palermo');

  const locations = [
    {
      id: 'palermo',
      name: 'Palermo',
      address: 'Av. Santa Fe 3456, Palermo',
      phone: '+54 11 4567-8901',
      hours: 'Lun-Dom: 8:00 - 22:00'
    },
    {
      id: 'recoleta',
      name: 'Recoleta',
      address: 'Av. Callao 1234, Recoleta',
      phone: '+54 11 4567-8902',
      hours: 'Lun-Dom: 7:30 - 23:00'
    },
    {
      id: 'belgrano',
      name: 'Belgrano',
      address: 'Av. Cabildo 2345, Belgrano',
      phone: '+54 11 4567-8903',
      hours: 'Lun-Vie: 8:00 - 21:00, Sáb-Dom: 9:00 - 22:00'
    }
  ];

  const menuSections = [
    {
      title: 'Tés Calientes',
      items: [
        {
          name: 'Earl Grey Clásico',
          description: 'Té negro con bergamota, servido con limón y miel',
          price: 850,
          rating: 4.8,
          popular: true
        },
        {
          name: 'Dragón Well Verde',
          description: 'Té verde chino delicado con notas frescas',
          price: 920,
          rating: 4.7
        },
        {
          name: 'Chai Masala',
          description: 'Mezcla de especias tradicionales con leche vaporizada',
          price: 980,
          rating: 4.9,
          popular: true
        },
        {
          name: 'Oolong de Montaña',
          description: 'Té semi-fermentado con sabor complejo y floral',
          price: 1050,
          rating: 4.6
        }
      ]
    },
    {
      title: 'Tés Fríos & Especiales',
      items: [
        {
          name: 'Té Verde Helado con Menta',
          description: 'Refrescante té verde con menta fresca y limón',
          price: 750,
          rating: 4.5
        },
        {
          name: 'Bubble Tea Matcha',
          description: 'Té matcha cremoso con perlas de tapioca',
          price: 1200,
          rating: 4.8,
          popular: true
        },
        {
          name: 'Té Rojo Helado con Frutas',
          description: 'Té rooibos con mix de frutas de estación',
          price: 890,
          rating: 4.4
        }
      ]
    },
    {
      title: 'Acompañamientos',
      items: [
        {
          name: 'Scones Ingleses',
          description: 'Tradicionales scones con mermelada y crema',
          price: 650,
          rating: 4.6
        },
        {
          name: 'Macarons Franceses',
          description: 'Selección de macarons de diferentes sabores',
          price: 450,
          rating: 4.7
        },
        {
          name: 'Galletas de Té',
          description: 'Galletas artesanales perfectas para acompañar',
          price: 380,
          rating: 4.5
        },
        {
          name: 'Tarta de Limón',
          description: 'Tarta casera con crema de limón y merengue',
          price: 720,
          rating: 4.8,
          popular: true
        }
      ]
    }
  ];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div className="menu-tienda-header">
        <div className="container text-center">
          <h1 className="menu-tienda-title">Menú de Nuestras Tiendas</h1>
          <p className="menu-tienda-subtitle">
            Disfruta de nuestros tés premium y deliciosos acompañamientos en un ambiente único y acogedor
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Location Selector */}
        <div className="location-selector">
          <h2 className="h4 mb-4">Selecciona tu Tienda</h2>
          <div className="row g-3">
            {locations.map((location) => (
              <div key={location.id} className="col-md-4">
                <div
                  className={`location-card ${selectedLocation === location.id ? 'active' : ''}`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <h5>{location.name}</h5>
                  <div className="location-info">
                    <MapPin size={16} />
                    <span>{location.address}</span>
                  </div>
                  <div className="location-info">
                    <Phone size={16} />
                    <span>{location.phone}</span>
                  </div>
                  <div className="location-info">
                    <Clock size={16} />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="menu-section">
            <div className="menu-section-header">
              <h2 className="menu-section-title">
                <Coffee size={24} />
                {section.title}
              </h2>
            </div>
            
            <div className="menu-section-body">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <div className="menu-item-header">
                    <div className="d-flex align-items-center flex-wrap">
                      <h5 className="menu-item-name">{item.name}</h5>
                      <div className="menu-item-badges">
                        {item.popular && (
                          <span className="badge-popular">Popular</span>
                        )}
                      </div>
                    </div>
                    <div className="menu-item-price">
                      ${item.price}
                    </div>
                  </div>
                  
                  <p className="menu-item-description">
                    {item.description}
                  </p>
                  
                  <div className="menu-item-rating">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16}
                          className={i < Math.floor(item.rating) ? 'text-warning' : 'text-muted'}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <span className="rating-value">({item.rating})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Special Offers */}
        <div className="special-offers">
          <div className="special-offers-content">
            <h2 className="text-center mb-4">Ofertas Especiales</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="offer-card">
                  <h4>Merienda Completa</h4>
                  <p>
                    Cualquier té caliente + scone + mermelada artesanal
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="offer-price">$1.200</span>
                    <span className="offer-savings">
                      Ahorra $380
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="offer-card">
                  <h4>Happy Hour</h4>
                  <p>
                    2x1 en tés fríos todos los días de 15:00 a 17:00
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="offer-price">50% OFF</span>
                    <span className="offer-savings">
                      Lun-Dom
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="menu-contact">
          <h4>¿Tienes alguna pregunta sobre nuestro menú?</h4>
          <p>
            Nuestro equipo estará encantado de ayudarte con cualquier consulta o recomendación personalizada
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <button className="btn btn-menu-primary">
              Contactar Tienda
            </button>
            <button className="btn btn-menu-outline">
              Ver Ubicaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTienda;