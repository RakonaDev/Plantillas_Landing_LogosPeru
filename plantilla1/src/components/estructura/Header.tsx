import Container from "../utils/Container";
import Logo from "../../assets/logo.png"
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { scrollToElement } from "../../logic/scrollToElement";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    })
  }, [])

  return (
    <div className="*:text-black">
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-1 bg-transparent w-full fixed top-0 bg-white z-50"
      >
        <Container className="flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-20 h-auto" />

          <ul className="lg:flex gap-4 items-center hidden">
            <li onClick={() => scrollToElement('inicio')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">INICIO</li>
            <li onClick={() => scrollToElement('nosotros')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">NOSOTROS</li>
            <li onClick={() => scrollToElement('servicios')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">SERVICIOS</li>
            <li onClick={() => scrollToElement('contacto')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">CONTACTO</li>
          </ul>

          <a href="#" className="lg:block hidden px-4 py-2 bg-black text-white rounded-full font-ConstellationTLPro-Bold tracking-wider hover:text-secondary duration-300 transition-colors">
            BROCHURE
          </a>

          <button className="lg:hidden p-2 rounded-full bg-quaternary text-black hover:bg-quaternary/60 duration-300 transition-colors" onClick={toggle}>
            <IoMdMenu size={30} />
          </button>

        </Container>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="w-full flex justify absolute top-[5.9rem] z-30 bg-white text-black px-4 py-5"
          >
            <ul className="flex flex-col gap-4 items-center w-full">
              <li onClick={() => scrollToElement('inicio')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">INICIO</li>
              <li onClick={() => scrollToElement('nosotros')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">NOSOTROS</li>
              <li onClick={() => scrollToElement('servicios')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">SERVICIOS</li>
              <li onClick={() => scrollToElement('contacto')} className="hover:text-primary duration-300 transition-colors font-ConstellationTLPro-Bold tracking-wider cursor-pointer">CONTACTO</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-40"
      >

      </motion.div> */}
    </div>
  )
}
