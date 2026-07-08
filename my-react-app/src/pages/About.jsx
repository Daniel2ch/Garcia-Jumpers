import React from 'react';
import { contactInfo, uiTranslations } from '../productsData.js';
import './About.css';

const About = ({ language }) => {
  const t = uiTranslations[language] || uiTranslations['en'];

  const aboutContent = language === 'es' ? {
    title: 'Acerca de Nosotros',
    subtitle: 'Su socio de confianza en alquiler de eventos',
    story_title: 'Nuestra Historia',
    story_p1: 'Garcia Jumpers comenzó con una visión simple: hacer que cada celebración sea inolvidable. Lo que empezó como un pequeño negocio familiar ha crecido hasta convertirse en un proveedor de confianza de alquileres para fiestas en nuestra comunidad.',
    story_p2: 'Nos enorgullecemos de ofrecer equipos limpios, seguros y de alta calidad, desde inflables y carpas hasta mesas, sillas y decoraciones elegantes. Cada evento es importante para nosotros, y trabajamos duro para asegurarnos de que su celebración sea perfecta.',
    mission_title: 'Nuestra Misión',
    mission_text: 'Proporcionar alquileres de fiestas excepcionales con un servicio personalizado, haciendo que cada evento sea especial sin importar su tamaño o presupuesto.',
    values_title: 'Lo Que Nos Distingue',
    value_1_title: 'Equipo Limpio y Seguro',
    value_1_desc: 'Cada pieza se limpia y desinfecta minuciosamente antes de cada alquiler.',
    value_2_title: 'Servicio Personalizado',
    value_2_desc: 'Trabajamos directamente con usted para planificar la configuración perfecta para su evento.',
    value_3_title: 'Precios Accesibles',
    value_3_desc: 'Tarifas competitivas y paquetes para ajustarse a su presupuesto.',
    value_4_title: 'Entrega y Montaje',
    value_4_desc: 'Nos encargamos de la entrega, montaje y recogida para que usted pueda disfrutar de su evento.',
    cta_title: '¿Listo para planear su evento?',
    cta_text: '¡Contáctenos hoy para verificar disponibilidad y obtener una cotización!'
  } : {
    title: 'About Us',
    subtitle: 'Your trusted event rental partner',
    story_title: 'Our Story',
    story_p1: 'Garcia Jumpers started with a simple vision: to make every celebration unforgettable. What began as a small family-operated business has grown into a trusted provider of party rentals in our community.',
    story_p2: 'We take pride in offering clean, safe, and high-quality equipment — from bouncy houses and tents to tables, chairs, and elegant decorations. Every event matters to us, and we work hard to make sure your celebration is perfect.',
    mission_title: 'Our Mission',
    mission_text: 'To provide exceptional party rentals with personalized service, making every event special regardless of size or budget.',
    values_title: 'What Sets Us Apart',
    value_1_title: 'Clean & Safe Equipment',
    value_1_desc: 'Every piece is thoroughly cleaned and sanitized before each rental.',
    value_2_title: 'Personalized Service',
    value_2_desc: 'We work directly with you to plan the perfect setup for your event.',
    value_3_title: 'Affordable Pricing',
    value_3_desc: 'Competitive rates and packages to fit your budget.',
    value_4_title: 'Delivery & Setup',
    value_4_desc: 'We handle delivery, setup, and pickup so you can enjoy your event stress-free.',
    cta_title: 'Ready to plan your event?',
    cta_text: 'Contact us today to check availability and get a quote!'
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>{aboutContent.title}</h1>
          <p className="about-subtitle">{aboutContent.subtitle}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-icon">🎪</div>
          <h2>{aboutContent.story_title}</h2>
          <p>{aboutContent.story_p1}</p>
          <p>{aboutContent.story_p2}</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-inner">
          <h2>{aboutContent.mission_title}</h2>
          <p className="mission-text">{aboutContent.mission_text}</p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="about-values">
        <h2>{aboutContent.values_title}</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>{aboutContent.value_1_title}</h3>
            <p>{aboutContent.value_1_desc}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>{aboutContent.value_2_title}</h3>
            <p>{aboutContent.value_2_desc}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">💰</div>
            <h3>{aboutContent.value_3_title}</h3>
            <p>{aboutContent.value_3_desc}</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚚</div>
            <h3>{aboutContent.value_4_title}</h3>
            <p>{aboutContent.value_4_desc}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>{aboutContent.cta_title}</h2>
        <p>{aboutContent.cta_text}</p>
        <div className="about-cta-buttons">
          <a href={`tel:${contactInfo.phone}`} className="about-cta-btn about-cta-phone">
            📞 {contactInfo.phone}
          </a>
          <a href={`mailto:${contactInfo.email}`} className="about-cta-btn about-cta-email">
            ✉️ {contactInfo.email}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
