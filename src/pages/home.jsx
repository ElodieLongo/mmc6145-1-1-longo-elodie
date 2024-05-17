import styles from '../styles/home.module.css';
import Project from '../components/project';


export default function Home() {
  return (
  
    <main>
      <h1 className={styles.title}>I'm the home page!</h1>
      <Project/>
      <Project/>
      

    </main>
    
  )
}

