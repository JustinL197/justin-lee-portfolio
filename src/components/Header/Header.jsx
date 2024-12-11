import styles from './Header.module.scss'

function Header({fade}){
    console.log('Header fade state:', fade); // Debug fade prop
    return(
        <div className={`${styles.header} ${fade ? styles.fadeOut : ''}`}>
            <hr className={styles.topline}/>
            <div className={styles.container}>
                <h1 className={styles.name}>J u s t i n &nbsp; L e e</h1>
                <h3 className={styles.description}> Software Engineer</h3>
            </div>
            <hr className={styles.bottomline}/>
        </div>
    )
}

export default Header