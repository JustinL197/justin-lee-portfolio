import styles from './Homepage.module.scss'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Homepage(){
    return(
        <div className={styles.homepage}>
            <Header />
            <Navbar />
        </div>
    )
}

export default Homepage