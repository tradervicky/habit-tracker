import React from "react";
import styles from "./Category.module.css";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { icons } from "../../data/icons/icons";
import { useEffect } from "react";
function Category() {
  const [catData, setCatData] = useState([]);
  const [catname, setCatname] = useState("");
  const { readAllCategories } = useFirebase();
  const [selectedIcon, setSelectedIcon] = useState("");

  const firebse = useFirebase();

  // category created
  const CreateCategory = async () => {
    await firebse.CreateCategory(catname, selectedIcon);
    const categories = await readAllCategories();
    setCatData(categories);
  };
  const handleIconChange = (e) => {
    setSelectedIcon(e.target.value);
  };

  // read category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await readAllCategories();
        setCatData(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData(catData);
  }, [readAllCategories , catname, selectedIcon]);
 
  return (
    <div className={styles.MainCategory}>
      <div className={styles.mobile}>
        <div className={styles.UpperMobile}>
          <h3>Habits Category</h3>
          <div className={styles.SelectorCat}>
          <select name="icon" value={selectedIcon} onChange={handleIconChange}>
          <option value="">Select Category Icon</option>
          {icons.map((data, index) => (
            <option value={data} key={index}>
              {data}
            </option>
          ))}
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
        {catData.map((data, index)=>
          <div className={styles.AddedCat} key={index}>
            <div className={styles.displayCat}>
              <p>{data.name}</p>
              
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
          </div>)}
        
      </div>
    </div>
  );
}

export default Category;
