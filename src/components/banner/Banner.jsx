import React, { useState, useEffect } from "react"
import classes from "./Banner.module.scss"
import classNames from "classnames"
import Stroke from "../../assets/banner/Stroke.svg"

const bannerText = [
  {
    name: "Огромный выбор учебного материал",
    body: "У нас уже более 100 000 материалов по различным предметам",
  },
  {
    name: "Riesige Auswahl an Lehrmaterial",
    body: "Wir verfügen bereits über mehr als 100.000 Materialien zu verschiedenen Themen",
  },
  {
    name: "Vaste sélection de matériel pédagogique",
    body: " Vaste sélection de matériel pédagogique",
  },
  {
    name: "ଶିକ୍ଷାଗତ ସାମଗ୍ରୀର ବୃହତ ଚୟନ |",
    body: "ଶିକ୍ଷାଗତ ସାମଗ୍ରୀର ବ୍ୟାପକ ଚୟନ |",
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
          <p>{post.name}</p>
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
