import React from "react";
import styles from "./Habit.module.css";
import { IoMdLogOut } from "react-icons/io";

function Habit() {
  return (
    <div className={styles.MainHabit}>
      <div className={styles.AllDetail}>
        <div className={styles.userDetail}>
          <div className={styles.Username}>
            <span>Welcome</span>
            <span>Vicky</span>
          </div>
          <IoMdLogOut size={32} style={{color:"#dc3545"}}/>
        </div>
        <div className={styles.DateFetch}>
            <table>
                <tr>
                    <td>11</td>
                    
                </tr>
            </table>
        </div>
        
        <div className={styles.displayCat}>
          <p>Meditation</p>
          <div className={styles.disPlayIcon}>
          <input type="radio" />
          </div>
        </div>
       
      
      </div>
    </div>
  );
}

export default Habit;
