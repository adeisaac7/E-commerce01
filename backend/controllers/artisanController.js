import {v2 as cloudinary} from 'cloudinary'
import artisanModel from '../models/artisanModel.js'

//function for ADD artisan
const addArtisan = async (req, res) => {
    try {
        const {name,occupation,location,description,rating,services,contact } = req.body

        const profilePic = req.file;

        if(!profilePic) {
            return res.status(400).json({msg: "Please upload a profile picture."})
        }

        const result = await cloudinary.uploader.upload(profilePic.path, { resource_type: 'image' });

        const profilePicUrl = result.secure_url;


        const artisanData = {
            name,
            occupation,
            location,
            description,
            rating: Number(rating),
            services: JSON.parse(services),
            contact,
            profilePic: profilePicUrl,
        }

        console.log(artisanData);

        const artisan = new artisanModel(artisanData)
        await artisan.save()

        res.json({success:true, message:'Artisan added successfully'});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}
//function to LIST artisan
const listArtisan = async (req, res) => {
    try {
        const artisans = await artisanModel.find({});
        res.json({success:true,artisans})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// function to REMOVE artisan
const removeArtisan = async (req, res) => {
    try {
        await artisanModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Artisan removed"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}
// function for SINGLE artisan info
const singleArtisan = async (req, res) => {
    try {
        const {id} = req.params;
        const artisan = await artisanModel.findById(id);
        if(!artisan) {
        res.json({error:"Artisan not found"});
        }
        res.json({artisan});

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const listArtisansByLocation = async (req,res) => {
    const {location} = req.params;
    try {
        const artisans = await Artisan.find({ location: { $regex: new RegExp(location, 'i') } });
        res.json({success:true, artisans});
    } catch (error) {
        console.error("Error fetching artisans by location:", error);
        res.json({success:false, message: "Server Error"});
    }
}

export {addArtisan, listArtisan, removeArtisan,singleArtisan, listArtisansByLocation}
