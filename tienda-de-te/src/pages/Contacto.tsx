import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, HeadphonesIcon } from 'lucide-react';
import '../styles/contacto.css';
import earlyTeImg from '../assets/img/Early-te.jpeg'; 
import dragonVerdeImg from '../assets/img/Dragon-verde.jpeg'; 
import chamomileImg from '../assets/img/Chamomile.jpeg';
import teteraHierroImg from '../assets/img/tetera-hierro.webp';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+54 11 4567-8900', 'Lun-Vie: 9:00-18:00'],
      action: 'tel:+541145678900'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@teaverde.com.ar', 'Respuesta en 24hs'],
      action: 'mailto:info@teaverde.com.ar'
    },
    {
      icon: MapPin,
      title: 'Oficina Central',
      details: ['Av. Corrientes 1234', 'Buenos Aires, Argentina'],
      action: null
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lun-Vie: 9:00-18:00', 'Sáb: 10:00-14:00'],
      action: null
    }
  ];

  const stores = [
    {
      name: 'TeaVerde Palermo',
      address: 'Av. Santa Fe 3456, Palermo',
      phone: '+54 11 4567-8901',
      hours: 'Lun-Dom: 8:00-22:00',
      image: teteraHierroImg
    },
    {
      name: 'TeaVerde Recoleta',
      address: 'Av. Callao 1234, Recoleta',
      phone: '+54 11 4567-8902',
      hours: 'Lun-Dom: 7:30-23:00',
      image: earlyTeImg
    },
    {
      name: 'TeaVerde Belgrano',
      address: 'Av. Cabildo 2345, Belgrano',
      phone: '+54 11 4567-8903',
      hours: 'Lun-Vie: 8:00-21:00, Sáb-Dom: 9:00-22:00',
      image: dragonVerdeImg
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Atención al Cliente',
      email: 'atencion@teaverde.com.ar',
      description: 'Consultas generales, pedidos y reclamos'
    },
    {
      icon: MessageSquare,
      title: 'Franquicias',
      email: 'franquicias@teaverde.com.ar',
      description: 'Información sobre oportunidades de franquicia'
    },
    {
      icon: HeadphonesIcon,
      title: 'Soporte Técnico',
      email: 'soporte@teaverde.com.ar',
      description: 'Ayuda con compras online y técnica'
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
    console.log('Formulario de contacto enviado:', formData);
    alert('¡Mensaje enviado! Te responderemos dentro de 24 horas.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {/* Header */}
      <div className="contacto-header">
        <div className="container text-center">
          <h1 className="contacto-title">Contáctanos</h1>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros a través 
            de cualquiera de estos canales y te responderemos lo antes posible.
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Contact Information */}
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-icon">
                <info.icon size={32} color="white" />
              </div>
              <h4 className="contact-info-title">{info.title}</h4>
              <div className="contact-info-details">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>
                    {info.action && detailIndex === 0 ? (
                      <a href={info.action}>{detail}</a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Departments */}
        <div className="contact-form-section">
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="form-header">
              <h2 className="form-title">Envianos un Mensaje</h2>
              <p className="form-subtitle">
                Completa el formulario y te responderemos dentro de 24 horas
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
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
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="asunto" className="form-label">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      required
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta-general">Consulta General</option>
                      <option value="pedido">Consulta sobre Pedido</option>
                      <option value="franquicia">Información sobre Franquicia</option>
                      <option value="trabajo">Oportunidades Laborales</option>
                      <option value="reclamo">Reclamo</option>
                      <option value="sugerencia">Sugerencia</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn-submit">
                    <Send size={20} />
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Departments Sidebar */}
          <div className="departments-sidebar">
            <div className="departments-card">
              <h4 className="departments-title">Departamentos Específicos</h4>
              {departments.map((dept, index) => (
                <div key={index} className="department-item">
                  <div className="department-header">
                    <dept.icon size={20} className="department-icon" />
                    <div className="department-content">
                      <h6>{dept.title}</h6>
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                      <p>{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-card">
              <h5 className="quick-actions-title">Acciones Rápidas</h5>
              <a href="tel:+541145678900" className="quick-action">
                <Phone size={16} />
                <span>Llamar Ahora</span>
              </a>
              <a href="https://wa.me/541145678900" className="quick-action">
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@teaverde.com.ar" className="quick-action">
                <Mail size={16} />
                <span>Email Directo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Store Locations */}
        <div className="stores-section">
          <div className="stores-header">
            <h2 className="stores-title">Nuestras Tiendas</h2>
            <p className="stores-subtitle">
              Visítanos en cualquiera de nuestras ubicaciones
            </p>
          </div>

          <div className="stores-grid">
            {stores.map((store, index) => (
              <div key={index} className="store-card">
                <img
                  src={store.image}
                  alt={store.name}
                  className="store-image"
                />
                <div className="store-content">
                  <h4 className="store-name">{store.name}</h4>
                  <div className="store-info">
                    <div className="store-info-item">
                      <MapPin size={16} />
                      <span>{store.address}</span>
                    </div>
                    <div className="store-info-item">
                      <Phone size={16} />
                      <a href={`tel:${store.phone.replace(/\s/g, '')}`}>
                        {store.phone}
                      </a>
                    </div>
                    <div className="store-info-item">
                      <Clock size={16} />
                      <span>{store.hours}</span>
                    </div>
                  </div>
                  <button className="btn-store-map">
                    Ver en Mapa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-header">
            <h2 className="faq-title">Preguntas Frecuentes</h2>
            <p className="faq-subtitle">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-column">
              <div className="faq-item">
                <h5 className="faq-question">¿Hacen envíos a todo el país?</h5>
                <p className="faq-answer">Sí, realizamos envíos a toda Argentina. Envío gratuito en compras superiores a $15.000.</p>
              </div>
              <div className="faq-item">
                <h5 className="faq-question">¿Cuál es el tiempo de entrega?</h5>
                <p className="faq-answer">CABA y GBA: 24-48hs. Interior del país: 3-7 días hábiles.</p>
              </div>
              <div className="faq-item">
                <h5 className="faq-question">¿Puedo cambiar o devolver productos?</h5>
                <p className="faq-answer">Sí, aceptamos cambios y devoluciones dentro de los 30 días posteriores a la compra.</p>
              </div>
            </div>
            <div className="faq-column">
              <div className="faq-item">
                <h5 className="faq-question">¿Ofrecen capacitaciones sobre té?</h5>
                <p className="faq-answer">Sí, organizamos talleres y catas regulares. Consulta fechas en nuestras redes sociales.</p>
              </div>
              <div className="faq-item">
                <h5 className="faq-question">¿Venden al por mayor?</h5>
                <p className="faq-answer">Sí, tenemos precios especiales para comercios. Contacta a mayorista@teaverde.com.ar</p>
              </div>
              <div className="faq-item">
                <h5 className="faq-question">¿Cuáles son sus métodos de pago?</h5>
                <p className="faq-answer">Aceptamos tarjetas de crédito, débito, transferencias bancarias y MercadoPago.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;