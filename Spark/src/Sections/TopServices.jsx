import Services1 from "../assets/image/OurServices/Services1.webp";
import { motion } from 'framer-motion'; 
import { FaCheck } from "react-icons/fa6";
import "./TopServices.css"
export default function TopServices() {
  const Topservices = [
    {
      title: "Company Services",
      url: "/company-services",
      img: Services1,
      text1:"Social media content ",
      text2:"Website Design",
      text3:"UI/UX Solution",
    },
    {
      title: "Student Services",
      img: Services1,
      text1:"Social media content ",
      text2:"Website Design",
      text3:"UI/UX Solution",
    },
    {
      title: "Free Codes",
      img: Services1,
      text1:"Social media content ",
      text2:"Website Design",
      text3:"UI/UX Solution",
    },
    {
      title: "SCRS",
      img: Services1,
      text1:"Social media content ",
      text2:"Website Design",
      text3:"UI/UX Solution",
    }
  ];

  return (
    <>
      <div className="my-20 p-9 md:px-16  bg-gradient rounded-2xl mx-2  "
    >
      <p className=" text-lg">01 | Top Services</p>
        <div className="flex flex-col  justify-center items-center lg:flex-row lg:justify-between my-4 container-card">
        <p className="text-2xl md:text-5xl text-center text-white">Our Top Services Include</p>
        <p className="text-[#0000009e] text-xl   lg:max-w-[530px] my-5  text-center ">
          We are dedicated to <span className="text-white">crafting</span> compelling brand <span className="text-white">identities</span> , stunning <span className="text-white">visuals </span>,
           and immersive <span className="text-white">digital experiences </span> that captivate audiences.
        </p>
        </div>
        <div className="mt-2 lg:mt-16 md:p-4 rounded-2xl">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-8 mt-6 container-card">
            {Topservices.map((topservices, index) => (
              <motion.div
                key={index}
                className=" flex flex-col  items-start w-72 md:w-96 h-72 rounded-2xl p-6 md:p-8 bg-[#f1f6f9] hover:scale-105 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={topservices.img} alt={topservices.title} className="w-24" />
                <div className="flex flex-col p-4">
                  <h1 className="text-xl font-semibold text-[#212529] ">{topservices.title}</h1>
                  <div className="flex gap-1.5 items-start mt-1">
                  <FaCheck  className="text-[#2fb0cd] text-xl"/>
                  <p className="text-base"> {topservices.text1}</p>
                  </div>
                  <div className="flex gap-1.5 items-start mt-1">
                  <FaCheck  className="text-[#2fb0cd] text-xl "/>
                  <p> {topservices.text2}</p>
                  </div>
                  <div className="flex gap-1.5 items-start mt-1">
                  <FaCheck   className="text-[#2fb0cd] text-xl"/>
                  <p> {topservices.text3}</p>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
