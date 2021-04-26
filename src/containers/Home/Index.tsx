import React from 'react'
import { Experience } from '../../components/Experience'
import { Footer } from '../../components/Footer'

import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Repositories } from '../../components/Repositories'
import { SocialMedia } from '../../components/SocialMedia'
import { Technologies } from '../../components/Technologies'

export const Home = () => {
  return (
    <>
      <Header />
      <Profile />
      <SocialMedia />
      <Technologies />
      <Experience />
      <Repositories />
      <Footer />
    </>
  )
}
