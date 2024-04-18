import React from "react"
import classes from "./EarlyActionCards.module.scss"
import Lesson from "../../assets/earlyActionCards/lesson.svg"
import Video from "../../assets/earlyActionCards/video.svg"
import Audio from "../../assets/earlyActionCards/audio.svg"
import Test from "../../assets/earlyActionCards/test.svg"
import Simulator from "../../assets/earlyActionCards/simulator.svg"
import Interactive from "../../assets/earlyActionCards/interactive.svg"
import Topic from "../../assets/earlyActionCards/topic.svg"
import Games from "../../assets/earlyActionCards/games.svg"
import Gallery from "../../assets/earlyActionCards/gallery.svg"
import Hat from "../../assets/earlyActionCards/hat.svg"
import Star from "../../assets/earlyActionCards/favorite.svg"
import Stroke from "../../assets/earlyActionCards/stroke.svg"
const earlyActionCards = [
  {
    format: "Аудио",
    img: Audio,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#376B75",
  },
  {
    format: "Тест",
    img: Test,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#5990AF",
  },
  {
    format: "Урок",
    img: Lesson,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#DCCAFF",
  },
  {
    format: "Текст",
    img: Topic,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#8B83D0",
  },
  {
    format: "Аудио",
    img: Audio,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#4A4FA7",
  },
  {
    format: "Видео",
    img: Video,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#376B75",
  },
  {
    format: "Галерея",
    img: Gallery,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#5990AF",
  },
  {
    format: "Текст",
    img: Topic,
    tags: ["Литература", "9 класс"],
    title: "Лекции по русской литературе",
    author: "Иванов Н.C",
    width: 1,
    color: "#DCCAFF",
  },
]

function EarlyActionCards() {
  return (
    <div className={classes.earlyActionCardsWrapper}>
      <div className={classes.earlyActionCardsHeader}>
        <h1 className={classes.earlyActionCardsTitle}>Продолжить просмотр</h1>
        <button className={classes.earlyActionCardsBtn}>
          Смотреть всё
          <img className={classes.earlyActionCardsBtnImg} src={Stroke} alt="" />
        </button>
      </div>
      <div className={classes.earlyActionCards}>
        {earlyActionCards.map((card) => (
          <div className={classes.layout}>
            <div
              className={classes.colorLine}
              style={{ backgroundColor: card.color }}
            ></div>
            <div className={classes.cardHeader}>
              <div className={classes.cardType}>
                <img src={card.img} className={classes.cardImg} />
                <p>{card.format}</p>
              </div>

              <div className={classes.cardLogo}>
                <button className={classes.cardIcon}>
                  <img src={Hat} className={classes.cardImg} />
                </button>
                <button className={classes.cardIcon}>
                  <img src={Star} />
                </button>
              </div>
            </div>
            <div className={classes.CreateLine}></div>

            <div className={classes.cardTags}>
              {card.tags.map((tag) => (
                <div className={classes.cardTgs}>{tag}</div>
              ))}
            </div>
            <h1 className={classes.CardTitle}>{card.title}</h1>
            <p className={classes.CardAuthor}>{card.author}</p>
            <button className={classes.Cardbtn}>Продолжить просмотр</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default EarlyActionCards
