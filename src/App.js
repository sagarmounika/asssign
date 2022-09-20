import "./App.css"
import RoutesComponent from "./Routes"
import { BrowserRouter as Router } from "react-router-dom"

export default function App() {
    return (
        <div className="App">
            <Router>
                <RoutesComponent />
            </Router>
        </div>
    )
}
