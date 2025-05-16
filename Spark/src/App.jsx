import './App.css'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUS';
import { BrowserRouter, Routes, Route,  Link} from "react-router-dom";
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
        </Routes>
        <AboutUs/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
