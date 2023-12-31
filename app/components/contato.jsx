import React from 'react'

const ContatoComponent = () => {
  return (
    <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Entre em contato pelo Telefone: (48) 3025-2305.
            <br></br>
            ou se preferir envie um email preenchendo os campos abaixo:.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Nome</label>
                    <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>
                <div class="p-2 w-1/2">
                <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Telefone</label>
                    <input type="phone" id="tel" name="tel" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>
                <div class="p-2 w-full">
                <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>
                <div class="p-2 w-full">
                <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600">Mensagem</label>
                    <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                </div>
                <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-dtverde border-0 py-2 px-8 focus:outline-none hover:bg-green-900 rounded text-lg">Enviar</button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ContatoComponent