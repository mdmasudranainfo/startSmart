import React from 'react'
import Banner from '../Banner/Banner'
import Main from '../../Layout/Main'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import LoginBanner from '../LoginBannar/LoginBannar'

const LoginPage = () => {
  return (
    <div>
      <LoginBanner />
      <Login />
      <Footer />
    </div>
  )
}

export default LoginPage
