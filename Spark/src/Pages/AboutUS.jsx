import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import About from "../assets/image/AboutUs/About.png";
import MainTitle from '../Components/MainTitle';
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const fadeInBottom = {
  initial: {
    y: 50,   
    opacity: 0,
    visibility: 'hidden',
  },
  animate: {
    y: [50, -10, 10, 0], 
    opacity: [0, 1, 1, 1],
    visibility: 'visible',
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      times: [0, 0.5, 0.8, 1],
    },
  },
};

export default function AboutUs() {
  MainTitle("About Us");
  return (
    <div className="overflow-hidden"> 
    <NavigationBar />
      <motion.div
        className="flex flex-col-reverse items-center justify-center lg:items-start lg:flex-row lg:justify-center px-7 py-11 "
        variants={fadeInBottom} initial="initial" animate="animate">
        <div className="flex flex-col items-center max-w-[790px] text-center md:text-start lg:mt-28">
          <p className="text-[#1a92ce]  text-4xl font-semibold mb-6">
            About us
          </p>
          <p className="text-[#0d0d0db2] text-2xl  font-normal leading-9 text-center">
            At Spark Company, we're passionate about helping businesses like yours thrive in the digital 
            landscape. Our team of experts offers a range of services, from web development and UI/UX design
            to marketing and branding. Whether you're looking to revamp your online presence or launch a new
            brand, we've got you covered.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4.5 text-[#165069]">
          <img src={About} alt="Logo" className="w-[370px] h-[305px]  object-contain " />
          <p className="text-5xl font-normal pt-4">SPARK</p>
          <p className="text-xl font-medium">Engineering Company</p>
          <hr className="text-[#16506980] w-full" />
          {/*Social Icons */}
          <div className="flex gap-8 mb-14 mt-4">
            <Link to="https://www.facebook.com/profile.php?id=61553751250143">
              <FaFacebookF className="text-4xl transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="https://www.instagram.com/spark.eng.company">
              <AiFillInstagram className="text-4xl transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="https://wa.me/+963962272881">
              <IoLogoWhatsapp className="text-4xl transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="https://www.linkedin.com/company/spark-engineering-company/">
              <FaLinkedinIn className="text-4xl transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
