import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        M & A
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#sobre-nosotros">
          Sobre nosotros
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink> */}
        <AnchorLink className="px-4" href="#stats">
          Resultados
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonios">
          Testimonios
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

export default Header;
