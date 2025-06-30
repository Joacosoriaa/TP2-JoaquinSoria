import React, { useState } from 'react';
import { Users, Heart, TrendingUp, Award, MapPin, Clock, DollarSign, Send } from 'lucide-react';
import '../styles/trabaja-con-nosotros.css';

const TrabajaConNosotros: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    puesto: '',
    experiencia: '',
    mensaje: ''
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'Salario Competitivo',
      description: 'Ofrecemos sueldos por encima del promedio del mercado más bonos por performance'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Profesional',
      description: 'Planes de carrera claros con capacitaciones constantes y oportunidades de ascenso'
    },
    {
      icon: Heart,
      title: 'Ambiente Positivo',
      description: 'Cultura organizacional basada en el respeto, la colaboración y el bienestar'
    },
    {
      icon: Award,
      title: 'Beneficios Premium',
      description: 'Obra social, días de vacaciones adicionales y descuentos en todos nuestros productos'
    }
  ];

  const openPositions = [
    {
      title: 'Barista Senior',
      location: 'Palermo',
      type: 'Tiempo Completo',
      experience: '2+ años',
      description: 'Buscamos un barista experimentado con pasión por el té y excelente atención al cliente.',
      requirements: [
        'Experiencia mínima de 2 años en cafeterías o tea houses',
        'Conocimiento profundo de diferentes tipos de té',
        'Excelentes habilidades de comunicación',
        'Disponibilidad para turnos rotativos'
      ]
    },
    {
      title: 'Vendedor/a de Tienda',
      location: 'Recoleta',
      type: 'Tiempo Completo',
      experience: '1+ año',
      description: 'Únete a nuestro equipo de ventas y ayuda a los clientes a descubrir sus tés favoritos.',
      requirements: [
        'Experiencia en ventas retail',
        'Pasión por el servicio al cliente',
        'Conocimientos básicos de té (se proporciona capacitación)',
        'Proactividad y trabajo en equipo'
      ]
    },
    {
      title: 'Supervisor de Tienda',
      location: 'Belgrano',
      type: 'Tiempo Completo',
      experience: '3+ años',
      description: 'Lidera nuestro equipo y asegura la excelencia operativa en una de nuestras tiendas.',
      requirements: [
        'Experiencia en supervisión de equipos',
        'Conocimiento del negocio gastronómico',
        'Liderazgo y capacidad de resolución de problemas',
        'Disponibilidad horaria completa'
      ]
    },
    {
      title: 'Especialista en E-commerce',
      location: 'Remoto/Oficina Central',
      type: 'Tiempo Completo',
      experience: '2+ años',
      description: 'Gestiona y optimiza nuestras ventas online, marketplaces y redes sociales.',
      requirements: [
        'Experiencia en e-commerce y marketing digital',
        'Conocimiento de plataformas como MercadoLibre, Shopify',
        'Manejo de redes sociales y herramientas de analytics',
        'Conocimientos de SEO y SEM'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div className="trabajo-header">
        <div className="container text-center">
          <h1 className="trabajo-title">Trabaja con Nosotros</h1>
          <p className="trabajo-subtitle">
            Únete a nuestro equipo apasionado por el té. En TeaVerde creemos que las mejores 
            experiencias se crean con personas comprometidas que comparten nuestra visión.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Company Values */}
        <div className="company-values">
          <div className="values-content">
            <h2 className="values-title">Nuestros Valores</h2>
            <p className="values-subtitle">
              Construimos un ambiente donde cada persona puede crecer profesional y personalmente
            </p>
            
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="value-card">
                    <div className="value-icon">
                      <benefit.icon size={32} color="white" />
                    </div>
                    <h4 className="value-title">{benefit.title}</h4>
                    <p className="value-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="positions-header">
          <h2 className="positions-title">Posiciones Abiertas</h2>
          <p className="positions-subtitle">
            Descubre las oportunidades disponibles en nuestro equipo
          </p>
        </div>

        <div className="row g-4 mb-5">
          {openPositions.map((position, index) => (
            <div key={index} className="col-12">
              <div className="position-card">
                <div className="position-header">
                  <div className="position-title-section">
                    <div className="position-title">
                      {position.title}
                      <span className="position-type-badge">{position.type}</span>
                    </div>
                    
                    <div className="position-meta">
                      <div className="position-meta-item">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="position-meta-item">
                        <Clock size={16} />
                        <span>Experiencia: {position.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="position-apply">
                    <a href="#" className="btn-apply">
                      Postularme
                    </a>
                  </div>
                </div>
                
                <p className="position-description">{position.description}</p>
                
                <div className="position-requirements">
                  <h6>Requisitos:</h6>
                  <ul className="requirements-list">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="application-form">
          <div className="form-header text-center">
            <h2 className="form-title">Postúlate Ahora</h2>
            <p className="form-subtitle">
              Completa el formulario y te contactaremos pronto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="row g-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Tu nombre completo"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="telefono" className="form-label">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="+54 11 1234-5678"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="puesto" className="form-label">
                  Puesto de Interés *
                </label>
                <select
                  id="puesto"
                  name="puesto"
                  required
                  value={formData.puesto}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Selecciona un puesto</option>
                  <option value="barista">Barista Senior</option>
                  <option value="vendedor">Vendedor/a de Tienda</option>
                  <option value="supervisor">Supervisor de Tienda</option>
                  <option value="ecommerce">Especialista en E-commerce</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <label htmlFor="experiencia" className="form-label">
                  Experiencia Relevante
                </label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  rows={4}
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Cuéntanos sobre tu experiencia relevante..."
                />
              </div>
            </div>

            <div className="col-12">
              <div className="form-group">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje Adicional
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="¿Por qué quieres trabajar con nosotros?"
                />
              </div>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn-submit">
                <Send size={20} />
                Enviar Postulación
              </button>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="trabajo-contact">
          <Users size={48} className="contact-icon" />
          <h3 className="contact-title">
            ¿Tienes preguntas sobre trabajar con nosotros?
          </h3>
          <p className="contact-description">
            Nuestro equipo de Recursos Humanos está disponible para resolver cualquier duda
          </p>
          <div className="contact-buttons">
            <a href="mailto:rrhh@teaverde.com.ar" className="btn-contact-primary">
              Contactar RRHH
            </a>
            <a href="tel:+541145678900" className="btn-contact-outline">
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrabajaConNosotros;