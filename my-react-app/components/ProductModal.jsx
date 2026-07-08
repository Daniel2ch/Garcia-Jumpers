import React, { useState, useEffect } from 'react';
import { uiTranslations } from '../src/productsData.js';

const ProductModal = ({ product, onClose, contactInfo, language }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const t = uiTranslations[language] || uiTranslations['en'];

  // Safeguard in case there are no images
  const images = product.images && product.images.length > 0 
    ? product.images 
    : ['https://placehold.co/600x400?text=No+Image+Available'];

  const hasMultipleImages = images.length > 1;

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  // Language based product fields
  const productName = language === 'es' ? product.nameEs : product.name;
  const productPrice = language === 'es' ? product.priceEs : product.price;
  const productPriceLabel = language === 'es' ? product.priceLabelEs : product.priceLabel;
  const productDesc = language === 'es' ? product.detailedDescEs : product.detailedDesc;
  const productSpecs = language === 'es' ? product.specsEs : product.specs;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {/* Modal Grid */}
        <div className="modal-grid">
          
          {/* Left Panel: Image Gallery */}
          <div className="modal-gallery">
            <div className="modal-main-image-container">
              <img 
                src={images[activeImageIndex]} 
                alt={`${productName} view ${activeImageIndex + 1}`} 
                className="modal-main-image"
              />
              <div className="placeholder-helper-badge">
                {t.modal_photo_badge} {activeImageIndex + 1} {t.modal_photo_of} {images.length}
              </div>
            </div>

            {hasMultipleImages && (
              <div className="modal-thumbnails">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`modal-thumbnail-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    title={`View photo ${idx + 1}`}
                  >
                    <img src={img} alt="" className="modal-thumbnail-img" />
                    <span className="thumbnail-num">{idx + 1}</span>
                  </button>
                ))}
              </div>
            )}
            
            <div className="image-instructions-box">
              <p className="instruction-text">
                <strong>How to change photos:</strong> Edit the <code>images</code> array inside <code>productsData.js</code> for this product ID: <strong>"{product.id}"</strong>.
              </p>
            </div>
          </div>

          {/* Right Panel: Product Details */}
          <div className="modal-details">
            <div className="modal-header-section">
              <span className="modal-category-badge">{product.category.toUpperCase()}</span>
              <h2 className="modal-product-title">{productName}</h2>
              
              {/* Price Area */}
              <div className="modal-price-box">
                <span className="price-label">{t.modal_price_label}</span>
                <span className="price-value">{productPrice}</span>
                <span className="price-instruction">({productPriceLabel})</span>
              </div>
            </div>

            {/* Description Area */}
            <div className="modal-info-block">
              <h3>{t.modal_desc_label}</h3>
              <p className="modal-description">{productDesc}</p>
              <div className="field-instructions">
                Modify this text in <code>productsData.js</code> (field: <code>detailedDesc</code> / <code>detailedDescEs</code>)
              </div>
            </div>

            {/* Specifications Area */}
            {productSpecs && productSpecs.length > 0 && (
              <div className="modal-info-block">
                <h3>{t.modal_specs_label}</h3>
                <ul className="modal-specs-list">
                  {productSpecs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                <div className="field-instructions">
                  Edit these bullets in <code>productsData.js</code> (field: <code>specs</code> / <code>specsEs</code>)
                </div>
              </div>
            )}

            {/* Action Section */}
            <div className="modal-cta-box">
              <h3>{t.modal_cta_title}</h3>
              <p>{t.modal_cta_desc}</p>
              
              <div className="modal-cta-buttons">
                {/* Phone Call Link */}
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="modal-action-btn phone-btn"
                >
                  <svg className="cta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  {t.modal_cta_call_btn}: {contactInfo.phone}
                </a>

                {/* Email Mailto Link */}
                <a 
                  href={`mailto:${contactInfo.email}?subject=Inquiry about ${encodeURIComponent(product.name)}`} 
                  className="modal-action-btn email-btn"
                >
                  <svg className="cta-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  {t.modal_cta_email_btn}
                </a>
              </div>
              
              <div className="field-instructions">
                Modify email & phone contact info in <code>productsData.js</code> (under <code>contactInfo</code>)
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;

