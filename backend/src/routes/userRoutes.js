import express from "express";
const router = express.Router()
import validation from '../utils/joiValidation.js'
import { User } from "../../model/userModel.js";
import bcrypt from 'bcrypt'

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const result=await validation.validate({email, password})
        if(result.error) return res.status(400).send(result.error.message)
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Internal server error")
    }
    try{
        const user = await User.findOne({email})
        if(!user) return res.status(404).send("Email not found")
        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.status(401).send("incorrect password")
        return res.status(200).json(user)
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error")
    }
})


router.post('/signUp',async(req,res)=>{
    const {username,email,password} = req.body;
    try{
        const result=await validation.validate({username, email, password})
        if(result.error) return res.status(400).send(result.error.message)
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Internal server error")
    }
    try{
        const existUser = await User.findOne({email})
        if(existUser) return res.status(409).send("Email already exist")
        const hashPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            username,
            email,
            password:hashPassword
        })
        await user.save();
        return res.status(201).json(user)
    }
    catch(err){
        console.log(err);
        return res.status(500).send("Internal server error")
    }
})


export default router