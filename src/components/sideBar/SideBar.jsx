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
    name: "Найт С.",
    role: "Учитель",
    link: "/page",
  }
  const sideBarLink = [
    {
      title: "Поиск контента",
      Icon: Search,
      link: "/",
    },
    {
      title: "Главная страница",
      Icon: Home,
      link: "/",
    },
    {
      title: "Мои уроки",
      Icon: Hat,
      link: "/",
    },
    {
      title: "Каталог",
      Icon: Book,
      link: "/",
    },
    {
      title: "Избранное",
      Icon: Favorite,
      link: "/",
    },
    {
      title: "Новости",
      Icon: News,
      link: "/",
    },
    {
      title: "Подобрано для вас",
      Icon: Personal,
      link: "/",
    },
    {
      title: "Опросы",
      Icon: Poll,
      link: "/",
    },
    {
      title: "История",
      Icon: Story,
      link: "/",
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
      <div className={classes.logo}>Учёба 2.0</div>
      <Link to={profilButton.link} className={classes.profil}>
        <div className={classes.name}>
          <div className={classes.profilLogo}></div> {profilButton.name}
          <br />
          {profilButton.role}
        </div>
        <Arrow className={classes.arrow} />
      </Link>
      <div className={classes.createLine}></div>
      {sideBarLink.map((el, index) => (
        <Link to={el.link} key={index} className={classes.sideBarLink}>
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
