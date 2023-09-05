import Image from 'next/image'
import React from 'react'
import BH from '../../public/banner2.png'

const SobreNosHeader = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BH.src})`, height: '30vh'}}>
         <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white">
            <div className="text-center lg:w-2/3 w-full pt-20">
                <div className="text-center">
                <h1 className="title-font sm:text-5xl text-6xl mb-4 text-white font-noto font-bold">Sobre a empresa</h1>
                </div>
            </div>
        </div>
    </section>


  )
}

export default SobreNosHeader