import React from 'react'
import { FaInstagram,FaLinkedin,FaTelegram} from "react-icons/fa";

function Footer() {

// smooth scroll function
const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
        <div className='container mx-auto text-center'>
            <h2 className='text-xl font-semibold text-purple-500'>Nikhil Kumar</h2>
            {/* Navigation Links */}

            <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                {[
                    {name:"About",id:"about"},
                    {name:"Skills",id:"skills"},
                    {name:"Education",id:"education"},
                    {name:"Projects",id:"projects"},
                ].map((item,index)=>(
                    <button key={index} onClick={()=>handleScroll(item.id)}
                    className='hover:text-purple-500 text-sm sm:text-base my-1'>{item.name}</button>
                ))}
            </nav>

            {/* social media icons */}

            <div className='flex flex-wrap justify-center space-x-4 mt-6'>
                {[
                    {icon:<FaInstagram/>,link:"https://www.instagram.com/nikhil_1656/"},
                    {icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/nikhil-kumar-4918a6312"},
                    {icon:<FaTelegram/>,link:"http://t.me/Nikhilkumarr23"},
                ].map((item,index)=>(
                    <a key={index}
                    href={item.link}
                    target='_blank'
                    className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Copyright text */}
            <p className='text0sm text-gray-400 mt-6'>© 2025 Nikhil Kumar.All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
