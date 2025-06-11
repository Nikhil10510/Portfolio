import React from 'react'
import {FaCss3,FaHtml5,FaJs,FaReact,FaNodeJs} from "react-icons/fa"
import {SiMongodb,SiTailwindcss,SiExpress} from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";
import { motion } from 'motion/react';

function Skills() {
  return (
    <div id='skills' className='p-10 sm:p-10 md:p-24 lg:p-24  text-white  clip-path-custom bg-skills-gradient '>
      <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center'>Skills</h1>
        <div className='w-20 h-1 bg-purple-500 mx-auto mt-4'></div>
      </div>

      <div className='flex flex-col md:flex-row  sm:text-center md:items-baseline md:gap-x-12 lg:gap-x-20 gap-y-8 md:gap-y-0 mt-8 md:mt-12'>
        <div className='md:flex-1 text-white text-center md:text-left md:text-balance mt-4 md:mt-8'>
          <p className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 md:mb-6 leading-normal'>My Area of Expertise</p>
          <p className='text-lg sm:text-xl md:text-2xl leading-snug text-gray-300'>These are the area in which i have<br/>
            expertise and experience</p>
        </div>

       <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }} // Reduced delay for quicker appearance
          className='w-full md:flex-1 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 p-4 md:p-8 lg:p-12 rounded-lg mt-4 md:mt-20' // Responsive gaps and padding
          // Removed md:2/5 (likely typo), removed ml-20, removed gap-y-10 (handled by gap-*)
        >
          {[
            { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML' },
            { icon: <FaCss3 color="#1572B6" size={50} />, name: 'CSS' }, // Corrected CSS3 color hex
            { icon: <FaJs color="#F7DF1E" size={50} />, name: 'JavaScript' },
            { icon: <FaReact color="#61DAFB" size={50} />, name: 'React' },
            { icon: <SiTailwindcss color="#06B6D4" size={50} />, name: 'Tailwind CSS' }, // Updated Tailwind color
            { icon: <SiExpress color="#404d59" size={50} />, name: 'Express.js' }, // Adjusted Express color for better visibility on dark
            { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB' },
            { icon: <FaNodeJs color="#339933" size={50} />, name: 'Node.js' },
            { icon: <TbBrandCpp color="#00599C" size={50} />, name: 'C++' },
          ].map((skill, index) => (
            <div key={index} className='group p-2 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 flex flex-col items-center rounded-2xl w-25 h-25 justify-center' title={skill.name}> {/* Added tooltip, fixed size for consistency */}
              {skill.icon}
              <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors duration-300">{skill.name}</span> {/* Added skill name */}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Skills
