import React, { useState } from 'react';
import { Search, Star, ShoppingCart, Heart } from 'lucide-react';
import earlyTeImg from '../assets/img/Early-te.jpeg'; 
import dragonVerdeImg from '../assets/img/Dragon-verde.jpeg'; 
import chamomileImg from '../assets/img/Chamomile.jpeg';
import teteraHierroImg from '../assets/img/tetera-hierro.webp';
const Tienda: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'verde', name: 'Té Verde' },
    { id: 'negro', name: 'Té Negro' },
    { id: 'blanco', name: 'Té Blanco' },
    { id: 'oolong', name: 'Té Oolong' },
    { id: 'infusiones', name: 'Infusiones' },
    { id: 'accesorios', name: 'Accesorios' }
  ];

  const products = [
    {
      id: 1,
      name: 'Earl Grey Premium',
      category: 'negro',
      price: 2450,
      originalPrice: 2800,
      rating: 4.9,
      reviews: 127,
      image: earlyTeImg,
      description: 'Clásico té negro con bergamota y pétalos de aciano',
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Dragon Well Verde',
      category: 'verde',
      price: 3200,
      rating: 4.8,
      reviews: 89,
      image: dragonVerdeImg,
      description: 'Té verde chino tradicional con notas frescas y vegetales',
      inStock: true,
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Chamomile Dreams',
      category: 'infusiones',
      price: 1890,
      rating: 4.7,
      reviews: 203,
      image: chamomileImg,
      description: 'Infusión relajante de manzanilla con miel y lavanda',
      inStock: true,
      isNew: false,
      isSale: false
    },
    {
      id: 4,
      name: 'White Peony Deluxe',
      category: 'blanco',
      price: 4500,
      rating: 4.9,
      reviews: 45,
      image: earlyTeImg,
      description: 'Té blanco premium con sabor delicado y floral',
      inStock: false,
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: 'Oolong Mountain',
      category: 'oolong',
      price: 3800,
      originalPrice: 4200,
      rating: 4.8,
      reviews: 67,
      image: dragonVerdeImg,
      description: 'Oolong tradicional con notas tostadas y frutales',
      inStock: true,
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: 'Tetera de Hierro Fundido',
      category: 'accesorios',
      price: 12500,
      rating: 4.6,
      reviews: 34,
      image: teteraHierroImg,
      description: 'Tetera japonesa tradicional de hierro fundido',
      inStock: true,
      isNew: false,
      isSale: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <div className="container py-5">
        {/* Header */}
        <div className="section-header-tea mb-5">
          <h1 className="section-title-tea">Nuestra Tienda</h1>
          <p className="section-description-tea">
            Descubre nuestra colección completa de tés premium y accesorios
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card-tea mb-5 p-4">
          <div className="row align-items-center">
            {/* Search */}
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div className="position-relative">
                <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`btn ${
                      selectedCategory === category.id
                        ? 'btn-tea-primary'
                        : 'btn-outline-secondary'
                    } btn-sm`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="product-card-tea card-tea h-100 position-relative">
                {/* Product Image */}
                <div className="position-relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image-tea"
                  />
                  
                  {/* Badges */}
                  <div className="position-absolute top-0 start-0 p-3">
                    {product.isNew && (
                      <span className="badge badge-tea badge-tea-success mb-1 d-block">
                        Nuevo
                      </span>
                    )}
                    {product.isSale && (
                      <span className="badge badge-tea badge-tea-warning">
                        Oferta
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button className="btn btn-light btn-sm position-absolute top-0 end-0 m-3 rounded-circle p-2">
                    <Heart size={16} />
                  </button>

                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                      <span className="badge bg-light text-dark">
                        Agotado
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="card-body p-4">
                  <div className="product-rating-tea mb-2">
                    <div className="stars-tea d-flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14}
                          className={i < Math.floor(product.rating) ? 'text-warning' : 'text-muted'}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <small className="text-muted ms-2">
                      ({product.reviews})
                    </small>
                  </div>

                  <h6 className="card-title mb-2">{product.name}</h6>
                  
                  <p className="text-muted small mb-3" style={{ fontSize: '0.85rem' }}>
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <span className="product-price-tea h6 mb-0">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <small className="text-muted text-decoration-line-through ms-2">
                          ${product.originalPrice.toLocaleString()}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    disabled={!product.inStock}
                    className={`btn w-100 d-flex align-items-center justify-content-center ${
                      product.inStock
                        ? 'btn-tea-primary'
                        : 'btn-outline-secondary'
                    }`}
                  >
                    <ShoppingCart size={16} className="me-2" />
                    {product.inStock ? 'Agregar al Carrito' : 'No Disponible'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-5">
            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '100px', height: '100px' }}>
              <Search size={48} className="text-muted" />
            </div>
            <h4 className="mb-3">No se encontraron productos</h4>
            <p className="text-muted">
              Intenta cambiar los filtros o términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tienda;