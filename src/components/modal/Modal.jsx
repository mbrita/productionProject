import React, { useState } from "react"
import classes from "./Modal.module.scss"

function Modal({ children, visible, setVisible }) {
  const rootClasses = [classes.modalBody]
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={classes.modalContent}>
        <img src="" alt="" />

        <input className={classes.modalInput} type="text" placeholder="Имя" />
        <input
          className={classes.modalInput}
          type="text"
          placeholder="Фамилия"
        />
        <input
          className={classes.modalInput}
          type="text"
          placeholder="Ваша почта"
        />
        <textarea
          className={classes.modalText}
          placeholder="Опишите Ваше проблему"
        ></textarea>
        <button className={classes.modalBtn} onClick={() => setVisible(false)}>
          Отправить
        </button>
      </div>
    </div>
  )
}

export default Modal
