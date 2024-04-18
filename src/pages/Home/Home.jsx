import React, { useState } from "react"
import classes from "./Home.module.scss"
import { useRouteError } from "react-router-dom"
import SideBar from "../../components/sideBar/SideBar"
import Filter from "../../components/filter/Filter"
import Input from "../../components/input/Input"
import Banner from "../../components/banner/Banner"
import Cards from "../../components/cards/Cards"
import EarlyActionCards from "../../components/earlyActionCards/EarlyActionCards"
import Footer from "../../components/footer/Footer"
import Modal from "../../components/modal/Modal"
import HelpBtn from "../../components/modal/HelpBtn"

function Home() {
  const [modal, setModal] = useState(false)
  return (
    <div className={classes.homeWrapper}>
      <SideBar />
      <div>
        <Filter />
        <Input />
        <Banner />
        <Cards />
        <EarlyActionCards />
        <Footer />
        <Modal visible={modal} setVisible={setModal}></Modal>
        <HelpBtn setModal={setModal} modal={modal} />
      </div>
    </div>
  )
}
export default Home
