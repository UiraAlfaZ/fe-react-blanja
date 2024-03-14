import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Carousel from '../../components/carousel/carousel'
import Category from '../../components/category/category'
import Card from '../../components/card/card'
import Popular from '../../components/popular/popular'

const Home = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Carousel/>
    <Category/>
    <Card/>
    <Popular/>
    </main>
    </>
  )
}

export default Home
