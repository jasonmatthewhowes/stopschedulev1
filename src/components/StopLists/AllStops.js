import "./StopLists.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//function to load the locations.
export const Stops = () => {
    const [stopsArray, setStopsArray] = useState([])
    const [locationsArray, setLocationsArray] = useState()
//grab all stops
    useEffect(
        () => {
           fetch (`http://localhost:8088/stops?_expand=location`)
                .then (res => res.json())
                .then ((data) => {
                    setStopsArray(data)
                } )
                
            },
            []
    )

    const findLocations = (stopid) => {
        for (const locationsx of locationsArray) {
            if (locationsx.id===stopid){
                return 
            }
        }
    }

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
        {stopsArray.map(
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
        )
        } 
    
        </>
        <div className="homebutton" onClick={() => navigate("/home")}>Home</div>
        <div className="homebutton" onClick={() => navigate("/createstop")}>Create Stop</div>
  </div>
  
 
}
