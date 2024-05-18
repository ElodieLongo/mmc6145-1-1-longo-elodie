import styles from '../styles/contact.module.css'

export default function Contact() {
  return (
    <main>
      <h1 className={styles.title}>Let's get in touch!</h1>
      
      <div className={styles.contactLinks}>
          <a href="https://www.linkedin.com/in/elodielongo/">Connect on LinkedInd</a> 
          <a href="https://github.com/ElodieLongo">Find me on GitHub</a> 
      </div>
    </main>
  )
}