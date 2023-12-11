import React from 'react'
import styles from './Footer.module.css'
import { AiOutlineHome } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { BsDatabaseCheck } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
function Footer() {
  return (
    <div className={styles.MainFooter}>
        <div className={styles.Icons}>
            <AiOutlineHome/>
            <CgPlayListAdd/>
            <BsDatabaseCheck/>
            <ImProfile/>
        </div>
        
    </div>
  )
}

export default Footer