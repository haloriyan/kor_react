import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Exhibition from "./KMTE";
import BusinessMeeting from "./KMTM";
import Program from "./Program";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/kmte" Component={Exhibition} />
				<Route path="/kmtm" Component={BusinessMeeting} />
				<Route path="/program" Component={Program} />
				<Route path="/contact" Component={Contact} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;