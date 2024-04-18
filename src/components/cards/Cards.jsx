import React, { useState } from "react"
import classes from "./Cards.module.scss"
import classNames from "classnames"
import { Link } from "react-router-dom"
import Physics from "../../assets/card/physics.png"
import Russian from "../../assets/card/russian.png"
import Chemistry from "../../assets/card/chemistry.png"
import History from "../../assets/card/history.png"
import Music from "../../assets/card/music.png"
import Literture from "../../assets/card/literture.png"
import Stroke from "../../assets/card/stroke.svg"
const cards = [
  {
    title: "Физика",
    backgroundColor: "#89AC76	",
    img: Physics,
    links: [
      { title: "Закон Архимеда", link: "/lesson" },
      { title: "Виды движения", link: "/" },
      { title: "Ускоронение", link: "/" },
    ],
  },
  {
    title: "Русский язык",
    backgroundColor: "#62639B	",
    img: Russian,
    links: [
      { title: "Диалог. Виды диалога", link: "/" },
      { title: "Стили текста", link: "/" },
      { title: "Фразеология", link: "/" },
    ],
  },
  {
    title: "Химия",
    backgroundColor: "#72BBCA",
    img: Chemistry,
    links: [
      { title: "Металлы в природе", link: "/" },
      { title: "Состав воздуха", link: "/" },
      { title: "Применение кислорода", link: "/" },
    ],
  },
  {
    title: "Всеобщая история",
    backgroundColor: "#F07A55",
    img: History,
    links: [
      { title: "Мир в начале 20 века", link: "/" },
      { title: "Первая мировая война", link: "/" },
      { title: "Итоги первой мировой войны", link: "/" },
    ],
  },
]

const newCards = [
  {
    title: "Литература",
    backgroundColor: "#819672",
    img: Literture,
    links: [
      { title: "Из чего рождается антиутопия", link: "/" },
      {
        title: "Проблема абсолютной правды",
        link: "/",
      },
      {
        title: "Кризис личности и идентичности",
        link: "/",
      },
    ],
  },
  {
    title: "Музыка",
    img: Music,
    backgroundColor: "#76A3C4",
    links: [
      { title: "Музыка - оружие в борьбе за мир", link: "/" },
      { title: "Музыкальный образ России", link: "/" },
      { title: "Музыка 21 века»", link: "/" },
    ],
  },
]

function Cards() {
  const [activeCards, setActiveCards] = useState(cards)
  const btns = ["7 класс", "8 класс", " 9 класс"]
  const [activeBtn, setActiveBtn] = useState(null)

  const ChangeBtnColor = (i) => {
    setActiveBtn(i === activeBtn ? null : i)
  }
  console.log(activeBtn)
  function showAll() {
    setActiveCards(cards.push(...newCards))
  }
  return (
    <div className={classes.cardsWrapper}>
      <h1>Популярные темы уроков</h1>
      <div className={classes.cards}>
        {cards.map((el, index) => (
          <div
            key={index}
            className={classes.card}
            style={{ backgroundColor: el.backgroundColor }}
          >
            <div className={classes.cardWrapper}>
              <div>
                <div className={classes.cardBtns}>
                  {btns.map((el, i) => (
                    <button
                      onClick={() => ChangeBtnColor(i)}
                      className={classNames(
                        classes.cardBtn,
                        activeBtn === i && classes.cardBtnActive
                      )}
                    >
                      {el}
                    </button>
                  ))}
                </div>
                <h1>{el.title}</h1>
                <div className={classes.links}>
                  {el.links.map((link) => (
                    <Link className={classes.link} to={link.link}>
                      {link.title}
                      <img className={classes.linkImg} src={Stroke} alt="" />
                    </Link>
                  ))}
                </div>
              </div>
              <img className={classes.cardImg} src={el.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <button onClick={showAll} className={classes.cardsBtn}>
        Показать ещё {newCards.length}
      </button>
    </div>
  )
}
export default Cards
