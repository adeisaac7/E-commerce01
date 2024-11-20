import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext.jsx';
import { Item } from '../Components/Items/Item';
import dropdown from '../Components/Assets/dropdown_icon.png';

function ShopCategory() {
  const { filteredArtisans = [], userLocation } = useContext(ShopContext); // Access context values
  const productSectionRef = useRef(null);
  const navigate = useNavigate();

  console.log("ShopCategory - filteredArtisans: ", filteredArtisans);

  const scrollToProducts = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProfileClick = (artisanId) => {
    navigate(`/artisan/single/${artisanId}`);
  };

  const locationText = userLocation
    ? 'Products Available in Your Location'
    : 'Showing All Artisans';

  return (
    <div className='shop-category'>
      {filteredArtisans.length === 0 ? (
        <p>Loading artisans...</p>
      ) : (
        <>
          <section className='hero-section'>
            <div className='hero-content'>
              <h1>Meet Our Skilled Artisans</h1>
              <p>Connecting you with the best local talent.</p>
              <button
                className='shop-now-btn'
                onClick={scrollToProducts}
              >
                VIEW ARTISANS
              </button>
            </div>
          </section>

          <div ref={productSectionRef} className='shopCategory-indexSort'>
            <p>
              <span>Showing 1-{Math.min(24, filteredArtisans.length)}</span> out of {filteredArtisans.length} products
              <img src={dropdown} alt='dropdown' className='dropdown' />
            </p>

            <div className={`shopCategory-sort ${userLocation ? 'show' : ''}`}>
              <p>
                {locationText}
                <img src={dropdown} alt='dropdown' className='dropdown' />
              </p>
            </div>
          </div>

          <div className='shopCategory-products'>
              {filteredArtisans.map((artisan) => (
                <Item
                  key={artisan._id}
                  id={artisan._id}
                  name={artisan.name}
                  profilePic={artisan.profilePic}
                  occupation={artisan.occupation}
                  description={artisan.description}
                  location={artisan.location}
                  onClick={() => handleProfileClick(artisan._id)}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ShopCategory;
