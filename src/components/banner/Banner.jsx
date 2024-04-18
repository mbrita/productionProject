import React, { useState, useEffect } from "react"
import classes from "./Banner.module.scss"
import classNames from "classnames"
import Stroke from "../../assets/banner/Stroke.svg"

const bannerText = [
  {
    name: "Книжный клуб на английском языке «Long Story Short",
    body: "У нас уже более 1000 материалов по различным темам",
  },
  {
    name: "Дискуссионный клуб «Экологичное общение»",
    body: "У нас уже более 1000 материалов по различным темам",
  },
  {
    name: "Клуб общения на английском языке «Speaking club with Nastushka»",
    body: "У нас уже более 1000 материалов по различным темам",
  },
  {
    name: "Разговорный клуб на чувашском языке «Сӑмахкун»",
    body: "У нас уже более 1000 материалов по различным темам",
  },
]

function Banner() {
  const [activeText, setActiveText] = useState(0)
  const [post, setPost] = useState(bannerText[0])

  function changeText() {
    if (activeText < bannerText.length - 1) {
      setActiveText(activeText + 1)
    } else {
      setActiveText(0)
    }
  }

  useEffect(() => {
    setPost(bannerText[activeText])
  }, [activeText])

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.banner}>
        <div className={classes.bannerText}>
          <p className={classes.bannerTitle}>{post.name}</p>
          <p>{post.body}</p>
        </div>
        <button onClick={changeText} className={classes.bannerBtn}>
          <img src={Stroke} alt="" />
        </button>
      </div>
      <div className={classes.stripes}>
        <div
          className={classNames(
            classes.stripe,
            activeText != 0 && classes.stripePassive
          )}
        ></div>
        <div
          className={classNames(
            classes.stripe,
            activeText != 1 && classes.stripePassive
          )}
        ></div>
        <div
          className={classNames(
            classes.stripe,
            activeText != 2 && classes.stripePassive
          )}
        ></div>
        <div
          className={classNames(
            classes.stripe,
            activeText != 3 && classes.stripePassive
          )}
        ></div>
      </div>
    </div>
  )
}
export default Banner
