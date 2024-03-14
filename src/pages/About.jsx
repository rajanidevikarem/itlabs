import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div className='w-full leading-loose'>
         <img className="w-full  h-[550px] object-fill left-0" src="images/hero/about.png" alt='Homeheroimage'/>
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
        At ITLABS INC, we understand the challenges businesses face in today's dynamic technological landscape. That's why we offer a comprehensive suite of IT solutions and staffing services designed to help you optimize your operations, achieve your goals, and gain a competitive edge.
          </p>
        </div>
<div className='py-16 px-10 lg:px-28 leading-relaxed'>
        <div className='w-full grid m-auto lg:grid-cols-3 gap-4 py-8'>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className='w-full h-28'><img className="mx-auto w-[100px]" src="images/audience.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-2xl lg:text-3xl font-bold text-center py-4'>Strategic IT Consulting</h1>
              <p className='py-4'>Our experienced consultants work closely with you to understand your unique business objectives and develop a customized IT roadmap that aligns with your long-term goals.
</p>
             </div>
         </div>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className='w-full h-28'><img className="mx-auto w-[100px]" src="images/Infrastrucure.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-2xl lg:text-3xl font-bold text-center py-4'>Smart IT Infrastructure</h1>
              <p className='py-4'>From cloud solutions to network security, we ensure your IT infrastructure runs smoothly and efficiently, allowing you to focus on what matters most - your core business.
</p>
             </div>
         </div>
         <div className='flex flex-col h-full justify-center border rounded-2xl border-slate-200 px-4 shadow-md'>
             <div className='w-full h-28'><img className="mx-auto w-[100px]" src="images/human-resources.png" alt="card1"/></div>
             <div className=''>
              <h1 className='text-2xl lg:text-3xl font-bold text-center py-4'>Expert IT Staffing</h1>
              <p className='py-4'>Our dedicated team helps you find the perfect IT talent, whether you need temporary or full-time staffing solutions. We source, screen, and select highly qualified candidates, saving you valuable time and resources.
</p>
             </div>
         </div>
       </div>
       </div>

       <div className='w-full  m-auto px-10 lg:px-28 py-16 grid lg:grid-cols-2 gap-4  bg-gray-50'>
  {/* left Side */}
        <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl lg:text-5xl font-bold py-2 text-center lg:text-left'>What sets us apart</h3>
        <div>
          <ul>
            <li className='flex justify-between items-start my-6'>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Global Expertise, Local Delivery</h5>
              <p>We leverage our international presence and expertise to deliver cost-effective IT solutions tailored to your specific needs.</p>
           </div>
            </li>
            <li className='flex justify-between items-start my-6'>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Proven Track Record of Success</h5>
              <p>We have a strong reputation for delivering innovative solutions, helping numerous clients achieve success
              </p>
           </div>
            </li>
            <li className='flex justify-between items-start my-6 '>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Passionate and Experienced Team</h5>
              <p>Our team of highly skilled professionals is dedicated to providing exceptional service and exceeding your expectations.</p>
           </div>
            </li>
       
          </ul>
        </div>
   
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols grid-rows-6'>
        <img className='row-span-6 object-cover w-full h-full  '
          src="images/unquie.png" alt='/' />
        
      
      
        
      </div>
    
  
    </div>
    <div className='my-2.5  py-16 px-10 lg:px-28 text-center'>
      <h2 className='text-3xl md:text-4xl text-center py-8  prose'>
        <span className='leading-[3rem]'>   To discuss your unique needs and see <br/>
      how we can help you achieve your goals.</span>
    
      </h2>
      <Link to="/Contactus"> <button className= 'text-black px-16 py-4 rounded-2xl my-5 bg-lime-500 font-bold'>Contact Us</button> </Link>
    </div>
      </div>
  )
}

export default About