import { useState } from "react"


function Addtodoform(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setnewactivity] = useState("")

    function handlechange(event){
        setnewactivity (event.target.value)
    }
     
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:newactivity}])
        setnewactivity("")
    }
return(
    <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>

                <div>
                <input value={newactivity} onChange={handlechange}type="text"  className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                <button onClick={addActivity} className="bg-black text-white border border-black p-1">Add</button>
                </div>

            </div>
)
}
export default Addtodoform