import React, { Fragment } from 'react'
import ChooseUs from '../component/choose-us/ChooseUs'
import Download from '../component/download-section/Download'
import Footer from '../component/footer/Footer'
import Herder from '../component/header/Herder'
import HeroSlider from '../component/hero-slider/HeroSlider'
import MenuPack from '../component/menu-pack/MenuPack'
import PopularMenu from '../component/popular-menu/PopularMenu'
import Testimonials from '../component/testimonials/Testimonials'

const Home = () => {
  return (
    <Fragment>
      <Herder />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer></Footer>
    </Fragment>
  )
}

export default Home