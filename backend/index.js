import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import artisanRouter from './routes/artisanRoute.js'


// App config
const app = express()
const port = process.env.PORT || 5001
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials:  true,
}));

//api endpoints
app.use("/api/user",userRouter)
app.use("/api/artisan",artisanRouter)


app.get("/", (req,res)=>{
    res.send("API is Working")
})

app.listen(port, ()=> console.log('Server started on PORT :'+ port))

