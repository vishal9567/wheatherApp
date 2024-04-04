import { useState,useEffect,useRef } from "react"

    const Autocomplete =({options,onLocationSelect})=>{
    const [value,setValue]=useState("");
    const [showSuggesion,setShowSuggesion] = useState(false);
    const suggetions= options.filter(option => option.toLowerCase().includes(value.trim().toLowerCase()))
    
    const autoCompleteRef = useRef()

    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    const handleValue=(suggesion)=>{
        setValue(suggesion);
        setShowSuggesion(false)
        onLocationSelect(suggesion)
    }

    useEffect(()=>{
        const handleOutsideClick =(e)=>{
            if(autoCompleteRef.current && !autoCompleteRef.current.contains(e.target)){
                setShowSuggesion(false)
            }
        }
        document.addEventListener('click',handleOutsideClick)

        return ()=>(
            document.removeEventListener('click',handleOutsideClick)
        )
    },[])

    return (
        <form className="max-w-md mx-auto relative " ref={autoCompleteRef}>   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" value={value} onChange={handleChange} onFocus={()=>setShowSuggesion(true)} className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg  focus:outline-none " placeholder="Search location..." required />
            </div>
                <ul className={`absolute ${showSuggesion ? "opacity-100 left-0" : "-left-96 opacity-0 z-0"} top-14 ease-in-out duration-700 p-2 max-h-64 w-full bg-slate-300 z-10 rounded-md overflow-auto`}>{
                    suggetions.map(item=>(
                        <li onClick={()=>handleValue(item)} className="hover:bg-white cursor-pointer p-2" key={item}>{item}</li>
                    ))
                    }
                </ul> 
        </form>  
    )
}

export default Autocomplete