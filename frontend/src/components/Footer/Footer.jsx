import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { FaTripadvisor } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/images/logo3.png";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <img src={Logo} alt="ExploreWorld Logo" className="w-20 h-20 mb-3 transform hover:scale-105 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    ExploreWorld
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Your gateway to unforgettable adventures
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-start space-y-3">
                <h3 className="text-base font-semibold text-white border-b border-gray-700 pb-1">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-300">
                    Home
                  </Link>
                  <Link to="/tours" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-300">
                    Tours
                  </Link>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-300">
                    About
                  </Link>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-300">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-3">
                <h3 className="text-base font-semibold text-white border-b border-gray-700 pb-1">Contact Info</h3>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center text-gray-300 group">
                    <IoLocationSharp className="mr-2 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">GLA University, Mathura</span>
                  </div>
                  <div className="flex items-center text-gray-300 group">
                    <IoCall className="mr-2 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">+91 0000000000</span>
                  </div>
                  <div className="flex items-center text-gray-300 group">
                    <IoMail className="mr-2 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">info@exploreworld.com</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-3">
                <h3 className="text-base font-semibold text-white border-b border-gray-700 pb-1">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300">
                    <IoLogoYoutube size={22} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300">
                    <IoLogoInstagram size={22} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300">
                    <FaTripadvisor size={22} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300">
                    <IoLogoTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ExploreWorld. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
