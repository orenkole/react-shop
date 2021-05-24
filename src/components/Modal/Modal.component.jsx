import React from "react";
import styles from "./modal.module.scss";

const Modal = (props) => {

  const {closeModalHandler, onApprove, text} = props;
  
  return (
  <div
    className={styles["backdrop"]}      
    onClick={() => {closeModalHandler()}}
  >
    <div className={styles.modal}
        onClick={e => {e.stopPropagation()}}
    >        
      <div className={styles["modal-header"]}>
        <span>{text}</span>
        <button
          className={styles.closeModalBtn}
          onClick={() => {closeModalHandler()}}
        >✕</button>
      </div>
      <div className={styles["modal-actions"]}>
        <button onClick={() => {
            onApprove();
            closeModalHandler();
        }}>ok</button>
        <button onClick={() => {
            closeModalHandler()
        }}>cancel</button>
      </div>
    </div>
  </div>)
}

export {Modal}