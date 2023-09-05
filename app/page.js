import Image from 'next/image'
import Hero from './components/hero'
import SobreNos from './components/sobrenos'
import Maps from './components/maps'
import MySwiper from './components/swiper'

export default function Home() {


  return (
    <>
    <Hero />
    <SobreNos /> 
    <MySwiper />   
    <Maps />
    </>
  )
}
