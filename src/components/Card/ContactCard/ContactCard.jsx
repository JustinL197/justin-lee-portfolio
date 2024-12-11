import styles from './ContactCard.module.scss'
import closeIcon from '../../../assets/icons/closeIcon.svg'

function ContactCard({visible, closeCard}){
    return(
        <div className={`${styles.card} ${visible ? styles.visible : ''}`}>
            <div className={styles.headerContainer}>
                <h2 className={styles.header}>Contact Me!</h2>
                <img className={styles.closeIcon} src={closeIcon} onClick={closeCard}/>
            </div>
        </div>
    )
}

export default ContactCard