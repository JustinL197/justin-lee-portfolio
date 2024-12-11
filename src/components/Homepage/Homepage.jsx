import styles from './Homepage.module.scss'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import { useState, useEffect } from 'react'

import AboutCard from '../Card/AboutCard/AboutCard'
import ProjectCard from '../Card/ProjectCard/ProjectCard'
import SkillsCard from '../Card/SkillsCard/SkillsCard'
import ContactCard from '../Card/ContactCard/ContactCard'


function Homepage(){
    const [activeCard, setActiveCard] = useState('null')

    const selectCard = (card) => {
        console.log('Selected Card:', card)
        setActiveCard(card)
    }

    const closeCard = () => {
        setActiveCard('null')
    }

    useEffect(() => {
        console.log('activeCard changed to:', activeCard);
    }, [activeCard]); // This runs whenever activeCard changes

    return(
        <div className={styles.homepage}>
            <Header fade={activeCard !== 'null'}/>
            <Navbar selectCard={selectCard} fade={activeCard !== 'null'}/>

            <AboutCard visible={activeCard === 'about'} closeCard={closeCard} />
            <ProjectCard visible={activeCard === 'project'} closeCard={closeCard} />
            <SkillsCard visible={activeCard === 'skills'} closeCard={closeCard}/>
            <ContactCard visible={activeCard === 'contact'} closeCard={closeCard}/>
        </div>
        
    )
}

export default Homepage