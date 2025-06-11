import React from 'react'
import EducationElements from './EducationElements'

function Education() {
  return (
    <section id="education" className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom2'>
     {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Education timeline */}
      <div className='relative'>
        {/* vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform sm:-translate-x-1/2  w-1 bg-white h-full"></div>

        {/* education entries */}
        {EducationElements.map((education,index)=>(
            <div key={education.id}
            className={`w-full flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 1 ? "sm:justify-end" : "sm:justify-start"
            }`}>
             {/* Timeline Circle */}
              <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 translate-y-11 sm:translate-y-0">
              <img
                src={education.img}
                className="w-full h-full object-cover rounded-full"
              />
            </div> 

             {/*content section */}
             <div className={`w-full sm:max-w-sm p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 1 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-5 sm:mr-5 ml-8 transform transition-transform duration-300 hover:scale-105  `}>
                {/* Flex container for image and text */}
                <div className="flex items-start space-x-4 sm:space-x-6">
                    {/* Company Logo/Image */}
                    <div className="w-8 h-8 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={education.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* description */}
                <div className='flex flex-col justify-between'>
                    <div>
                        <h3 className='text-xl sm:text-2xl font-semibold text-white -mt-2'>{education.title}</h3>
                        <h4 className='text-md sm:text-sm text-gray-300'>{education.location}</h4>
                    </div>

                    <p className='text-sm text-gray-400 mt-1'>{education.date}</p>
                    <p className='mt-3 text-gray-400'>{education.description}</p>
                </div>
                </div> 
              </div>
            </div>
        ))}
      </div>

    </section>
  )
}

export default Education
