import { Link } from "react-router-dom"

import { FaLightbulb, FaExternalLinkSquareAlt } from "react-icons/fa"
import "./home.css"
export default function Home() {
    return (
        <div className="homeContainer">
            <div className="homeLink">
                <Link to="/about">
                    <FaLightbulb />
                </Link>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>

            <div className="homeLink">
                <Link to="/headtail">
                    <FaExternalLinkSquareAlt />
                </Link>
                <div>
                    <Link to="/headtail">Head Tail</Link>
                </div>
            </div>
        </div>
    )
}
