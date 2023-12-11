import React from "react";
import styles from "./Habit.module.css";
import { IoMdLogOut } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";

function Habit() {
  const [uid, setUid] =useState("")
  const imageName = 'bbq.svg';
  const imagePath = `/svg/${imageName}`;
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
const firebase = useFirebase();

  const getCurrentMonthDates = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const dates = [];

    for (let day = firstDayOfMonth; day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
      dates.push(new Date(day));
    }

    return dates;
  };
// read category
const fetchData = ()=>{
  firebase.readAllCategories();
}
useEffect(()=>{
  fetchData()
},[])



 useEffect(()=>{
  setUid(localStorage.getItem('uid'));
  const currentMonthDates = getCurrentMonthDates();
    setDates(currentMonthDates);
 },[])

 const handleDateClick = (date) => {
  setSelectedDate(date);
};



 
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
            {dates.map((date, index) => (
                <tr key={index}>
                    <td
                    className={`${styles.cell} ${selectedDate === date.dayOfMonth ? styles.selected : ''}`}
                    onClick={()=>handleDateClick({date})}                    
                    >{date.toDateString()}</td>   
                </tr>
                ))}
            </table>
        </div>
        
        <div className={styles.displayCat}>
          <div className={styles.pngText}>
          <img src={imagePath} alt="sexy" style={{width:"30px"}} />
          <p>  Meditation</p>
          </div>
          <div className={styles.disPlayIcon}>
          <input type="radio" />
          </div>
        </div>
       
      
      </div>
    </div>
  );
}

export default Habit;
