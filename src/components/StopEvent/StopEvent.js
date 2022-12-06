import { useState, useEffect } from "react"

export const StopEvent = () => {
    //state to get list of all locations
    const [locations, setLocations] = useState([])
    
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
    



    return <div>
        Select Location
        <>
        <label htmlFor="locationdropdown"> Location </label><br></br>
        <select>
        <option value={0} type="select" id="locationselect" className="form-control" required> </option>
        
            {
            locations.map(
                (locations) => {
                    
                    return  <option key="locations-{locations.id}" value={locations.code} > {locations.name} </option> 
                    
                }
            )
             }
        </select>   
        </>
    </div>
}