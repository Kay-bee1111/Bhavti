import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assests/ss.png";
import logo2 from "../assests/gscultural.png";
import logo3 from "../assests/collegelogo.png";

import fb from "./icons/icons8-facebook-f-24 (2).png";
import insta from "./icons/icons8-instagram-24.png";
import linkedin from "./icons/icons8-linkedin-24 (1).png";
import twitter from "./icons/icons8-twitter-24.png";

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="bg-gray text-white w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center px-4 sm:px-12 py-7">
          <h1 className="text-4xl lg:text-5xl font-semibold italic text-center md:text-left mb-6 md:mb-0">
            <span className="font-satisfy">Bhavti</span>
          </h1>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/">
              <img src={fb} alt="fb" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} alt="insta" className="cursor-pointer w-6 h-6 md:w-8 md:h-8" />
            </a>
           
          </div>
        </div>
        <div className="border-t border-neutral-700 py-5">
          
        </div>
        <div className="bg-black text-center py-3">
          <p className="text-gray-500 text-xs">
            All rights reserved by Krati Bhardwaj, 2024
          </p>
        </div>
      </footer>
    );
  }
}
