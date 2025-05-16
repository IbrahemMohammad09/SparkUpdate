import About from "../assets/image/AboutUs/About.png"
import { FaFacebookF ,FaLinkedinIn} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import {Link} from "react-router-dom";
export default function AboutUs(){
    return<>
    <div className="flex flex-col-reverse items-center justify-center    lg:flex-row lg:justify-between px-10 py-8">
        <div className="max-w-[790px]">
            <p className="text-[#165069] text-center md:text-start text-4xl font-semibold mb-6">About us</p>
            <p className="text-[#0d0d0db2] text-2xl font-normal leading-9 ">At Spark Company, we're passionate about helping businesses like yours thrive in the digital 
                landscape. Our team of experts offers a range of services, from web development and UI/UX design
                to marketing and branding. Whether you're looking to revamp your online presence or launch a new
                brand, we've got you covered</p>
        </div>
        <div className="flex flex-col items-center gap-4.5 text-[#165069]">
            <img src={About} alt="Logo" className="w-80 "/>
            <p className=" text-5xl font-normal  pt-4">SPARK</p>
            <p className="text-xl font-medium ">Engineering Company</p>
            <hr className="text-[#16506980] w-full  "></hr>
            {/* Social Icons */}
            <div className="flex gap-8 mb-14 mt-4">
                <Link to  = "https://www.facebook.com/profile.php?id=61553751250143&mibextid=ZbWKwL">
                    <FaFacebookF className="text-4xl transition-transform duration-300  hover:scale-110 "/>
                </Link>
                <Link to ="https://www.instagram.com/spark.eng.company?igsh=NGJucWhrMHA4MDI3">
                   <AiFillInstagram className="text-4xl transition-transform duration-300  hover:scale-110"/>
                </Link>
                <Link to = "https://wa.me/+963962272881">
                   <IoLogoWhatsapp className="text-4xl transition-transform duration-300  hover:scale-110 "/>
                </Link>
               <Link to ="https://www.linkedin.com/company/spark-engineering-company/">
                   <FaLinkedinIn className="text-4xl  transition-transform duration-300  hover:scale-110"/>
               </Link>
            </div>
        </div>

    </div>
    
    </>
}