import { BiArrowBack } from "react-icons/bi"
import "./about.css"
export default function About({ redirect }) {
    return (
        <div className="aboutContainer">
            <div className="backContainer" onClick={redirect}>
                <BiArrowBack /> <span>Back</span>
            </div>
            <div className="aboutContent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                corrupti, a recusandae, atque numquam ad perspiciatis, quae vel
                laborum eum nostrum non natus error voluptates ipsa nihil
                inventore? Ipsam, sunt?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ullam sint excepturi, tenetur saepe similique
                tempora doloremque ut neque? Ullam mollitia doloribus eveniet
                fugit laudantium voluptate deleniti adipisci soluta architecto
                incidunt!
            </div>
        </div>
    )
}
