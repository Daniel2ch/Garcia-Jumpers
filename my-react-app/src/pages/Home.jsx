import React from 'react';
import './Home.css'; // Link the CSS file

const Home = () => {
  const categories = [
    { title: 'Jumpers', desc: 'Classic bounce houses for endless fun', link: '/jumpers', image: 'https://placehold.co/400x300?text=Jumper+Image' },
    { title: 'Tents', desc: 'Provide shade and shelter for your guests', link: '/tents', image: 'https://placehold.co/400x300?text=Tent+Image' },
    { title: 'Tables & Chairs', desc: 'Comfortable seating for everyone', link: '/tables-chairs', image: 'https://placehold.co/400x300?text=Tables+Chairs' },
    { title: 'Decorations', desc: 'Balloons, banners, and party aesthetics', link: '/decorations', image: 'https://placehold.co/400x300?text=Decorations' },
  ];

  return (
    <div className="home-container">
      
      <header className="homeHeader">
        <h1>Welcome to Garcia Jumpers</h1>
        <p>The best place to rent your party equipment! Explore our categories below to start planning the perfect event.</p>
      </header>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <a href={category.link} className="category-card" key={index}>
            <div className="card-image-placeholder">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="card-content">
              <h2 className="card-title">{category.title}</h2>
              <p className="card-desc">{category.desc}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Home;
