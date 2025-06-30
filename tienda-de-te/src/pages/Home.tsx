import React from 'react';
import { ShoppingBag, Award, Truck, Users, ArrowRight, Star } from 'lucide-react';
import earlyTeImg from '../assets/img/Early-te.jpeg'; 
import dragonVerdeImg from '../assets/img/Dragon-verde.jpeg'; 
import chamomileImg from '../assets/img/Chamomile.jpeg';

// Define las props que recibe Home
type HomeProps = {
  setCurrentPage: (page: string) => void;
};

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Tés seleccionados de las mejores plantaciones del mundo'
    },
    {
      icon: Truck,
      title: 'Envío Gratuito',
      description: 'En compras superiores a $15.000 en todo el país'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Asesoramiento experto para encontrar tu té ideal'
    }
  ];

  const products = [
    {
      name: 'Earl Grey Premium',
      price: '$2.450',
      image: earlyTeImg,
      rating: 4.9
    },
    {
      name: 'Dragon Well Verde',
      price: '$3.200',
      image: dragonVerdeImg,
      rating: 4.8
    },
    {
      name: 'Chamomile Relax',
      price: '$1.890',
      image: chamomileImg,
      rating: 4.7
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero-tea">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center hero-content-tea animate-fade-in-up">
              <h1 className="hero-title-tea">
                El Arte del
                <span className="hero-title-highlight">Té Auténtico</span>
              </h1>
              <p className="hero-description-tea mx-auto">
                Descubre nuestra selección de tés premium importados directamente 
                de las mejores plantaciones del mundo. Calidad excepcional en cada taza.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button
                  className="btn btn-tea-primary btn-lg d-flex align-items-center justify-content-center"
                  onClick={() => setCurrentPage('menu-tienda')}
                >
                  <ShoppingBag size={20} className="me-2" />
                  Explorar Tienda
                  <ArrowRight size={20} className="ms-2" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-tea bg-white">
        <div className="container">
          <div className="section-header-tea">
            <h2 className="section-title-tea">¿Por qué elegir TeaVerde?</h2>
            <p className="section-description-tea">
              Más de 10 años de experiencia nos respaldan como especialistas en té premium
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card-tea h-100 text-center p-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="feature-icon-tea">
                    <feature.icon size={32} color="white" />
                  </div>
                  <h4 className="h5 fw-bold mb-3">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-tea">
        <div className="container">
          <div className="section-header-tea">
            <h2 className="section-title-tea">Productos Destacados</h2>
            <p className="section-description-tea">
              Los favoritos de nuestros clientes
            </p>
          </div>
          <div className="row g-4">
            {products.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="product-card-tea card-tea h-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image-tea"
                  />
                  <div className="card-body p-4">
                    <div className="product-rating-tea mb-2">
                      <div className="stars-tea d-flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <small className="text-muted">({product.rating})</small>
                    </div>
                    <h5 className="card-title mb-3">{product.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="product-price-tea">{product.price}</span>
                      <button className="btn btn-tea-primary btn-sm">
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-tea-primary btn-lg">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-tea">
        <div className="container">
          <div className="cta-content-tea text-center">
            <h2 className="cta-title-tea">
              Únete a Nuestra Comunidad del Té
            </h2>
            <p className="cta-description-tea">
              Recibe consejos exclusivos, recetas y ofertas especiales directamente en tu email
            </p>
            <div className="cta-form-tea">
              <div className="input-group input-group-lg">
                <input 
                  type="email" 
                  className="form-control cta-input-tea"
                  placeholder="Tu email"
                />
                <button className="btn btn-tea-accent" type="button">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;