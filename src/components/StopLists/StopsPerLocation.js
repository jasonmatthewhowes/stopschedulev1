import "./StopLists.css"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const StopsPerLocation = () => {
    const [stopsArray, setStopsArray] = useState([])
    const [locationsArray, setLocationsArray] = useState()

    const { locationId } = useParams()

//grab all stops
    useEffect(
        () => {
           fetch (`http://localhost:8088/stops?_expand=location&locationId=${locationId}`)
                .then (res => res.json())
                .then ((data) => {
                    setStopsArray(data)
                } )
                
            },
            []
    )

   


  
    const navigate = useNavigate()

    const stopTime = (ms) => {
        let seconds = (ms / 1000).toFixed(1);
        let minutes = (ms / (1000 * 60)).toFixed(1);
        let hours = (ms / (1000 * 60 * 60)).toFixed(1);
        let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
        if (seconds < 60) return seconds + " Seconds";
        else if (minutes < 60) return minutes + " Minutes";
        else if (hours < 24) return hours + " Hours";
        else return days + " Days"
      }

      const timeStampToDate = (timestamp) => {
        let formattedDate =new Date(timestamp * 1000)
        return `${formattedDate}`
    }


return <div className="stopscontainer">
        <>
        {stopsArray.length ? 
        
        stopsArray.map(
            (stops) => {
                return <div className="stopboxes" key={`stopbox-${stops.id}`}>
                    <li><b>
                        {
                            stops?.location?.name
                        }
                </b></li>
                
                <li ><b>Stop Time: </b> 
                {stopTime(stops.timerSeconds)}
                <br></br></li>
                <li>
                <b>Date: </b> {timeStampToDate(stops.stopTimestamp)}
                </li>
                </div> 
            }
        ) : <h2>No Stops for this location</h2>
        } 
    
        </>
        <div className="homebutton" onClick={() => navigate("/home")}>Home</div>
        <div className="homebutton" onClick={() => navigate("/createstop")}>Create Stop</div>
        <div className="homebutton" onClick={() => navigate("/trainlocations")}>All Locations</div>
  </div>
  
 
}
