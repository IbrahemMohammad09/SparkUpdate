import { useParams , useLocation  } from "react-router-dom";
import { services } from "../Utils/ServicesData";
import ErrorPage from "./ErrorPage/ErrorPage";
import { motion } from "framer-motion";
import { IoPerson, IoCall, IoChatbubbleEllipses } from "react-icons/io5";
import Footer from "../Components/Footer";
import MainTitle from "../Components/MainTitle";
import NavigationBar from "../Components/NavigationBar";
import { MdEmail } from "react-icons/md";
export default function BookServices() {
  MainTitle(" | Book Service");
  const { id } = useParams();
const location = useLocation();
const service = services.find((s) => s.id.toString() === id);
const serviceName = location.state?.serviceName || service?.title;
if (!service) return <ErrorPage />;

  return (
    <div>
      <NavigationBar />
      <div className="relative bg-gray-50 flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-[#2fb0cd] rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-[#2fb0cd] rounded-full animate-pulse delay-2000" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#2fb0cd0d_2px,_transparent_2px)] bg-[length:30px_30px] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center border border-gray-200 hover:shadow-[#2fb0cd] hover:shadow-lg w-full lg:w-1/2"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64  shadow-md shadow-[#2fb0cd]/40 hover:scale-110 transition-all"
            />
            <div className="p-8 text-center flex flex-col items-center ">
              <h2 className="text-3xl font-semibold text-[#2fb0cd] mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 hover:shadow-[#2fb0cd] hover:shadow-lg w-full lg:w-1/2"
          >
            <h3 className="text-3xl font-semibold text-[#2fb0cd] mb-8 text-center">
              Book This Service
            </h3>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full">
                  <IoPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2fb0cd]" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-sm w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2fb0cd]"
                  /> 
                </div>
                <div className="relative w-full">
                  <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2fb0cd]" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-sm w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2fb0cd]"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <IoCall className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2fb0cd]" />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className= "text-sm w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2fb0cd]"
                />
              </div>
              <div className="relative w-full">
                 <label className="block text-sm font-medium text-[#2fb0cd] my-2">
                  Type Your Message...
                 </label>
                <IoChatbubbleEllipses className="absolute left-4 top-11 text-[#2fb0cd]" />
                <textarea
                 defaultValue={`I wanna book this service " ${serviceName} "`}
                  className="text-sm w-full pl-12  pr-4 py-3 h-28 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2fb0cd]"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-32 bg-[#2fb0cd] text-white py-3 rounded-lg hover:bg-[#238aa2] transition-shadow shadow-md text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
