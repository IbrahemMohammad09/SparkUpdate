import Services1 from "../assets/image/OurServices/Services1.webp";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
export default function TopServices() {
  const Topservices = [
    {
      title: "Company Services",
      url: "/company-services",
      img: Services1,
      maxWidth: 500,
    },
    {
      title: "Student Services",
      url: "/student-services",
      img: Services1,
      maxWidth: 550,
    },
    {
      title: "Free Codes",
      url: "/free-codes",
      img: Services1,
      maxWidth: 600,
    },
  ];

  return (
    <>
      <div className="my-20">
        <p className="text-5xl md:text-6xl text-center">Our Top Services</p>
        <p className="text-[#0000009e] text-sm md:text-lg text-center my-4 max-w-[768px] px-3 m-auto">
          At our company, we pride ourselves on offering top-notch service that utilizes cutting-edge technology.
          Our team is dedicated to staying ahead of the curve and providing our clients with the most advanced and
          innovative solutions available.
        </p>
        <div className="bg-[#2c90a7] m-4 md:m-16 p-4 md:p-8 rounded-2xl">
          <div className="flex flex-col justify-start items-start gap-8 mt-12">
            {Topservices.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-2xl p-6 bg-[#f1f6f9] md:p-8 flex flex-col md:flex-row items-center  w-full hover:scale-105 transition-all cursor-pointer"
                style={{ maxWidth: `${service.maxWidth}px` }}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={service.img} alt={service.title} className="w-52 h-32" />
                <div className="flex flex-col p-4">
                  <h1 className="text-2xl  text-[#212529] ">{service.title}</h1>
                  <Link
                    to={service.url}
                    className="mt-4 font-medium text-base w-48 text-center md:text-lg inline-block bg-[#2fb0cd] py-3 md:py-4 px-8 md:px-12 rounded-lg hover:shadow-xl transition-all"
                  >
                    View More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
