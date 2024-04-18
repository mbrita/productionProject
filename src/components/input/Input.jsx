import React from "react"
import classes from "./Input.module.scss"

function Input() {
  return (
    <div className={classes.inputWrapper}>
      <input
        className={classes.input}
        type="text"
        placeholder="Введите запрос"
      />
      <button className={classes.inputBtn}>Искать</button>
    </div>
  )
}
export default Input
