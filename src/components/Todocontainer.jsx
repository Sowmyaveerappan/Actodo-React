import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"


function Todocontainer() {

    const [activityArr,setActivityArr] = useState([
        
         ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform activityArr= {activityArr} setActivityArr= {setActivityArr}></Addtodoform>
                <Todolist activityArr = {activityArr} setActivityArr ={setActivityArr}></Todolist>

            </div>
        </div>
    )
}
export default Todocontainer