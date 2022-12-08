import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../nav/NavBar"
import "./StopEvent.css"
import {StopWatch} from "./StopWatch"


export const StopEvent = () => {
    //state to get list of all locations
    const [locations, setLocations] = useState([])
    const [stopTime, setStopTime] = useState(0)
    const [singlelocation, setSingleLocation] = useState(0)
    const navigate = useNavigate()

    const localHoneyUser = localStorage.getItem("honey_user")
     const honeyUserObject =JSON.parse(localHoneyUser)
    console.log(honeyUserObject.id) 
    const getAllLocations = () => {
        fetch (`http://localhost:8088/locations?&userId=${honeyUserObject.id}`)
        .then (res => res.json())
        .then ((locationArray) => {
            setLocations(locationArray)
        } )
    }
   
    useEffect(
        () => {
            getAllLocations()
        }, []
    )
    


    console.log(locations)
   



    return <div className="createstophome">
        
        <>
        <label htmlFor="locationdropdown"> Select Location </label>
        <select onChange={(evt) => {
            const copy= evt.target.value
            setSingleLocation(parseInt(copy))
        }}>
        <option value={0} type="select" id="locationselect" className="form-control" required>Select a location </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option key={`locations-${locations.id}`} value={locations.id} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
        </>
        <br></br>     
        <button className="locationButton" onClick={() => navigate("/createlocation")}>Create New Location</button>
        
       < StopWatch locationId={singlelocation} userId={honeyUserObject.id} />
    </div>
    

    
}