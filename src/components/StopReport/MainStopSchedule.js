import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MainStopSchedule.css"
import { Table } from "./StopTable"
import { stopTime, timeStampToDayNumber, timeStampToTime } from "./TimeJumper"
//location states are stored per input selector, on initial release there is only one selector active. for each selector, there is also a separate state for their stop events. 
export const StopScheduleSetup = () => {
    const [locations, setLocations] = useState([])
    const [locationOne, setLocationOne] = useState(0)
    const [locationTwo, setLocationTwo] = useState(0)
    const [locationThree, setLocationThree] = useState(0)
    const [locationFour, setLocationFour] = useState(0)
    const [stopsArray, setStopsArray] = useState([])
    const [stopsLocationOne, setStopsLocationOne] = useState([])
    const [stopsLocationTwo, setStopsLocationTwo] = useState([])
    const [stopsLocationThree, setStopsLocationThree] = useState([])
    const [stopsLocationFour, setStopsLocationFour] = useState([])
    const [dateNumber, setDateNumber] = useState(0)
    const [today, setToday] = useState()

    

//function to output the day number (0-6) for today, then set that date number to compare against stop entries
  const findDay = () => {
        let todayDate = Date.now()/1000
    let scheduleDate = timeStampToDayNumber(todayDate)
    setDateNumber(scheduleDate)
    }

        //function to display todays date in the H2 below
   const todayFormattedDate = () => {
    let todayTimestamp = Date.now()/1000
    let todayFormatDate = `${new Date(todayTimestamp * 1000)}`
    let splitDateArray = todayFormatDate.split("2022", 1)
    let splitDateObject = splitDateArray[0]
    return `${splitDateObject}`
   }

   //function to calculate train stop time
   
// takes the day number and converts it back to the string label (ie  1 = Monday)
    const CreateTextDayFromDayNumber = (number) => {
        if (number === 0) {
            return "Sunday"
        }
        else if (number === 1) {
            return "Monday"
        }
        else if (number === 2) {
            return "Tuesday"
        }
        else if (number === 3) {
            return "Wednesday"
        }
        else if (number === 4) {
            return "Thursday"
        }
        else if (number === 5) {
            return "Friday"
        }
        else if (number === 6) {
            return "Saturday"
        }
    }
  
    useEffect(
        () => {
            findDay()
        }, []
    )


    //get user info
    const localHoneyUser = localStorage.getItem("honey_user")
     const honeyUserObject =JSON.parse(localHoneyUser)
    //console.log(honeyUserObject.id) 
   //function to get all locations filtered by user
    const getAllLocations = () => {
        fetch (`http://localhost:8088/locations?&userId=${honeyUserObject.id}`)
        .then (res => res.json())
        .then ((locationArray) => {
            setLocations(locationArray)
        } )
    }
   //get all locations upon mount
    useEffect(
        () => {
            getAllLocations()
        }, []
    )
    
    //function to get all stops 
    const getAllStops = () => {
        fetch (`http://localhost:8088/stops?_expand=location&userId=${honeyUserObject.id}&stopDayNumber=${dateNumber}`)
        .then (res => res.json())
        .then ((stopsArray) => {
            setStopsArray(stopsArray)
        } )
    }

    //get all stops upon mount
    useEffect(
        () => {
            getAllStops()
        }, [dateNumber]
    )
        

    //function to filterStops by location
        useEffect(
            () => {
                const locationOneArray = stopsArray.filter ((stops) => stops.locationId === locationOne)
                setStopsLocationOne(locationOneArray)
                
                
            },[locationOne]
        )
        /*
        useEffect(
            () => {
                const locationTwoArray = stopsArray.filter ((stops) => stops.locationId === locationTwo)
                setStopsLocationTwo(locationTwoArray)
                
                
            },[locationTwo]
        )
        useEffect(
            () => {
                const locationThreeArray = stopsArray.filter ((stops) => stops.locationId === locationThree)
                setStopsLocationThree(locationThreeArray)
            },[locationThree]
        )
        useEffect(
            () => {
                const locationFourArray = stopsArray.filter ((stops) => stops.locationId === locationFour)
                setStopsLocationFour(locationFourArray)
            },[locationFour]
        )

        
    */

        //function to either display the default message to select the location or if there are no stop events, to display that. This function is run inside a ternary operatator
    const stopRecordsOrNot = (locationNumber) => {
        if (locationNumber === 0) {
            return <div className="defaultstatus">Please select a location above</div>
        }
        else { return <div className="stopboxes" >No StopEvents Found for the selected location</div>}

    }

    const navigate = useNavigate()

    return <>
    <div className="layout">
<h1>StopSchedule</h1>
    <div className="locationselectorgroup">
        <br></br>
        <br></br>
    <label htmlFor="locationdropdown"><b>Select Locations to view schedule</b></label>
        <select onChange={(evt) => {
            let copyOne= evt.target.value
            setLocationOne(parseInt(copyOne))
            
        }}>
        <option value={0} type="select" id="locationselect" className="form-control" required>Select a location </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option className="dropdown" key={`locationone-${locations.id}`} value={locations.id} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
        {/*  THIS IS COMMENTED OUT but as a stretch goal be implemented
    <label htmlFor="locationdropdown"></label>
        <select onChange={(evt) => {
            let copyTwo= evt.target.value
            setLocationTwo(parseInt(copyTwo))
        }}>
        <option value={0} type="select" id="locationselect" className="form-control" required>Select a location </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option key={`locationtwo-${locations.id}`} value={locations.id} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
    <label htmlFor="locationdropdown"></label>
        <select onChange={(evt) => {
            let copyThree= evt.target.value
            setLocationThree(parseInt(copyThree))
        }}>
        <option value={0} type="select" id="locationselect" className="form-control" required>Select a location </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option key={`locationthree-${locations.id}`} value={locations.id} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
    <label htmlFor="locationdropdown"></label>
        <select onChange={(evt) => {
            let copyFour= evt.target.value
            setLocationFour(parseInt(copyFour))
        }}>
        <option value={0} type="select" id="locationselect" className="form-control" required>Select a location </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option key={`locationfour-${locations.id}`} value={locations.id} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
          */}
        </div>
        
       <h2>Today's Date:{todayFormattedDate()}</h2>
       <a className="info"><em>Previous stop events recorded on for the seleted location on a {CreateTextDayFromDayNumber(dateNumber)}:</em></a>
       <div className="boxes">
       {    stopsLocationOne.length?
                stopsLocationOne.map((stops) => {
                    return <div className="stopboxes">🚆 <b>{timeStampToTime(stops.stopTimestamp)} - StopTime: {stopTime(stops.timerSeconds)} </b> <br></br>Notes: {stops.notes}</div>
                })
                : stopRecordsOrNot(locationOne)
             }
                     <div className="navbuttons">
                     <div className="homebutton" onClick={() => navigate("/home")}>Home</div>
        <div className="homebutton" onClick={() => navigate("/createstop")}>Create Stop</div>
            </div>
             </div>
             </div>
        </>
        
  

   
}