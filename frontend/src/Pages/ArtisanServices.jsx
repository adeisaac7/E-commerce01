import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CSS/ArtisanServices.css'
import axios from '../utils/axios';


const ArtisanServices = () => {

    const {id} = useParams();
    const [artisan, setArtisan] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get(`/artisan/single/${id}`)
            .then((response) => {
                console.log(response.data);
                setArtisan(response.data.artisan);
            })   
            .catch((error) => {
                console.error(error);
                setError('Error fetching artisan details');
    });
    },[id]);

    if(error) {
        return <h1>{error}</h1>
    }
    
    if (!artisan) {
        return <h1>Loading...</h1>;
    }

  return (
    <div className='artisan_service_page'>
        <h1>{artisan.name}</h1>
        <img src={artisan.profilePic} alt={artisan.name} className='artisan_image'/>
        <p><strong>Occupation:</strong>{artisan.occupation}</p>
        <p><strong>Location:</strong>{artisan.location}</p>
        <p><strong>Description:</strong>{artisan.description}</p>

        <h2>Services Offered</h2>
        <ul>
            {artisan.services && artisan.services.map((service, index)=>(
                <li key={index}>{service}</li>
            ))}
        </ul>

        <h3>Contact Information</h3>
        <p>{artisan.contact}</p>
    </div>
  )
}

export default ArtisanServices;