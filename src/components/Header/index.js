import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import styles from "./header.module.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const Header = () => {
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const closeSignupModal = () => setOpenSignupModal(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column"
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup =  (e) => {
    e.preventDefault();
    if(email && name && birthday && pass) {
      let userData = {
        email, name, birthday, pass
      }
      localStorage.setItem("userDetails", JSON.stringify(userData));
      closeSignupModal()
    } else {
      alert("Fill all details"); 
    }
  }

  return (
    <>
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
          <img src="https://file.rendit.io/n/5WctvmPBEuk75QilBjx4.svg" alt="searchLogo" />
        </div>
        <div className={styles.signinAndSellBtn}>
          <button className={styles.sellBtn}>Sell</button>
          <button className={styles.signInBtn} onClick={() => setOpenSignupModal(true)}>Sign in</button>  
        </div>
      </div>
    </div>

      <Modal
        open={openSignupModal}
        onClose={closeSignupModal}
      >
        <Box sx={style}>
          <label htmlFor="">Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="">Name: </label>
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">Birthday: </label>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          <label htmlFor="">Password: </label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
          <button onClick={handleSignup}>Signup</button>
        </Box>
      </Modal>
    </>
  )
}

export default Header;