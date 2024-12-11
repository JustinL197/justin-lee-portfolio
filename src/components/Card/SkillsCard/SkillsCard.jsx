import styles from './SkillsCard.module.scss'
import closeIcon from '../../../assets/icons/closeIcon.svg'

function SkillsCard({visible, closeCard}){
    return(
        <div className={`${styles.card} ${visible ? styles.visible : ''}`}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>My Skills</h2>
                <img className={styles.closeIcon} src={closeIcon} onClick={closeCard}/>
            </div>
        </div>
    )
}

export default SkillsCard