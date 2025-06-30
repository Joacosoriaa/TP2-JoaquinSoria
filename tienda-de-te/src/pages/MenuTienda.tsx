import React, { useState } from 'react';
import { Coffee, Clock, MapPin, Phone, Star } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Menú de Nuestras Tiendas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Disfruta de nuestros tés premium y deliciosos acompañamientos en un ambiente único y acogedor
          </p>
        </div>

        {/* Location Selector */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Selecciona tu Tienda</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                  selectedLocation === location.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{location.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="bg-green-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Coffee className="mr-3 h-6 w-6" />
                  {section.title}
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start group hover:bg-gray-50 p-4 rounded-lg transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-2">
                            {item.name}
                          </h3>
                          {item.popular && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center">
                          <div className="flex items-center text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">({item.rating})</span>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4">
                        <span className="text-2xl font-bold text-green-600">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 mt-12 text-white">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ofertas Especiales
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Merienda Completa</h3>
                <p className="text-green-100 mb-4">
                  Cualquier té caliente + scone + mermelada artesanal
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$1.200</span>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    Ahorra $380
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Happy Hour</h3>
                <p className="text-green-100 mb-4">
                  2x1 en tés fríos todos los días de 15:00 a 17:00
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">50% OFF</span>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    Lun-Dom
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿Tienes alguna pregunta sobre nuestro menú?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo estará encantado de ayudarte con cualquier consulta o recomendación personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Contactar Tienda
              </button>
              <button className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                Ver Ubicaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTienda;