import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./MainComponent.css"
import { StopEvent } from "./StopEvent/StopEvent"
import { Locations } from "./StopLocations/Locations"
import { Stops } from "./StopLists/AllStops"
import { CreateLocation } from "./StopLocations/LocationsCreate"
import { StopsPerLocation } from "./StopLists/StopsPerLocation"
import { EditLocation } from "./StopLocations/LocationEdit"
import { StopScheduleSetup } from "./StopReport/MainStopSchedule"


export const Layout = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/createstop" element={< StopEvent />} />
		<Route path="/stopschedule" element={< StopScheduleSetup />} />
		<Route path="/trainlocations" element={< Locations />} />
		<Route path="/allstops" element={< Stops />} />
		<Route path="/editlocation/:locationId" element={ < EditLocation />} />
		<Route path="/createlocation" element={< CreateLocation/>} />
		<Route path="/stops/location/:locationId" element={<StopsPerLocation/>} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

