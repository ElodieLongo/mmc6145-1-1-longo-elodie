import { Link } from "react-router-dom"
import Project4 from '../assets/Project4.jpg'
import Project3 from '../assets/Project3.jpg'
import styles from '../styles/project.module.css'


export default function Project() {
    return (
    <div className={styles.projectContainer}>
        <div className={styles.project}>
            <a href="https://www.behance.net/gallery/156702909/River-fragmentation" className={styles.cardLink}>
                <div className={styles.imageContainer}>
                    <img src={Project3} alt="Project3" className={styles.projectImg} />
                    <div className={styles.overlay}>
                        <p className={styles.overlayText}>Infographic on river fragmentation</p>
                    </div>
                </div> 
            </a>
        </div>
        <div className={styles.project}>
            <a href="https://www.behance.net/gallery/128560213/Food-Loss-and-Waste-2021-Carousel-post-FAO" className={styles.cardLink}>
                <div className={styles.imageContainer}>
                    <img src={Project4} alt="Project4" className={styles.projectImg} />
                    <div className={styles.overlay}>
                        <p className={styles.overlayText}>Food Loss and Waste Carousel</p>
                    </div>
                </div> 
            </a>
        </div>
    </div>
    )
    }