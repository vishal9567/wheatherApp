const days=[1,2,3,4,5,6,7]
const Shimmer =()=>{
    return(
            <div className="rounded-3xl my-12 h-5/6 w-full bg-white flex overflow-hidden">
                <div className="w-80 p-8">        
                    <div className="w-full bg-gray-400 h-7 rounded-md animate-pulse">
                    </div>
                    <div className="py-2 pl-5">
                        
                        <div className='flex gap-1 items-center mt-5 w-full h-36 rounded-md bg-gray-400 animate-pulse'>
                            
                        </div>
                        <div className='flex gap-1 items-center rounded-md bg-gray-400 h-12 mt-5 animate-pulse'>
                        
                        </div>
                        <div className='flex gap-1 items-center rounded-md bg-gray-400 h-12 mt-5 animate-pulse'>
                        
                        </div>
                    </div>
                </div>
            <div className="flex-1 p-8 bg-slate-300">
                <div className="flex justify-between rounded-md bg-gray-400 h-12 w-full animate-pulse">
                    
                </div>
                <div className="mt-8 flex gap-3">
                   {days.map((item)=>(
                        <div className="rounded-lg bg-gray-400 w-24 h-28 shadow-lg p-2 flex flex-col justify-center items-center animate-pulse" key={item}>
                       
                        </div>
                   )) }
                </div>
            </div>
            </div>
    )
}

export default Shimmer;