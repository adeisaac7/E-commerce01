import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/initial-ac-logo-design-combination-icon.png'
import loginIcon from '../Assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import loc from '../Assets/locationfr.png'
import axios from '../../utils/axios';
import {toast} from 'react-toastify';


export const Navbar = () => {

    const {getTotalCartitem, setUserLocation, userLocation, setFilteredArtisans, artisans, logout} = useContext(ShopContext);

    const [location, setLocation] = useState("Enter your location");
    const [showPopup, setShowPopup] = useState(false);
    const [derivedLocation, setDerivedLocation] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const {token, setToken} = useContext(ShopContext);

    const navigate = useNavigate();
    let hideTimeout;

    const showDropdownMenu = () => {
      clearTimeout(hideTimeout);
      setShowDropdown(true);
    };

    const hideDropdownMenu = () => {
      hideTimeout = setTimeout(()=> setShowDropdown(false), 200);
    };
    
    const handleLogout = () => {
      logout();
      setToken(null);
      localStorage.removeItem('token');
      toast.success("Successfully logged out");
      navigate('/login');
    }

    const fetchLocation = () => {
        if (!navigator.geolocation) {
            toast.error("Geolocation is not supported by this browser");
            return;
          }

          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

            fetch(url)
              .then((response) => response.json())
              .then((data) => {

                console.log("Full Location Data:", data);

                const city = data.address.city;
                setDerivedLocation(city)
                setLocation(city || "Unknown location");
                setShowPopup(true);
              })
              .catch(() => {
                toast.error("Error retrieving location");
              });
          }, () => {
            toast.error("Unable to retrieve your Location");
          });
          
        };

        const handleLocationClick = () =>   fetchLocation();
  
        const handlePopupResponse = (response) => {
          setShowPopup(false);
          if (response === "Yes" && derivedLocation) {
            updateFilteredArtisans(derivedLocation);
          }
        };

        const handleManualLocationSubmit =  async () => {
          if (!location.trim()) {
            toast.warning('Please enter a valid location.');
            return;
          }
          updateFilteredArtisans(location);
        };

        const updateFilteredArtisans = async (loc) => {
          const normalizedLocation = loc.toLowerCase().trim();
          setUserLocation(normalizedLocation);
          try{
            const response = await axios.get(`/artisan/location/${normalizedLocation}`);
            const artisanList = response?.data?.artisans || [];
            setFilteredArtisans(artisanList);
            if(artisanList.length === 0) {
              toast.info('No artisans found in this location.');
            } else{
              toast.success(`${artisanList.length} artisans found in ${loc}`);
            }
          } catch(error) {
              console.error('Error fetching artisans: ', error);
              toast.error('Failed to fetch artisan.Please try again.');
            }
        };
        const handleKeyPress = (e) => {
          if (e.key === 'Enter') {
            handleManualLocationSubmit();
          }
        };

      //   const fetchArtisans = async () => {
      //     try{
      //         const res = await axios.get('/api/artisans');
      //         const artisanData = res.data?.artisan || [];
      //         if (Array.isArray(artisanData) && artisanData.length > 0) {
      //             console.log('Artisans fetched:', artisanData);
      //             setArtisans(artisanData);
      //         } else{
      //             console.log('No artisans found.');
      //             toast.error('No artisans found');
      //             setArtisans([]);
      //         }
      //     } catch (error) {
      //         console.error('Error fetching artisans:', error);
      //         toast.error('Failed to fetch artisans. Please try again.');
      //         setArtisans([]);
      //     }
      // };

      // useEffect(()=>{
      //   fetchArtisans();
      // }, []);

          
 
  return (
    <div className='navbar'>
        <div className='navbar-content'>
            <Link to = '/' style={{textDecoration: 'none'}}>
                <div className="nav-logo">
                    <img src={logo} alt=""/>
                    <p>CRAFTS<span>HUB</span></p>
                </div>
            </Link>
        
            <div className='getLocation'>
                <img title='Click here to get location' src={loc}  onClick={fetchLocation} className='find-state' alt=''/>
                {/* <h1  className='status'>{location}</h1> */}
                <input type='text' placeholder= {location ==='Enter your location' ? 'Enter your location' : ''}
                  value={location}
                  onFocus={() => setLocation('')}
                  onBlur={(e) => {
                    if (!e.target.value) setLocation('Enter your location');
                  }}
                  onChange={(e) => setLocation(e.target.value)} onKeyPress={handleKeyPress}
                  className='status'
                />

                <button onClick={handleManualLocationSubmit} className='upper-btn'>Submit</button>
            </div>

            
            <div 
              className='nav-login-cart'
              onMouseEnter={showDropdownMenu}
              onMouseLeave={hideDropdownMenu}
            >
            {token ? (
              <>
                <img src={loginIcon} 
                  alt="" 
                  className='cart'/>                  
                
                {showDropdown &&(
                  <div className='dropdownMenu'>
                    <p onClick={handleLogout} className='dropdownItem'>Logout</p>
                  </div>
                )}
              </>
            ) : (
              <Link to='/login'>
                <img src={loginIcon} alt='login' className='cart'/>
              </Link>
            )}
          </div>
          </div>

         
        {showPopup && (
            <div className='location-popup'>
                <p>Do you want to display artisans around {derivedLocation}?</p>
                <button onClick={()=> handlePopupResponse('Yes')}>Yes</button>
                <button onClick={()=> handlePopupResponse('No')}>No</button>
            </div>
        )}
    </div>
  );
};