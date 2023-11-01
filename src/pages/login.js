import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import LoginSection from '../components/loginSection'

const Login = () => {
  return (
    <div>
      <Header btn="sign in"/>

      <LoginSection/>

      <Footer/>
    </div>
  )
}

export default Login
