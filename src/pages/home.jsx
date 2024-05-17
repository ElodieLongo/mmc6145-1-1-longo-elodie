import styles from '../styles/home.module.css'
import Project1 from '../assets/Project1.jpg'


export default function Home() {
  return (
  
    <main>
      <h1 className={styles.title}>I'm the home page!</h1>

      <img src={Project1} alt="Project1" width="300" height="auto"/>
    </main>
    
  )
}