import React from 'react';

const Maps = () => {

  return (
    <section class="text-gray-600 body-font relative">
    <div className="bg-dtverde w-full h-2" />       
    <div className="bg-dtlaranja w-full h-2" />    
  <div class="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap sm:justify-center">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden md:p-10 sm:p-[15vw] usd:mr-10 p-[35vw] flex items-end justify-start relative  w-full">
    <iframe
        width="100%"
        height="100%"
        class="absolute inset-0"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14144.240009069248!2d-48.5121278!3d-27.5916693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952738fc76a463b9%3A0xceb201e8db13def8!2sDa%20Terra%20Restaurante%20Natural!5e0!3m2!1spt-BR!2sbr!4v1691751141455!5m2!1spt-BR!2sbr"
        
    ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md hidden sm:block">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font text-gray-900 tracking-widest text-2xs font-bold">Endereço:</h2>
          <p class="mt-1">R. Joe Collaço, 1034 - Santa Monica, Florianópolis - SC, 88035-200</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
          <a class="text-indigo-500 leading-relaxed">daterranatural@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Telefone</h2>
          <p class="leading-relaxed">(48) 3025-2305</p>
        </div>
      </div>
    </div>
    
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Gostaríamos muito de ouvir a sua opinião! Por favor, compartilhe conosco o seu feedback para que possamos continuar melhorando.</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Nome</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-dtverde focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-dtverde focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Mensagem</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-dtverde focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors ease-in-out"></textarea>
      </div>
      <button class="text-white bg-dtverde border-0 py-2 px-6 focus:outline-none hover:bg-green-700 duration rounded text-lg">Enviar</button>
    </div>
  </div>
</section>
  );
};

export default Maps;
