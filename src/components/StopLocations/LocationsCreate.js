import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Locations.css"
export const CreateLocation = () => {
    const [location, setLocation] = useState({
    name: "",
    lattitude: 0,
    longitude: 0,
    drivingDirection: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    userId:0
    })

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject =JSON.parse(localHoneyUser)
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const locationToSendToAPI = {
            name: location.name,
            lattitude: location.lattitude,
            longitude: location.longitude,
            drivingDirection: location.drivingDirection,
            address: location.address,
            city: location.city,
            state: location.state,
            zip: location.zip,
            userId: honeyUserObject.id
        }
        return fetch(`http://localhost:8088/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationToSendToAPI)
        })
            .then(()=> {
            navigate("/trainlocations")
        })
    }



    return <div className="mainlayout">
    <>
    <form className="locationForm">
    
    <fieldset>
       
    <h2 className="form-group">Create Location</h2>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <textarea
                required autoFocus
                type="text"
                className="form-control"
                value={location.name}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.name =evt.target.value
                        setLocation(copy)
                    }
                }>{location.name}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="lattitude">Lattitude:</label>
            <textarea
                type="number"
                className="form-control"
                value={location.lattitude}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.lattitude =evt.target.value
                        setLocation(copy)
                    }
                }>{location.lattitude}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="longitude">Longitude:</label>
            <textarea
                type="number"
                className="form-control"
                value={location.longitude}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.longitude =evt.target.value
                        setLocation(copy)
                    }
                }>{location.longitude}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="drivingDirection">Driving Direction (ie North):</label>
            <textarea
                type="text"
                className="form-control"
                value={location.drivingDirection}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.drivingDirection =evt.target.value
                        setLocation(copy)
                    }
                }>{location.drivingDirection}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
                
                type="text"
                className="form-control"
                value={location.address}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.address =evt.target.value
                        setLocation(copy)
                    }
                }>{location.address}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="city">City:</label>
            <textarea
                
                type="text"
                className="form-control"
                value={location.city}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.city =evt.target.value
                        setLocation(copy)
                    }
                }>{location.city}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="state">State:</label>
            <textarea
               
                type="text"
                className="form-control"
                value={location.state}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.state =evt.target.value
                        setLocation(copy)
                    }
                }>{location.state}</textarea>
        </div>
        <div className="form-group">
            <label htmlFor="zip">Zip Code:</label>
            <textarea
                
                type="number"
                className="form-control"
                value={location.zip}
                onChange={
                    (evt) => {
                        const copy = {...location}
                        copy.zip =evt.target.value
                        setLocation(copy)
                    }
                }>{location.zip}</textarea>
        </div>
    </fieldset>
    <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="createsavebutton">
        Save/Create
    </button>
    <div className="homebutton" onClick={() => navigate("/home")}>Home</div>
</form>
</>
</div>
}