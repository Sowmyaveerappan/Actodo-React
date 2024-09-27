import Header from "../components/Header.jsx"
import Card from "../components/card.jsx"
import Todocontainer from '../components/Todocontainer.jsx';
import { useLocation } from "react-router-dom";

function Landing(){
       const data = useLocation()
    return(
        <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
          {/*Header*/}
          <Header name={data.state.user}></Header>
          {/*Card*/}
          <div className='flex justify-between gap-7 my-5 flex-wrap'>
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
            <Card bgcolor={"#FD6663"} title={"December"} subtitle={"18:40:45"}></Card>
            <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"}></Card>
  
  
          </div>
          {/*Todocontainer*/}
       <Todocontainer></Todocontainer>
        </div>
      </div>

    )
}
export default Landing