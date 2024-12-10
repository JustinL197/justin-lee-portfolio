import styles from './Header.module.scss'

function Header(){
    return(
        <div className={styles.header}>
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