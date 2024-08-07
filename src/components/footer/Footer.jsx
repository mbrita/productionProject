import React from "react"
import classes from "./Footer.module.scss"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerContent}>
        <div className={classes.leftColumn}>
          <div className={classes.logo}>Учёба 2.0</div>
        </div>

        <div className={classes.rightColumn}>
          <div className={classes.expert}>
            Эксперту
            <Link className={classes.expertLink} to="/">
              Главная страница
            </Link>
            <Link className={classes.expertLink} to="/">
              Поиск контента
            </Link>
            <Link className={classes.expertLink} to="/">
              Мои уроки
            </Link>
            <Link className={classes.expertLink} to="/">
              Избранное
            </Link>
          </div>
          <div className={classes.support}>
            Поддержка
            <a className={classes.supportLink} href="tel:+74955395519">
              +7 999 678-34-43
            </a>
            <a className={classes.supportLink} href="shool.ru">
              shool@mail.ru
            </a>
            <a className={classes.supportLink} href="shool.ru">
              shool.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
