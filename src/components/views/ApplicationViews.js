import "./ApplicationViews.css" 
import { Link, useNavigate } from "react-router-dom"





export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<div className="home--main">
		<h1 className="title--main">StopSchedule</h1>
		<div>Ah hell a god damn train</div>
		<div>
			<Link className="home--button" to="/createstop">
			<button className="home--button"  >Create Stop Event</button>
			</Link>
			<Link classname="home--button" to="/stopschedule">
			<button className="home--button">StopSchedule</button>
			</Link>
			<Link classname="home--button" to="/trainlocations">
			<button className="home--button">TrainLocations</button>
			</Link>
		</div>
		</div>
	</>
}

