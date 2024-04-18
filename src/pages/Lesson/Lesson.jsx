import React, { useState } from "react"
import classes from "./Lesson.module.scss"
import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import LessonBanner from "../../components/lessonBanner/LessonBanner"
import Content from "../../components/lessonContent/Content"
import Modal from "../../components/modal/Modal"
import HelpBtn from "../../components/modal/HelpBtn"
import DropdownList from "../../components/dropDownList/DropdownList"

function Lesson() {
  const [isVisible, setIsVisible] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.lessonWrapper}>
        <div>
          <div className={classes.backBody}>
            <Link to="/" className={classes.backLink}>
              <button className={classes.backBtn}>
                <img src="" alt="" /> Назад
              </button>
            </Link>
          </div>
          <LessonBanner isVisible={isVisible} setIsVisible={setIsVisible} />
          {isVisible && (
            <>
              <Content />
              <DropdownList />
            </>
          )}
        </div>
        <Modal visible={modal} setVisible={setModal}></Modal>
        <HelpBtn setModal={setModal} modal={modal} />
        <Footer className={classes.footer} />
      </div>
    </div>
  )
}
export default Lesson
