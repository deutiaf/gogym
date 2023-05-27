import React from 'react'
import Story from './Story'
import './home.scss'
import Whyus from './Whyus'
import Services from './Services'
import Meetourteam from './Meetourteam'
import Download from './Download'
import Price from './Price'

const Home = () => {

  return (
    <main className='home'>
      <Story/>
      <Whyus/>
      <Services/>
      <Meetourteam/>
      <Download/>
      <Price/>
    </main>
  )
}


export default Home