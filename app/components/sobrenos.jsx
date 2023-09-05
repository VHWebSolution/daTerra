import React from 'react'
import Image from 'next/image'
import SN from '../../public/sobre.png'

const SobreNos = () => {
  return (
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={SN} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-dtlaranja">Sobre a empresa</h1>
                <p class="mb-8 leading-relaxed text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor. 
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat       
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat       
                </p>        
            </div>
        </div>
      <div className="bg-dtverde w-full h-2" />       
      <div className="bg-dtlaranja w-full h-2" />  
    </section>
  )
}

export default SobreNos