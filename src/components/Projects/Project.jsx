import React, { useState } from 'react'
import info from './Info'
import { IoCloseSharp } from "react-icons/io5";

function Project() {

const [selectedProject,setSelectedProject]=useState(null)    
const handleOpenModel=(Project)=>{
    setSelectedProject(Project)
}

const handleCloseModel=(project)=>{
    setSelectedProject(null)
}

  return (
    <section id='projects' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative bg-skills-gradient'>
        {/* section title */}
        <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white'>Projects</h2>
            <div className='w-24 h-1 bg-purple-500 mx-auto mt-4'></div>
            <p className='text-gray-400 mt-4 text-lg font-semibold'>A showcase of the projects I have worked on,
                highlighting my skills in various technologies</p>
        </div>

        {/* project grid */}

        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
            {info.map((Project)=>(
                <div key={Project.id} 
                onClick={()=>handleOpenModel(Project)}
                className='border-white bg-gray-900 backdrop-blur-md rounded-2xl
                shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2
                transition-transform duration-300'>
                    <div className='p-3'>
                        <img src={Project.image} alt=""  className='w-full h-48 object-cover rounded-xl '/>
                    </div>
                    <div className='p-6'>
                        <h3 className='text-2xl font-bold mb-2 text-white'>{Project.title}</h3>
                        <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>{Project.description}</p>
                        <div className='mb-4'>{Project.tags.map((tag,index)=>(
                            <span key={index} className='inline-block bg-[#251f38] tetx-xs font-semibold text-purple-500
                            rounded-full px-2 py-1 mr-1 mb-2'>{tag}</span>
                        ))}</div>
                    </div>
                </div>
            ))}
        </div>


        {/* Model Container */}

        {selectedProject &&(
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-3'>
                <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[100%] max-w-lg overflow-hidden relative
                 max-h-[calc(100vh-theme(spacing.6))] flex flex-col'>
                    <div className='flex justify-end p-3'>
                        <button onClick={handleCloseModel} className='text-white text-xl font-bold hover:text-purple-500'>
                            <IoCloseSharp size={30}/>
                        </button>
                    </div>
                    <div className='flex-grow overflow-y-auto themed-scrollbar'>
                    <div className='flex flex-col'>
                            <div className='flex w-full justify-center bg-gray-900 px-3'>
                                <img src={selectedProject.image} alt="" className='lg:w-full w-[95%] object-contain
                                rounded-xl shadow-2xl max-h-[50vh]' />
                            </div>
                            <div className='p-2 lg:p-4'>
                                <h3 className='lg:text-2xl font-bold text-white mb-2 text-md'>{selectedProject.title}</h3>
                                <p className='text-gray-400 mb-3 lg:text-base text-xs'>{selectedProject.description}</p>
                                <div className='flex flex-wrap gap-2 mb-6'>
                                    {selectedProject.tags.map((tag,index)=>(
                                        <span key={index}
                                        className='bg-[#251f38] text-xs font-semibold text-purple-500
                            rounded-full px-2 py-1'>{tag}</span>
                                    ))}
                                </div>
                                <div className='flex gap-4 '>
                                        <a href={selectedProject.github} taregt='_blank' className='w-1/2 bg-gray-800
                                        hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl
                                        lg:text-xl text-sm font-semibold text-center'>View Code</a>

                                        <a href={selectedProject.webapp} taregt='_blank' className='w-1/2 bg-purple-600
                                        hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl
                                        lg:text-xl text-sm font-semibold text-center'>View Live</a>
                                    </div>
                                    
                            </div>
                    </div>
                   </div> 
                </div>
            </div>
        )}
    </section>
  )
}

export default Project
