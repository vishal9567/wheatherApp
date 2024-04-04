import express from 'express'
const router=express.Router();
import { wheatherData } from '../utils/config.js';

router.get('/wheather',(req,res)=>{
    console.log('cal comes',wheatherData);
    return res.status(200).json(wheatherData)
})

export default router;