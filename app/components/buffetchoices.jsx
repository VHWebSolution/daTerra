import React from 'react'
import Saladas from '../../public/saladas.png'
import Veganos from '../../public/veganos.png'
import Sobremesas from '../../public/sobremesas.png'
import Proteinas from '../../public/proteinas.png'
import SucosNaturais from '../../public/SucosNaturais.png'
import Image from 'next/image'

const BuffetChoices = () => {
  return (
    <div class="bg-gray-200 mt-[100px] sm:mt-[80px]" >
    <div class="container px-5 py-6 gap-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <div class="bg-dtbtnw rounded-lg p-8 flex items-center flex-col mb-8 md:mb-0">
        <Image src={Veganos} alt="" srcset="" />
        <h1>Veganos</h1>
      </div>
      <div class="bg-dtbtnw rounded-lg p-8 flex items-center flex-col mb-8 md:mb-0">
        <Image src={Saladas} alt="" srcset="" />
        <h1>Saladas</h1>
      </div>
      <div class="bg-dtbtnw rounded-lg p-8 flex items-center flex-col mb-8 md:mb-0">
        <Image src={Proteinas} alt="" srcset="" />
        <h1>Proteínas</h1>
      </div>
      <div class="bg-dtbtnw rounded-lg p-8 flex items-center flex-col mb-8 md:mb-0">
        <Image src={SucosNaturais} alt="" srcset="" />
        <h1>Sucos Naturais</h1>
      </div>
      <div class="bg-dtbtnw rounded-lg p-8 flex items-center flex-col mb-8 md:mb-0">
        <Image src={Sobremesas} alt="" srcset="" />
        <h1>Sobremesas</h1>
      </div>
    </div>
  </div>
  )
}

export default BuffetChoices