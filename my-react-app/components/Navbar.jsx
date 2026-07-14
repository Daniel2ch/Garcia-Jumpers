import logoImg from '../images/Logo.jpeg';

const Navbar = ({ activeTab, setActiveTab, language, setLanguage }) => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveTab('all');

    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();

    // If we're on the About page, switch to home first, then scroll
    if (activeTab === 'about') {
      setActiveTab('all');
      // Small delay to let the Home page render, then scroll
      setTimeout(() => {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setActiveTab('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick dictionary for navbar buttons
  const contactText = language === 'es' ? 'Contacto' : 'Contact';
  const aboutText = language === 'es' ? 'Acerca de' : 'About';
  const langToggleText = language === 'en' ? 'Español' : 'English';

  return (
    <div className="navBar">
      <a href="/" onClick={handleLogoClick} className="logo">
        <img src={logoImg} alt="Garcia Jumpers Logo" className="logo-img" />
      </a>
      <div className="nav-links">
        {/* About Link */}
        <a
          href="#about"
          onClick={handleAboutClick}
          className={`nav-link-btn ${activeTab === 'about' ? 'active' : ''}`}
        >
          {aboutText}
        </a>

        {/* Language Alternator Button */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
          className="lang-toggle-btn"
          title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
        >
          🌐 {langToggleText}
        </button>

        {/* Contact Scroll Button */}
        <a
          href="#contact"
          onClick={handleContactClick}
          className="contact-nav-btn"
        >
          {contactText}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
