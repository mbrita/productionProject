import React, { useState } from "react"
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react"
import { Link } from "react-router-dom"
import classes from "./LessonBanner.module.scss"
import Pencil from "../../assets/lessonBanner/pencil.svg"
import Hat from "../../assets/lessonBanner/hat.svg"
import Favorite from "../../assets/lessonBanner/favorite.svg"
import Information from "../../assets/lessonBanner/information.svg"
import CardImg from "../../assets/lessonBanner/cardImg.png"
import Content from "../lessonContent/Content"

function Banner({ isVisible, setIsVisible }) {
  const bannerContent = {
    title:
      "Зако́н Архиме́да — закон гидростатики и аэростатики: на тело, погружённое в жидкость или газ, действует выталкивающая сила, численно равная весу объёма жидкости или газа, вытесненного телом. Закон открыт Архимедом в III веке до н. э. ",
    tags: ["Урок", "Физика", "5 класс", "Базовый"],
    author: "Пынеева А.В.",
  }
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    placement: "top",
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })
  const role = useRole(context, {
    role: "tooltip",
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  function maxLength(bannerContent) {
    return bannerContent.title.split(" ").length <= 20
      ? bannerContent.title
      : bannerContent.title.split(" ").slice(0, 20).join(" ") + "..."
  }

  const visibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.bannerBody}>
        <div className={classes.bannerTags}>
          {bannerContent.tags.map((el, i) => (
            <div className={classes.bannerTag}>{el}</div>
          ))}
        </div>

        <div className={classes.bannerContent}>
          <div className={classes.bannerTitle}>
            <p className={classes.innerBannerTitle}>
              {maxLength(bannerContent)}{" "}
              <button
                className={classes.popoverBtn}
                ref={refs.setReference}
                {...getReferenceProps()}
              >
                <img
                  className={classes.innerBannerIcon}
                  src={Information}
                  alt=""
                />
              </button>
              <FloatingPortal>
                {isOpen && (
                  <div
                    className={classes.Tooltip}
                    ref={refs.setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                  >
                    {bannerContent.title}
                  </div>
                )}
              </FloatingPortal>
            </p>
          </div>
          <img src={CardImg} alt="" />
        </div>

        <div className={classes.btns}>
          <div>
            <button className={classes.btn}>Добавить в избранное</button>
            <button className={classes.btn}>Добавить в Мои уроки</button>
          </div>
          <button onClick={visibility} className={classes.mainBtn}>
            Посмотреть
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
