import { Link } from "react-router-dom"
import Project from './project';
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import styles from '../styles/project.module.css'


export default function TopProject() {
    return (
    <div className={styles.TopProjectContainer}>
        <div className={styles.project}>
            <a href="https://www.behance.net/gallery/190284277/Plant-illustrations-definition-card-FAO" className={styles.cardLink}>
                <div className={styles.imageContainer}>
                    <img src={Project1} alt="Project1" className={styles.projectImg} />
                    <div className={styles.overlay}>
                        <p className={styles.overlayText}>The Wild Dozen Illustration</p>
                    </div>
                </div> 
            </a>
        </div>
        <div className={styles.project}>
            <a href="https://www.behance.net/gallery/177881225/In-Numbers-2023-Infovisual-series-concept-FAO" className={styles.cardLink}>
                <div className={styles.imageContainer}>
                    <img src={Project2} alt="Project2" className={styles.projectImg} />
                    <div className={styles.overlay}>
                        <p className={styles.overlayText}>In Numbers series: Drought</p>
                    </div>
                </div> 
            </a>
        </div>
    </div>
    )
    }