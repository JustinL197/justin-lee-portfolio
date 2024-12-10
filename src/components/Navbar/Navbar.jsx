import styles from './Navbar.module.scss'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.container}>
                <h2 className={styles.item}>about</h2>
                <h2 className={styles.item}>project</h2>
                <h2 className={styles.item}>skills</h2>
                <h2 className={styles.item}>contact</h2>
            </div>
        </div>
    )
}

export default Navbar