import Image from 'next/image'
import React from 'react'
import C1 from '../../public/saladas2.png'
import C2 from '../../public/veganos2.png'
import C3 from '../../public/proteinas2.png'
import C4 from '../../public/sucos2.png'
import C5 from '../../public/sobremesas2.png'

const BuffetContent = () => {
  return (
    <section class="text-gray-600 body-font py-24">
        <div class="flex flex-col items-center justify-center">
            <h1 class="title-font sm:text-2xl mb-4 font-medium text-dtblack">Veganos</h1>
            <div class="bg-dtverde w-40 h-1 rounded-full" />
        </div>
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={C1} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-2xl text-1xl mb-4 font-bold text-dtblack">Exemplo de título</h1>
                <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor.               
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                </p>        
            </div>
        </div>

        <div class="flex flex-col items-center justify-center">
            <h1 class="title-font sm:text-2xl mb-4 font-medium text-dtblack">Saladas</h1>
            <div class="bg-dtverde w-40 h-1 rounded-full" />
        </div>
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={C2} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-2xl text-1xl mb-4 font-bold text-dtblack">Exemplo de título</h1>
                <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor.               
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                </p>        
            </div>
        </div>

        <div class="flex flex-col items-center justify-center">
            <h1 class="title-font sm:text-2xl mb-4 font-medium text-dtblack">Proteínas</h1>
            <div class="bg-dtverde w-40 h-1 rounded-full" />
        </div>
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={C3} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-2xl text-1xl mb-4 font-bold text-dtblack">Exemplo de título</h1>
                <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor.               
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                </p>        
            </div>
        </div>

        <div class="flex flex-col items-center justify-center">
            <h1 class="title-font sm:text-2xl mb-4 font-medium text-dtblack">Sucos Naturais</h1>
            <div class="bg-dtverde w-40 h-1 rounded-full" />
        </div>
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={C4} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-2xl text-1xl mb-4 font-bold text-dtblack">Exemplo de título</h1>
                <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor.               
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                </p>        
            </div>
        </div>

        <div class="flex flex-col items-center justify-center">
            <h1 class="title-font sm:text-2xl mb-4 font-medium text-dtblack">Sobremesas</h1>
            <div class="bg-dtverde w-40 h-1 rounded-full" />
        </div>
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg mb-10 md:mb-0">
                <Image class="object-cover object-center rounded" alt="hero" src={C5} />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                <h1 class="title-font sm:text-2xl text-1xl mb-4 font-bold text-dtblack">Exemplo de título</h1>
                <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor.               
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                </p>        
            </div>
        </div>
    </section>
  )
}

export default BuffetContent