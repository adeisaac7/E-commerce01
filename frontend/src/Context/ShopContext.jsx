import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'


export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const [artisans, setArtisans] = useState([]);

    const [filteredArtisans, setFilteredArtisans] = useState([]);

    const [userLocation, setUserLocation] = useState(null);

    const backendUrl = process.env.BACKEND_URL || "http://localhost:5001";

    const [token, setToken] = useState(localStorage.getItem('token') || '');


    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < artisans.length+1; index++) {
            cart[index] = 0;
        }
        return cart;
    };

    const [cartItems,setCartItems] = useState(getDefaultCart());



    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = artisans.find((artisan)=>artisan.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartitem = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };


    useEffect(() => {
        const getArtisanData = async () => {
          try {
            const response = await axios.get(`${backendUrl}/api/artisan/list`);
            if (response.data.success) {
              setArtisans(response.data.artisans);
              setFilteredArtisans(response.data.artisans);
            } else {
              toast.error(response.data.message);
            }
          } catch (error) {
            toast.error("Failed to fetch artisans: " + error.message);
          }
        };
        getArtisanData();
      }, []);

    useEffect(() => {
        const updateFilteredArtisans  = ()=> {
            console.log("User location:", userLocation);
        if (userLocation){
            const filtered = artisans.filter(
                (artisan) => artisan.location?.toLowerCase() === userLocation.toLowerCase()
            );
            console.log("Filtered artisans for location:", userLocation , filtered);
            setFilteredArtisans(filtered.length > 0 ? filtered : artisans);
        } else{
            setFilteredArtisans(artisans);
        } 
    };

    const timeout = setTimeout(updateFilteredArtisans,200);

    return () => clearTimeout(timeout);
    }, [userLocation, artisans]);
    

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
    }
   
    const contextValue = {
        getTotalCartitem,
        getTotalCartAmount, 
        artisans, 
        cartItems,
        addToCart,
        removeFromCart, 
        filteredArtisans: filteredArtisans || [],
        setFilteredArtisans, 
        userLocation, 
        setUserLocation,
        backendUrl,
        setToken,
        token,
        logout        
    };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
