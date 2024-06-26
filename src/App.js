import { Toaster } from "react-hot-toast";
import Contact from "./component/Contact";
import Header, { HeaderPhone } from "./component/Header";
import Home from "./component/Home";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";
import Timeline from "./component/Timeline";
import Work from "./component/Work";
import Footer from "./component/Footer";
import {  useState } from "react";


function App() {

  const [menuOpen, setMenuOpen] = useState(false)
 




  return  (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
}

export default App;
