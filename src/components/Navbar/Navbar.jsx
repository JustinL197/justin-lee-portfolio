import styles from './Navbar.module.scss'

function Navbar({selectCard, fade}){
    return(
        <div className={`${styles.navbar} ${fade ? styles.fadeOut : ''}`}>
            <div className={styles.container}>
                <h2 className={styles.item} onClick={() => selectCard('about')}>about</h2>
                <h2 className={styles.item} onClick={() => selectCard('project')}>projects</h2>
                <h2 className={styles.item} onClick={() => selectCard('skills')}>skills</h2>
                <h2 className={styles.item} onClick={() => selectCard('contact')}>contact</h2>
            </div>
        </div>
    )
}

export default Navbar