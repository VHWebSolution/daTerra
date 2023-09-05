import React from 'react'
import BH from '../../public/banner2.png'   

const BuffetHeader = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-center mb-16" style={{ backgroundImage: `url(${BH.src})`, height: '30vh'}}>
        <div className="container mx-auto flex h-full px-5 items-center justify-center flex-col text-white ">
            <div className="text-center lg:w-2/3 w-full pt-20">
                <div className="text-center">
                <h1 className="title-font sm:text-5xl text-6xl mb-4 text-white font-noto font-bold">Buffet</h1>
                </div>
            </div>
        </div>
        <div class="bg-dtblack">
            <div class="container px-5 py-8 mx-auto flex items-center justify-center">
            <p class="text-sm text-white sm:ml-6 sm:mt-0 items-center text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, exemplo de subtitulo</p>
            </div>
        </div>
    </section>
  )
}

export default BuffetHeader