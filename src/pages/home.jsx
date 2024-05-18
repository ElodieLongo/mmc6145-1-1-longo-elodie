import styles from '../styles/home.module.css';
import Project from '../components/project';
import TopProject from '../components/project';


export default function Home() {
  return (
  
    <main>
      <h1 className={styles.title}>
      Check out my latest projects<br />&darr; </h1>
      <TopProject/>
      <Project className={styles.project}/>
    
    </main>
    
  )
}

