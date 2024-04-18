import React from "react"
import classes from "./SideBar.module.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Arrow } from "../../assets/sidebar/arrow.svg"
import { ReactComponent as Search } from "../../assets/sidebar/search.svg"
import { ReactComponent as Home } from "../../assets/sidebar/home.svg"
import { ReactComponent as Hat } from "../../assets/sidebar/hat.svg"
import { ReactComponent as Book } from "../../assets/sidebar/book.svg"
import { ReactComponent as Favorite } from "../../assets/sidebar/favorite.svg"
import { ReactComponent as News } from "../../assets/sidebar/news.svg"
import { ReactComponent as Personal } from "../../assets/sidebar/personalSelection.svg"
import { ReactComponent as Poll } from "../../assets/sidebar/polls.svg"
import { ReactComponent as Story } from "../../assets/sidebar/story.svg"
import { ReactComponent as Blind } from "../../assets/sidebar/blind.svg"
import { ReactComponent as Exit } from "../../assets/sidebar/exit.svg"

function SideBar() {
  const profilButton = {
    name: "Бронте Ш.А.",
    role: "Эксперт",
  }
  const sideBarLink = [
    {
      title: "Поиск контента",
      Icon: Search,
    },
    {
      title: "Главная страница",
      Icon: Home,
    },
    {
      title: "Мои уроки",
      Icon: Hat,
    },
    {
      title: "Каталог",
      Icon: Book,
    },
    {
      title: "Избранное",
      Icon: Favorite,
    },
    {
      title: "Новости",
      Icon: News,
    },
    {
      title: "Подобрано для вас",
      Icon: Personal,
    },
    {
      title: "Опросы",
      Icon: Poll,
    },
    {
      title: "История",
      Icon: Story,
    },
  ]
  const sideBarLinkBottom = [
    {
      title: "Для слабовидящих",
      Icon: Blind,
    },

    {
      title: "Выйти из системы",
      Icon: Exit,
    },
  ]
  return (
    <div className={classes.sideBarWrapper}>
      <div className={classes.logo}>Инструментарий</div>
      <Link className={classes.profil}>
        <div className={classes.name}>
          <div className={classes.profilLogo}></div> {profilButton.name}
          <br />
          {profilButton.role}
        </div>
        <Arrow className={classes.arrow} />
      </Link>
      <div className={classes.createLine}></div>
      {sideBarLink.map((el, index) => (
        <Link key={index} className={classes.sideBarLink}>
          <div className={classes.sideBarIcon}>
            <el.Icon className={classes.icon} />
          </div>
          {el.title}
        </Link>
      ))}
      <div className={classes.createLine}></div>
      {sideBarLinkBottom.map((el, index) => (
        <Link key={index} className={classes.sideBarLink}>
          <div className={classes.sideBarIcon}>
            <el.Icon className={classes.icon} />
          </div>
          {el.title}
        </Link>
      ))}
    </div>
  )
}
export default SideBar
