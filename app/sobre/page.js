import React from 'react'
import SobreNosHeader from '../components/sobreheader'
import NossoTime from '../components/ourteam'
import SobreNosContent from '../components/aboutus'

const Sobre = () => {
  return (
    <>
    <SobreNosHeader/> 
    <div class='flex justify-center items-center'>
        <p class="mb-8 leading-relaxed text-justify p-[30px] max-w-[1600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero magna, faucibus accumsan tempor eu, egestas sit amet tortor. 
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat       
                <br /><br />
                Maecenas dictum turpis eleifend interdum luctus. Integer a orci a dolor ultricies convallis. Sed placerat, odio quis sagittis accumsan, nisl diam hendrerit elit, eu blandit dui dolor ut mi. Quisque semper tellus id tellus venenatis, at pretium massa feugiat. Sed imperdiet mi risus, quis ullamcorper orci hendrerit a. Vestibulum elit risus, faucibus a sagittis ac, sagittis in enim. Nam quis vestibulum tortor, ut ultricies tortor. Pellentesque nec est dolor. Quisque nec sem elit. Mauris quam diam, faucibus a magna ac, semper viverra erat       
                </p>      
    </div>
    <NossoTime />
    </>
  )
}

export default Sobre