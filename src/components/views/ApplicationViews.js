import "./ApplicationViews.css" 
import { Link, useNavigate } from "react-router-dom"





export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<div className="home--main">
		<h1 className="title--main">StopSchedule</h1>
		<div>
			<Link className="link" to="/createstop">
			<button className="home--button">Create Stop Event</button>
			</Link>
			<Link className="link" to="/stopschedule">
			<button className="home--button">StopSchedule</button>
			</Link>
			<Link className="link" to="/trainlocations">
			<button className="home--button">TrainLocations</button>
			</Link>
			<a className="home--button" href="https://drive.google.com/file/d/1VWR1XJY9lw9PZS4qi2vJi2uIbW_SUcoj/view?usp=sharing" target="blank">Help Guide</a>
			<br></br>
			
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			
			<Link className="allstopshidden" to="/allstops">
			<button className="hiddenbutton">ALLSTOPS</button>
			</Link>
			
		</div>
		</div>
	</>
}

