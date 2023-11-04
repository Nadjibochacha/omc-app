import React from 'react'
import Header from '../components/header'
import HeroHome from '../components/heroHome'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home</title>
      </Helmet>
        <Header Btn="login"/>

        <HeroHome/>

        <Footer/>

    </div>
  )
}

export default Home
