//rrd imports
import { Outlet, useLoaderData } from "react-router-dom"

//assets
import  wave from "../assets/wave.svg"

//Components
import Nav from "../components/Nav"

//Helper Functions
import { fetchData } from "../helpers"

//Loader
export function mainLoader(){
    const userName = fetchData("userName")
    return {userName }
}

const Main = () => {//Outlet drops the children in, children come from App.jsx
    const {userName} = useLoaderData()
    return (
        <div className="layout">
            <Nav userName={userName}/>
            <main>
                <Outlet /> 
            </main>
            <img src={wave} alt="" />
        </div>
    )
}

export default Main