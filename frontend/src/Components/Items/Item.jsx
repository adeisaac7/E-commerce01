import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

export const Item = ({id, profilePic, name, occupation, location, description}) => {

  return (
    <div className='artisan-card'>
        <Link to = {`/artisan/single/${id}`} onClick={()=>window.scrollTo(0,0)}>
          <div className='artisan-image-container'>
            <img src={profilePic} loading='lazy' alt={name} className='artisan-image'/>
          </div>
        </Link>

      <div className='artisan_info'>
        <h3 className='artisan-name'>{name}</h3>
        <p className='artisan-occupation'>{occupation}</p>
        <p className='artisan-location'>{location}</p>
        <p className='artisan-description'>{description}</p>
      </div>

        <div className='artisan_actions'>
          <button className='view_profile_btn'>
            <Link to={`/artisan/single/${id}`}>View Profile</Link>
          </button>
        </div>
      </div>
  );
};
export default Item;