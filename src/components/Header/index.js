import React from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const index = () => {
  return (
    <div className={styles.mainHead}>
      <div className={styles.leftSide}>
        <div className="logoDiv">
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.category}>
          <span>All</span>
          <span>Whiskey</span>
          <span>Wine</span>
          <span>Champagne</span>
          <span>Spirits & Loquers</span>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.searchBtnDiv}>
          <button>search</button>
        </div>
        <div className={styles.signinAndSellBtn}>
          <button className={styles.sellBtn}>Sell</button>
          <button className={styles.signInBtn}>Sign in</button>  
        </div>
      </div>
    </div>
  )
}

export default index