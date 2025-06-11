import React from 'react'
import avatar from "../assets/mobile-app.svg"
import { motion } from 'motion/react'

function Homepage() {
  return (
    <div id='about' className= 'mt-16 text-white py-20 px-[7vw] md:px-[10vw] lg:px-[12vw] bg-skills-gradient clip-path-custom2'>
      <motion.img
      loading='eager'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        viewport={{ once: true }}
        src={avatar} className='mx-auto w-4/5 md:w-1/3 lg:w-1/2' />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true,amount: 0.8 }}
        className='container mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5,
           }}
           viewport={{ once: true ,amount: 0.8}}
          className='text-4xl md:text-5xl flex flex-col gap-1 font-bold mb-10 mt-8'>Hello Everyone
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true,amount: 0.8 }}
            className='text-purple-500'>It's Nikhil Kumar</motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true,amount: 0.8 }}
          className='text-gray-400 text-xl mb-8'>I am ECE Undergraduate at BIT,Mesra <br />
          I am Web Developer and a Competitive Programmer</motion.p>
         {/* Resume */}

         <motion.a 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, type: "spring", stiffness: 80 }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: true,amount: 0.8 }}
         href=""
         target='_blank'
         className='inline-block text-white py-4 px-6 rounded-full mt-1 font-bold transition duration-300 transform
         hover:scale-105'
         style={{
          background:'linear-gradient(90deg,#8245ec,#a855f7)',
          boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
         }}>DOWNLOAD CV
         </motion.a>
      </motion.div>
    </div>
  )
}

export default Homepage
