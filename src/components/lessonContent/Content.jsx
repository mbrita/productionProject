import React, { useState } from "react"
import { Link } from "react-router-dom"
import classes from "./Content.module.scss"

const tags = [
  "Почвенное питание",
  "минеральное питание",
  "корнеплод",
  "корневыеишки",
  "севооборот",
  "корневое давление",
  "осмос",
]
const words = [
  "Информация",
  "Объект",
  "Множество",
  "Система",
  "Давление",
  "Пространство",
]

function Content() {
  const [active, setActive] = useState(false)

  const color = (stages, title = false) => {
    switch (stages) {
      case "completed":
        return title ? classes.completedStage : classes.completedTopic
      case "active":
        return title ? classes.activeStage : classes.activeTopic
      default:
        return title ? classes.unstartedStage : classes.unstartedTopic
    }
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerTitle}>
        <p className={classes.title}>Краткая информация об уроке</p>
        <p className={classes.logoFgos}>
          Соответствует обновленному ФГОС
          <img className={classes.imgFgos} src="" alt="" />
        </p>
      </div>

      <p className={classes.subTitle}>Тип урока</p>
      <p className={classes.logo}>Комбинированный урок</p>

      <div>
        <h1 className={classes.subTitle}>Ключевые слова</h1>
        <div className={classes.contentTags}>
          {tags.map((el) => (
            <div className={classes.contentTag}> {el}</div>
          ))}
        </div>
      </div>
      <div>
        <h1 className={classes.subTitle}>
          Базовые понятия, единые для школьного образования{" "}
        </h1>
        <div className={classes.contentTags}>
          {words.map((el, index) => (
            <div className={classes.contentTag} key={index}>
              {el}
              <img className={classes.contentImg} src="" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
