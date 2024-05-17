import { Link } from "react-router-dom"
import Project1 from '../assets/Project1.jpg'
import styles from '../styles/project.module.css'


export default function Project() {
    return (
        <div className="project">
            <a href="https://www.behance.net/gallery/190284277/Plant-illustrations-definition-card-FAO">Illustration</a>
    <img src={Project1} alt="Project1" width="300" height="auto"/>
    </div>
    )
    }