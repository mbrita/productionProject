import React, { useState } from "react"
import classes from "./Filter.module.scss"
import classNames from "classnames"
import { Link } from "react-router-dom"
import Lesson from "../../assets/filter/lesson.svg"
import Video from "../../assets/filter/video.svg"
import Audio from "../../assets/filter/audio.svg"
import Test from "../../assets/filter/test.svg"
import Similator from "../../assets/filter/simulator.svg"
import Interactive from "../../assets/filter/interactive.svg"
import Topic from "../../assets/filter/topic.svg"
import Games from "../../assets/filter/games.svg"
import Gallery from "../../assets/filter/gallery.svg"
import Cancel from "../../assets/filter/cancel.svg"

const icons = [
  {
    img: Lesson,
    title: "Урок",
  },
  {
    img: Video,
    title: "Видео",
  },
  {
    img: Audio,
    title: "Аудио",
  },
  {
    img: Test,
    title: "Тест",
  },
  {
    img: Similator,
    title: "Симулятор",
  },
  {
    img: Interactive,
    title: "Интерактив",
  },
  {
    img: Topic,
    title: "Текст",
  },
  {
    img: Games,
    title: "Игры",
  },
  {
    img: Gallery,
    title: "Галерея",
  },
]

function Filter() {
  const [active, setActive] = useState([])

  const ChangeBorder = (i) => {
    if (!active.includes(i)) {
      setActive((prev) => [...prev, i])
    } else {
      setActive((prev) => prev.filter((el) => el !== i))
    }
  }
  return (
    <div className={classes.icons}>
      {icons.map((icon, index) => (
        <div
          onClick={() => ChangeBorder(index)}
          className={classNames(
            classes.icon,
            active.includes(index) && classes.iconActive
          )}
          key={index}
        >
          <img className={classes.iconImg} src={icon.img} alt="" />
          {icon.title}
        </div>
      ))}
      {/* {active.length > 0 && (
        <div className={classes.cancel} onClick={() => setActive([])}>
          <img src={Cancel} alt="" /> Отменить выбор
        </div>
      )} */}
    </div>
  )
}
export default Filter
