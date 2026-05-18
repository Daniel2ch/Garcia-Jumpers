import React from 'react';
import './Home.css'; // Link the CSS file

const Home = () => {
  const categories = [
    { title: 'Jumpers', desc: 'Classic bounce houses for endless fun', link: '/jumpers', icon: '🏰' },
    { title: 'Tents', desc: 'Provide shade and shelter for your guests', link: '/tents', icon: '⛺' },
    { title: 'Tables & Chairs', desc: 'Comfortable seating for everyone', link: '/tables-chairs', icon: '🪑' },
    { title: 'Decorations', desc: 'Balloons, banners, and party aesthetics', link: '/decorations', icon: '🎈' },
    { title: 'Inflatables', desc: 'Water slides and obstacle courses', link: '/inflatables', icon: '🌊' }
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
            <div className="card-icon">
              <span style={{ fontSize: '2rem' }}>{category.icon}</span>
            </div>
            <h2 className="card-title">{category.title}</h2>
            <p className="card-desc">{category.desc}</p>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Home;
