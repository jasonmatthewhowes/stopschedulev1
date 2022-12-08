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
                return <li className="locationboxes" key={`locationbox-${locations.id}`}>
                     <Link to={`/stops/location/${locations.id}`}>{locations.name} </Link>
                     <br></br>
                     {locations.lattitude},{locations.longitude}
                     <br></br>
                     {locations.city},{locations.state}</li> 
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


