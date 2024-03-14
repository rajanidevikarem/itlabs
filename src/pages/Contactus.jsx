import React from 'react'

const Contactus = () => {
  return (
    <div className='w-full leading-loose'>
       <img className="w-full  h-[550px] object-fill left-0" src="images/hero/contact.png" alt='Homeheroimage'/>
      <div className='bg-black/50 absolute left-0 w-full'/>
      <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0'>
      <div className='md:left-[10%] max-w-[1140px] m-auto absolute p-4'>
      <p className='my-2 text-white text-center lg:text-left' >
      customized IT solutions tailored to your specific needs.</p>
      <h1 className='font-bold my-5 text-white text-4xl lg:text-5xl py-2 text-center lg:text-left lg:leading-normal'>Empowering Businesses with Cutting-Edge IT Solutions and Staffing</h1>
{/* <button className= 'text-black p-4 rounded-2xl my-5 bg-lime-500 font-bold'>Get a free Consultation</button> */}

     </div>
       </div>
       <div>
        <p className='my-2.5 text-lg py-16 px-10 lg:px-28 md:leading-relaxed'>
        ITLABS is here to help you achieve your business goals.  We encourage you to reach out to us to discuss your specific needs and explore how our solutions can empower your success.
          </p>
        </div>


        <div className='w-full  m-auto px-10 lg:px-28 py-16 grid lg:grid-cols-2 gap-4  bg-gray-50'>
  {/* left Side */}
        <div className='flex flex-col h-full justify-center pr-5'>
        <h3 className='text-4xl lg:text-5xl font-bold py-2 text-center '>Address</h3>
        <div>
          <ul>
            <li className='flex justify-between items-start my-6'>
          
                <div >
              
              <p className='px-60 '>ITLABS, Inc <br/>12410 Milestone Center Dr,<br/>Suite 600<br/>Germantown, MD 20876</p>
           </div>
            </li>
           
        
       
          </ul>
        </div>
   
      </div>
      {/* right Side */}
      <div className='grid grid-cols grid-rows-6'>
        <img className='row-span-6 object-cover w-full h-full  '
          src="images/contact.png" alt='/' />
        
      
      
        
      </div>
    
  
    </div>
    <div>
        <p className='my-2.5  py-16 px-10 lg:px-28 text-center md:leading-relaxed text-3xl md:text-4xl font-bold leading-[3rem]'>
        Need to get in touch with us? <br/>find the department email you'd like to contact below
          </p>
        </div>

        <div className='py-16 px-10  leading-relaxed'>
        <div className='w-full grid m-auto lg:grid-cols-3 gap-4 py-8'>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className='h-28'><img className="w-[100px] mx-auto" src="images/demo.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-3xl font-bold text-center py-4'>Demo</h1>
              <p className='py-4 text-center'>investorservices@itlabsinc.com
</p>
             </div>
         </div>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className=' h-28'><img className="mx-auto w-[100px]" src="images/information.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-3xl font-bold text-center py-4'>Information</h1>
              <p className='py-4 text-center'>info@itlabsinc.com
</p>
             </div>
         </div>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className=' h-28'><img className="mx-auto w-[100px]" src="images/carrer.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-3xl font-bold text-center py-4'>Carrer</h1>
              <p className='py-4 text-center'>careers@itlabsinc.com
</p>
             </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Contactus