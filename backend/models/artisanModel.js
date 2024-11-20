import mongoose from "mongoose";

const artisanSchema = new mongoose.Schema({
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    location: {type: String, required: true},
    profilePic: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true},
    services: {type: [String], required: true},
    contact: {type: String, required: true},
})

const artisanModel = mongoose.models.artisans || mongoose.model('artisans', artisanSchema);

export default artisanModel