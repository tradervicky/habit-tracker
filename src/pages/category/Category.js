import React from "react";
import styles from "./Category.module.css";
import { IoCreateOutline } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
function Category() {
  return (
    <div className={styles.MainCategory}>
      <div className={styles.mobile}>
        <div className={styles.UpperMobile}>
          <h3>Habits Category</h3>
          <div className={styles.SelectorCat}>
            <select name="" id="">
              <option value="">select Category Icon</option>

              <option value="">select Category</option>

              <option value="">select Category</option>
            </select>
          </div>
          <div className={styles.InputCat}>
            <input type="text" placeholder="Enter Category name" />
            <IoCreateOutline size={32} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className={styles.middleMobile}>
          <p>Transform Your Habits</p>
        </div>
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
  );
}

export default Category;
