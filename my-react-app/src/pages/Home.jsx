import React, { useState } from 'react';
import { products, categories, contactInfo, uiTranslations } from '../productsData.js';
import ProductModal from '../../components/ProductModal.jsx';
import './Home.css';

const Home = ({ activeTab, setActiveTab, language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get active translations list
  const t = uiTranslations[language] || uiTranslations['en'];

  // Handle category tab change
  const handleTabChange = (categoryId) => {
    setActiveTab(categoryId);
    // Scroll down to products grid when tab is changed
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter products by active tab AND search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeTab === 'all' || product.category === activeTab;

    // Check fields based on language
    const name = language === 'es' ? product.nameEs : product.name;
    const shortDesc = language === 'es' ? product.shortDescEs : product.shortDesc;
    const specs = language === 'es' ? product.specsEs : product.specs;

    const matchesSearch =
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (specs && specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="homeHeader">
        <div className="hero-overlay">
          <h1>{t.welcome_title}</h1>
          <p>{t.welcome_desc}</p>

          {/* Contact Info Quick Banner */}
          <div className="quick-contact-banner">
            <span>📞 Call: <strong>{contactInfo.phone}</strong></span>
            <span className="separator">|</span>
            <span>✉️ Email: <strong>{contactInfo.email}</strong></span>
          </div>
        </div>
      </header>

      {/* Main Catalog Section */}
      <main id="products-section" className="catalog-section">
        <h2 className="section-title">{t.explore_title}</h2>

        {/* Search and Filter Row */}
        <div className="catalog-controls">
          {/* Search bar */}
          <div className="search-box">
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              type="text"
              placeholder={t.search_placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>&times;</button>
            )}
          </div>

          {/* Category Tabs inside Home page */}
          <div className="category-tabs">
            {categories.map((cat) => {
              const catTitle = language === 'es' ? cat.titleEs : cat.title;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`tab-btn ${activeTab === cat.id ? 'active-tab' : ''}`}
                >
                  {catTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              const mainImage = product.images && product.images[0]
                ? product.images[0]
                : 'https://placehold.co/400x300?text=No+Image';

              const productName = language === 'es' ? product.nameEs : product.name;
              const productPrice = language === 'es' ? product.priceEs : product.price;
              const productPriceLabel = language === 'es' ? product.priceLabelEs : product.priceLabel;
              const productShortDesc = language === 'es' ? product.shortDescEs : product.shortDesc;

              return (
                <div key={product.id} className="product-card">
                  {/* Photo Container with instructions */}
                  <div className="product-image-container" onClick={() => setSelectedProduct(product)}>
                    <img src={mainImage} alt={productName} className="product-card-img" />

                    {/* Floating Info Overlay for multiple photos */}
                    {product.images && product.images.length > 1 && (
                      <span className="multiple-photos-badge">
                        📸 {product.images.length} {t.multiple_photos_badge}
                      </span>
                    )}

                    <div className="img-hover-overlay">
                      <span>{t.click_for_photos}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="product-card-body">
                    <span className="product-card-category">{product.category}</span>
                    <h3 className="product-card-title">{productName}</h3>

                    {/* Price Placeholder Box */}
                    <div className="price-tag-container">
                      <span className="price-tag">{productPrice}</span>
                      <span className="price-hint">{t.price_placeholder_label}</span>
                    </div>

                    <p className="product-card-desc">{productShortDesc}</p>

                    {/* Customize Instruction for Developer */}
                    <div className="card-customization-notice">
                      🔧 ID: <code>{product.id}</code> in productsData.js
                    </div>

                    {/* View Details CTA Button */}
                    <button
                      className="card-details-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t.btn_view_details}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-results-box">
            <p>{t.no_results} "{searchQuery}"</p>
            <button className="clear-filters-btn" onClick={() => { setSearchQuery(''); setActiveTab('all'); }}>
              {t.btn_reset_filters}
            </button>
          </div>
        )}
      </main>

      {/* Footer / Contact Section — No booking form, just contact info */}
      <footer id="contact-section" className="contact-footer">
        <div className="footer-content">

          {/* Business details */}
          <div className="footer-info">
            <h2>Garcia Jumpers</h2>
            <p className="footer-desc">{t.footer_tagline}</p>

            <hr className="footer-divider" />

            <div className="contact-details-grid">
              {/* Phone */}
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>{t.footer_phone_title}</strong>
                  <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>{t.footer_email_title}</strong>
                  <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>{t.footer_hours_title}</strong>
                  <p>{language === 'es' ? contactInfo.workingHoursEs : contactInfo.workingHours}</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>{t.footer_area_title}</strong>
                  <p>{language === 'es' ? contactInfo.serviceAreasEs : contactInfo.serviceAreas}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Garcia Jumpers. {t.all_rights}</p>
        </div>
      </footer>

      {/* Product Details Modal Component */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          contactInfo={contactInfo}
          language={language}
        />
      )}
    </div>
  );
};

export default Home;
