const cloudinary = require('cloudinary').v2
const dotEnv = require('dotenv').config()
const API_KEY = process.env.API_KEY
const ClOUD_NAME = process.env.ClOUD_NAME
const API_SECRET = process.env.API_SECRET
cloudinary.config({
    cloud_name:ClOUD_NAME,
    api_key:API_KEY,
    api_secret:API_SECRET
})
const uploadImg = './Abena.JPG'

const uploadFile =async()=>{
   try {
    const res= await cloudinary.uploader.upload(uploadImg)
   console.log(res.secure_url);
   } catch (error) {
    console.log(error);
   }
}
uploadFile()