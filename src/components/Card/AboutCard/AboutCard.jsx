import styles from './AboutCard.module.scss'
import closeIcon from '../../../assets/icons/closeIcon.svg'

function AboutCard({visible, closeCard}){
    return(
        <div className={`${styles.card} ${visible ? styles.visible : ''}`}>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.header}>About Me</h2>
                    <img className={styles.closeIcon} src={closeIcon} onClick={closeCard}/>
                </div>
                
                <p className={styles.paragraph}>
                Hello! <br/><br/>
                I’m Justin Lee, a former Fraud Analyst turned Software Engineer with a Bachelor’s degree in Criminology and Biology from the University of Toronto. During my time in the banking industry, I developed a strong analytical mindset and problem-solving skills, working to identify and mitigate fraud efficiently. My curiosity about how the applications I relied on daily were designed and how they could be improved sparked a deep interest in software engineering. <br/><br/>

                This passion led me to pursue a diploma in Software Engineering at BrainStation, where I gained hands-on experience in agile development, full-stack project creation, and real-world problem-solving. Through collaborative projects and innovative challenges, I discovered how to translate ideas into functional, user-focused solutions, solidifying my commitment to this exciting field.

                </p>
            </div>
            
        </div>
    )
}

export default AboutCard