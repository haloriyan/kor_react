import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Exhibition from "./KMTE";
import BusinessMeeting from "./KMTM";
import Program from "./Program";
import Floorplan from "./kmte/Floorplan";
import Rundown from "./kmte/Rundown";
import KMTMRundown from "./kmtm/Rundown";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/kmte" Component={Exhibition} />
				<Route path="/kmte/floorplan" Component={Floorplan} />
				<Route path="/kmte/rundown" Component={Rundown} />
				<Route path="/kmtm" Component={BusinessMeeting} />
				<Route path="/kmtm/rundown" Component={KMTMRundown} />
				<Route path="/program" Component={Program} />
				<Route path="/kmte/program" Component={Program} />
				<Route path="/contact" Component={Contact} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;