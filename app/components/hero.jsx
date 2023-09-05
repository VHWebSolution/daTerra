import React from 'react'
import BannerImage from '../../public/banner.png';
import Image from 'next/image';
import FadeInOnScroll from '../scripts/FadeInOnScroll';
import F1 from '../../public/folha1.png'
import F2 from '../../public/folha2.png'

const Hero = () => {
  return (
    <section id='home' className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BannerImage.src})`, height: '80vh'}}>   
      <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white">
        <div className="text-center lg:w-2/3 w-full">
          <FadeInOnScroll>
            <div className="text-center">
              <h1 className="title-font sm:text-7xl text-6xl mb-4 text-white font-noto font-bold">DaTerra Natural</h1>

              <div className='flex justify-center gap-2'>
              <Image src={F1} alt="folha1" className="w-4 h-4" />
              <p className="mb-8 leading-relaxed text-base">Opções vegetarianas, veganas e tradicionais</p>   
              <Image src={F2} alt="folha2" className="w-4 h-4" />
              </div>

              <div className="flex justify-center">
                <a href='/buffet'><button className="ml-4 inline-flex text-white font-Noto font-bold text-2xl	 bg-dtbtn rounded-xl border-0 py-2 px-6 focus:outline-none hover:bg-dtverde duration-[500ms] cursor-pointer">
                INFORMAÇÕES DO BUFFET  
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right my-auto ml-2" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg></button></a>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
      <div className="bg-dtverde w-full h-2" />       
      <div className="bg-dtlaranja w-full h-2" />  
    </section>
  )
}

export default Hero