import { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Shimmer from "./shimmer/Shimmer";
import axios from 'axios'
import { WHEATHER_API, WHEATHER_APP_API } from "../utils/config";

const WheatherAppComponent =()=>{
    const [loading,setLoading] = useState(true)
    const [wheatherData,setWheatherData] = useState("")
    const [location,setLocation] = useState(null)

    const onLocationSelect =(suggestion)=>{
        setLocation(suggestion)
    }

    useEffect(()=>{
        const fetchData = async()=>{
            let Data;
            try{
                 if(location !== null){
                    console.log(`${WHEATHER_APP_API}&q=${location}`);
                    Data = await axios.get(`${WHEATHER_APP_API}&q=${location}`)
                    setWheatherData(Data.data)
                    console.log('data',Data);
                 }
                 else{
                     Data= await axios.get(`${WHEATHER_API}/wheather`)
                     setWheatherData(Data.data)
                 }
            }
            catch(err){
                console.log(err);
            }
            return Data;
        }
        fetchData();
        if(wheatherData !== undefined) setLoading(false)
    },[location])
    return loading ? <Shimmer/> : (
        <div className="rounded-3xl my-12 h-5/6 w-full bg-white flex overflow-hidden">
            <LeftSection data={wheatherData} onLocationSelect={onLocationSelect}/>
            <RightSection data={wheatherData}/>
        </div>
    )
}

export default WheatherAppComponent;