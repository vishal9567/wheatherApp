import express from 'express'
import cors from 'cors'
import userRouter from '../backend/src/routes/userRoutes.js'
import wheatherRouter from '../backend/src/routes/wheatherRoutes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api',wheatherRouter)

const main = async()=>{
    await mongoose.connect(MONGO_URL)
    app.listen(PORT,()=>console.log(`server connected at http://localhost:${PORT}`))
}
main().catch((err)=>console.log(err))
