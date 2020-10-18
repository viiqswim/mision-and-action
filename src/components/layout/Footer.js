import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Misión & Acción</h2>
        <p className="mt-5">
          Nuestra <b>mision</b> es ayudar a dejarle un mejor planeta a futuras generaciones por medio de
          <b>accion</b> frecuente y constante.
        </p>
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Redes Sociales</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.facebook.com/misionyaccion">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
