import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import LoginSection from '../components/loginSection'
import { Helmet } from 'react-helmet-async'

const Login = () => {
  return (
    <div>
       <Helmet>
        <title>Login</title>
      </Helmet>
      <Header/>

      <LoginSection/>

      <Footer/>
    </div>
  )
}

export default Login
