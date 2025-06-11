import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {

  const menu = [
    {label:"About",id:"about"},
    {label:"Skills",id:"skills"},
    {label:"Education",id:"education"},
    {label:"Projects",id:"projects"},
  ]


  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  //check scroll and change navbar background
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    const scrollPosition = window.scrollY + 80; // Adjust offset for navbar height
    let currentSection = "";

    for (let i = 0; i < menu.length; i++) {
      const section = document.getElementById(menu[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = menu[i].id;
          break;
        }
      }
    }

    // Handle bottom of page case
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
      currentSection = menu[menu.length - 1].id;
    }

    setActiveSection(currentSection);
  };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[12vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md": "bg-transparent"
      }`}>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="text-white py-5 flex justify-between items-center">
        <div className='text-2xl font-bold space-x-2'>
          <span className='text-white'>Nikhil</span>
          <span className='text-purple-500'>Kumar</span>
        </div>

        <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-gray-300'>
          {menu.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-purple-500 ${activeSection === item.id ? "text-purple-500" : ""
              }`}>
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* social media icon */}
        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/Nikhil10510" target='_blank' className='text-gray-300 hover:text-purple-500'>
            <FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/nikhil-kumar-4918a6312" target='_blank' className='text-gray-300 hover:text-purple-500'>
            <FaLinkedin size={24} /></a>
        </div>

        <div className='md:hidden'>
          {
            isOpen ? (
              <IoCloseSharp className='text-3xl text-purple-500 cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <AiOutlineMenu className='text-3xl text-purple-500 cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }
        </div>
      </motion.div>

      {/* mobile menu item */}
      {isOpen && (
        <div className=' absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] opacity-75
          backdrop-blur-lg backdrop-filter z-50 rounded-lg shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-white'>
            {menu.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-purple-500 ${activeSection === item.id ? "text-purple-500" : ""
                }`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a href="https://github.com/Nikhil10510" target='_blank' className='text-gray-300 hover:text-purple-500'>
                <FaGithub size={24} /></a>
              <a href="https://www.linkedin.com/in/nikhil-kumar-4918a6312" target='_blank' className='text-gray-300 hover:text-purple-500'>
                <FaLinkedin size={24} /></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

