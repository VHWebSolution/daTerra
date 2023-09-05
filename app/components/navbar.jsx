'use client'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NextLink from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Atualizar 'isMobile' no carregamento da página e quando a janela for redimensionada
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Remover o evento de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="text-white body-font bg-dtprimary fixed w-full z-20 h-20">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row justify-between relative">
      <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:order-first logo-container">
          <a>
            <Image src={Logo} alt="Logo" className="w-14" />
          </a>
          <span className="ml-1 text-xl text-dtblack">Restaurante natural</span>
        </div>

        <button
          className={`md:hidden focus:outline-none hamburger ${
            menuOpen ? 'active' : ''
          } flex flex-col justify-center items-center absolute top-8 right-3 transition-transform duration-300`}
          onClick={toggleMenu}
        >
          <span
            className={`hamburger-bar w-7 h-0.5 bg-dtverde mb-1 ${
              menuOpen ? 'transform rotate-45 -translate-y-1 translate-x-1 bg-dtlaranja' : ''
            }`}
          ></span>
          <span
            className={`hamburger-bar w-7 h-0.5 bg-dtverde mb-1 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`hamburger-bar w-7 h-0.5 bg-dtverde ${
              menuOpen ? 'transform -rotate-45 translate-y-1 -translate-x-1 bg-dtlaranja' : ''
            }`}
          ></span>
        </button>

        <nav
          className={`${
            menuOpen ? 'flex animate-fadeIn' : 'hidden'
          } md:flex md:ml-auto md:mr-auto xl:pr-50px items-center text-base justify-center gap-5 bg-dtprimary text-dtblack`}
          style={{
            marginTop: isMobile && menuOpen ? '3rem' : 0,
            position: isMobile && menuOpen ? 'fixed' : 'static',
            width: isMobile && menuOpen ? '100%' : 'auto',
            left: isMobile && menuOpen ? 0 : 'auto',
            height: isMobile ? '5vh' : 'auto',
            top: isMobile && menuOpen ? 'calc(1rem + 15px)' : 'auto', // Ajuste de espaçamento
          }}
        >
          <NextLink href="/" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-dtbtn cursor-pointer">
            Início
          </NextLink>
         <NextLink href="/sobre" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-dtbtn cursor-pointer">
            Sobre
          </NextLink>
          <NextLink href="/buffet" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-dtbtn cursor-pointer">
            Buffet
          </NextLink>
          <NextLink href="/contato" spy={true} smooth={true} offset={-60} duration={500} className="hover:text-dtbtn cursor-pointer">
            Contato
          </NextLink>
        </nav>
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 md:order-second logo-container">
        {isMobile ? (
          <span></span>
        ) : (
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <p>(48) 3025-2305</p>
          </span>
        )}
      </div>
      </div>   
    </header>
  );
};

export default Navbar;