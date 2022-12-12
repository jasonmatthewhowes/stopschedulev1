import "./Locations.css"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//function to load the locations.
export const Locations = () => {
    const [locationsArray, setLocationsArray] = useState([])
//grab all locations
    useEffect(
        () => {
           fetch (`http://localhost:8088/locations`)
                .then (res => res.json())
                .then ((data) => {
                    setLocationsArray(data)
                } )
            },
            []
    )

    const navigate = useNavigate()

return <div className="locationscontainer">
        <>
        {locationsArray.map(
            (locations) => {
                return <div className="locationboxes" key={`locationbox-${locations.id}`}>
                    <button className="insidebuttons" onClick={()=> navigate(`/stops/location/${locations.id}`)}>Stops</button>
                    <div className="textbox">
                     <a href={`http://maps.google.com/maps?q=${locations.lattitude}+${locations.longitude}+(label)&ll=${locations.lattitude},${locations.longitude}&spn=0.004250,0.011579&t=h&iwloc=A&hl=en`
} target="_blank" >{locations.name}</a>
                     {locations.lattitude},{locations.longitude}
                     <br></br>
                     {locations.city},{locations.state}
                     </div>
                     <button className="insidebuttons" onClick={()=> navigate(`/editlocation/${locations.id}`) } >Edit</button>
                     </div> 
            }
        )
        } 
    
        </>
        <div className="buttonbox">
        <div className="homebutton" onClick={() => navigate("/home")}>Home</div>
        <div className="homebutton" onClick={() => navigate("/createstop")}>Create Stop</div>
        <div className="homebutton" onClick={() => navigate("/createlocation")}>New Location</div>
        </div>
  </div>
  
 
}


