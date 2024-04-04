import MyWheather from "./HighLights/MyWheather";

const wheather=[
    {day:"Sun",temp:"15",wth:"sunny"},
    {day:"Mon",temp:"15",wth:"sunny"},
    {day:"Thue",temp:"15",wth:"sunny"},
    {day:"Wen",temp:"15",wth:"sunny"},
    {day:"Thur",temp:"15",wth:"sunny"},
    {day:"Fri",temp:"15",wth:"sunny"},
    {day:"Sat",temp:"15",wth:"sunny"}
]
const RightSection = ()=>{
    return (
        <div className="flex-1 p-8 bg-slate-300">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <h3 className="text-lg text-slate-600 p-1">Today</h3>
                    <h3 className="text-lg font-bold p-1 border-b-2 border-slate-600">Week</h3>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <div className="bg-black rounded-full w-7 h-7 flex justify-center items-center">
                        <span className="text-white ">&#8451;</span>
                    </div>
                    <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center">
                        <span className="">&#8457;</span>
                    </div>
                    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-8 flex gap-3">
                {
                    wheather.map(item=>{
                        return(
                            <MyWheather key={item.day} {...item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RightSection;