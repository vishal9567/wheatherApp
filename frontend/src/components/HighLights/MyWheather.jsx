const MyWheather =({day,temp,wth})=>{
    const getCurrentLocation=()=>{
        navigator.geolocation.getCurrentPosition(position=>console.log(position))
    }
    return(
        <div className="rounded-lg bg-white w-24 shadow-lg p-2 flex flex-col justify-center items-center">
            <h4>{day}</h4>
            <h4>{temp}</h4>
            <h4>{wth}</h4>
            <button onClick={getCurrentLocation}>click</button>
        </div>
    )
}

export default MyWheather;