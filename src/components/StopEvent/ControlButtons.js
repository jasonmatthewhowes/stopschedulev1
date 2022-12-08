import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div className="btn btn-one btn-start"
		onClick={props.handleStart}>
	Start
	</div>
);
const ActiveButtons = (
	<div className="btn-grp">
	
	<div className="btn btn-one"
		onClick={props.handlePauseResume}>
		{props.isPaused ? "Resume" : "Stop"}
        
	</div>
    <div className="btn btn-one"
		onClick={props.handleReset}>
		Zero
	</div>
	</div>
);

const [notes,setNotes] = useState("")

const navigate = useNavigate()

//function to create the stopevent object to send to the API
const handleStopEventSave = (evt) => {
    evt.preventDefault()
    const objectToSendToAPI = {
        userId:props.userId,
        locationId:props.locationId,
        stopTimestamp: Date.now()/1000,
        timerSeconds: props.time,
        notes:notes
        
    }
    console.log(objectToSendToAPI)
    fetch (`http://localhost:8088/stops`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(objectToSendToAPI)
                })
                .then(() => {
                    navigate("/home")
                })

}

return (
	<div className="Control-Buttons">
	<div>{props.active ? ActiveButtons : StartButton}</div>
    <label htmlFor="notes">Notes:</label>
    <textarea className="notes" onChange={(event) => {
        const tempnotes = event.target.value
        setNotes(tempnotes)
    }
    } ></textarea> 
    <div className="btn btn-one" onClick={(event) => handleStopEventSave(event)}>Save</div>
    <div className="btn btn-one" onClick={() => navigate("/home")}>Home</div>
	</div>
);
}
