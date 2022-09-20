import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import HeadAndTail from "./components/HeadAndTail/HeadAndTail"
import { useNavigate } from "react-router-dom"

export default function RoutesComponent() {

    let history = useNavigate();

    // fn to redirect
    const redirect = () => {
        history("/")
    }
    
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
                path="/about"
                exact
                element={<About redirect={redirect} />}
            />
            <Route
                path="/headtail"
                exact
                element={<HeadAndTail redirect={redirect} />}
            />
        </Routes>
    )
}
