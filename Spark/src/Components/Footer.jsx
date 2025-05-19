import logo from "../assets/image/logo.webp";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2fb0cd] py-6 ">
        <div className="flex flex-col  items-center justify-around  md:flex-row  md:items-start  ">
          <Link to="/" className="flex  items-center mb-4">
            <img src={logo} alt="Logo" className="w-16" />
            <p className="text-2xl font-normal pl-3 cursor-pointer">SPARK</p>
          </Link>


          <div className="flex gap-8 text-base">
            <div className="flex flex-col">
              <Link
                to="/about_us"
                className="hover:text-white transition-transform duration-300 cursor-pointer text-lg font-normal "
              >
                About Us
              </Link>
              <Link
                to="/contact_us"
                className="hover:text-white  transition-transform duration-300 cursor-pointer text-lg font-normal"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex  flex-col">
              <Link
                to="our_services"
                className="hover:text-white transition-transform duration-300 cursor-pointer text-lg font-normal"
              >
                Our Services
              </Link>
              <Link
                to="our_team"
                className="hover:text-white transition-transform duration-300 cursor-pointer text-lg font-normal"
              >
                Our Team
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                to="/our_projects"
                className="hover:text-white transition-transform duration-300 cursor-pointer text-lg font-normal"
              >
                Our Projects
              </Link>
              <Link
                to="/our_app"
                className="hover:text-white transition-transform duration-300 cursor-pointer text-lg font-normal"
              >
                Our App
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around md:items-center md:pr-24 mt-6">
          <div className="flex gap-4 order-1 md:order-2 ">
            <Link
              to="https://www.facebook.com/profile.php?id=61553751250143&mibextid=ZbWKwL"
              className="bg-black text-white rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#1877f2]"
            >
              <FaFacebookF />
            </Link>

            <Link
              to="https://www.instagram.com/spark.eng.company?igsh=NGJucWhrMHA4MDI3"
              className="bg-black text-white rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#c32aa3]"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://wa.me/+963962272881"
              className="bg-black text-white rounded-full p-2 flex items-center justify-center hover:bg-[#25d366]"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://www.linkedin.com/company/spark-engineering-company/"
              className="bg-black text-white rounded-full p-2 flex items-center justify-center transition-transform duration-300 hover:bg-[#0a66c2]"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <p className="order-2 md:order-1 text-base font-normal text-[#212529] text-center">
            Copyright ® 2024 Company All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
