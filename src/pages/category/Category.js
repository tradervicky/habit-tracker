import React from "react";
import styles from "./Category.module.css";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
function Category() {
  const [catData, setCatData] = useState([]);
  const [catname, setCatname] = useState("");
  const [iconName, setIconName] = useState("");

  const firebse = useFirebase();

  // category created
  const CreateCategory = ()=>{
    firebse.CreateCategory(catname, iconName)

  }
  return (
    <div className={styles.MainCategory}>
      <div className={styles.mobile}>
        <div className={styles.UpperMobile}>
          <h3>Habits Category</h3>
          <div className={styles.SelectorCat}>
            <select name="" id="">
              <option value="">select Category Icon</option>
              <option value="IconName">IconName</option>
            </select>
          </div>
          <div className={styles.InputCat}>
            <input type="text" placeholder="Enter Category name" 
            onChange={(e)=>setCatname(e.target.value)}
            />
            <IoCreateOutline size={32} style={{ cursor: "pointer" }} onClick={CreateCategory}/>
          </div>
        </div>
        <div className={styles.middleMobile}>
          <p>Transform Your Habits</p>
        </div>
        
          <div className={styles.AddedCat}>
            <div className={styles.displayCat}>
              <p>Meditation</p>
              <div className={styles.disPlayIcon}>
                <IoIosCreate
                  size={24}
                  style={{ color: "#eb951b", cursor: "pointer" }}
                />
                <MdDeleteOutline
                  size={24}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Category;
