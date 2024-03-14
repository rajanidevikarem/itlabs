import React, { useState } from 'react'
import CustomAccordion from "../components/Accordian";

import { DATA_LIST } from "../components/data";

const Currentopenings = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId(accordionId === openAccordionId ? null : accordionId);
  };

  return (
    <div className='w-full leading-loose'>
      <img className="w-full h-[550px] object-cover left-0" src="images/hero/carrer.png" alt='Homeheroimage'/>
      <div className='bg-black/50 absolute left-0 w-full'/>

      <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0'>
        <div className='md:left-[10%] max-w-[1140px] m-auto absolute p-4'>
          <p className='my-2 text-white text-center lg:text-left' >
            customized IT solutions tailored to your specific needs.
          </p>
          <h1 className='font-bold my-5 text-white text-4xl lg:text-5xl py-2 text-center lg:text-left lg:leading-normal'>Jobs</h1>
        </div>
      </div>
        
      <div>
        <p className='my-2.5 text-lg py-16 px-10 text-center md:leading-relaxed'>
          At ITLABS INC, we understand the challenges businesses face in today's dynamic technological landscape. That's why we offer a comprehensive suite of IT solutions and staffing services designed to help you optimize your operations, achieve your goals, and gain a competitive edge.
        </p>
      </div>
      
      <div>
        {DATA_LIST.map((item) => (
          <CustomAccordion 
            title={item.title} 
            date={item.date}
            jobcode={item.jobcode}
            location={item.location}
            description={item.description} 
            skills={item.skills}
            key={item.id} 
            isOpen={openAccordionId === item.id}
            toggleAccordion={() => handleAccordionClick(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Currentopenings
