// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // fopter strat
    <footer className="bg-pink-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About */}
        <div>
          <img
            src="https://websitedemos.net/cafe-04/wp-content/uploads/sites/545/2020/02/logo-regular-free-img.png"
            className=" mb-4  text-red-500"
          />
          <p className="text-sm">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin,
            lorem quis bibendum auctor.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-white">LOCATIONS</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a className="hover:underline">THE COFFEE SHOP</a>
            </li>
            <li>
              <a className="hover:underline">11th Avenue, Hell’s Kitchen,</a>
            </li>
            <li>
              <a className="hover:underline">Manhattan, NY 10160</a>
            </li>
            <li>
              <a className="hover:underline">VEGAS MOCHA</a>
            </li>
          </ul>
        </div>
        {/* Column 3:opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-white">
            Opening Hours
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              <a className="hover:underline">Monday ___ _ __08:00-20:00</a>
            </li>
            <li>
              <a className="hover:underline">Tuesday _ __ ___08:00-20:00</a>
            </li>
            <li>
              <a className="hover:underline">Wednesday _ __08:00-20:00</a>
            </li>
            <li>
              <a className="hover:underline">Thursday _ __ __08:00-20:00</a>
            </li>
            <li>
              <a className="hover:underline">Friday _ ____ ___08:00-20:00</a>
            </li>
            <li>
              <a className="hover:underline">Saturday _ __ __10:00-18:00</a>
            </li>
            <li>
              <a className="hover:underline">Sunday _ ____ __10:00-18:00</a>
            </li>
          </ul>
        </div>
        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4  text-white">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2  text-white" />
              <a href="mailto:info@bloodbank.com" className="hover:underline">
                contact@coffeeinfo.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
              929-242-6868
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-lg">
        <span className="text-white">Copyright</span> &copy;{" "}
        {new Date().getFullYear()}
        <span className="text-gray-400"> Cafe | Powered by Cafe</span>
      </div>
    </footer>
  );
};


export default Footer;
// footer complete





