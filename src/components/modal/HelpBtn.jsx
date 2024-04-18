import React, { useState } from "react"
import classes from "./HelpBtn.module.scss"
import Question from "../../assets/modal/question.svg"

function HelpBtn({ setModal, modal }) {
  return (
    <button onClick={() => setModal(!modal)} className={classes.helpBtn}>
      <img src={Question} alt="" />
      Помощь
    </button>
  )
}

export default HelpBtn
