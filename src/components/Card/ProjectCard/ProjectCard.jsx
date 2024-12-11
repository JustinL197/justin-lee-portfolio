import styles from './ProjectCard.module.scss'
import closeIcon from '../../../assets/icons/closeIcon.svg'

function ProjectCard({visible, closeCard}){
    return(
        <div className={`${styles.card} ${visible ? styles.visible : ''}`}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>My Projects</h2>
                <img className={styles.closeIcon} src={closeIcon} onClick={closeCard}/>
            </div>
        </div>
    )
}

export default ProjectCard