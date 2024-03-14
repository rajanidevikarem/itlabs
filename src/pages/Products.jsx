import React from 'react'
import {Link} from 'react-router-dom';
const Products = () => {
  return (
    <div className='w-full leading-loose'>
         <img className="w-full  h-[550px] object-cover left-0" src="images/hero/products.png" alt='Homeheroimage'/>
      <div className='bg-black/50 absolute left-0 w-full'/>

     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0'>
      <div className='md:left-[10%] max-w-[1140px] m-auto absolute p-4'>
      <p className='my-2 text-white text-center lg:text-left' >
      comprehensive development services from custom applications </p>
      <h1 className='font-bold my-5 text-white text-4xl lg:text-5xl py-2 text-center lg:text-left lg:leading-normal'>Streamline Your Operations and Boost Efficiency with PSA Software</h1>
{/* <button className= 'text-black p-4 rounded-2xl my-5 bg-lime-500 font-bold'>Get a free Consultation</button> */}

     </div>
       </div>
        
        <div>
        <p className='my-2.5 text-lg py-16 px-10 lg:px-28 md:leading-relaxed'>
        Develop game-changing products and streamline operations with IT LABS comprehensive software development services.
<br/>We offer a wide range of services to meet your unique needs:
          </p>
        </div>
<div className='pb-16 px-10  leading-relaxed'>
     <div className='w-full grid lg:grid-cols-2 gap-4'>
      <div className='flex flex-col justify-center'>

    
      <img src="images/healthcare.png" alt="healthcare"/>
      <div className='px-4 py-4 border rounded-b-3xl border-slate-200 shadow-md'>
      <h1 className='text-2xl lg:text-3xl font-bold'> Healthcare</h1>
      <p className='py-4'>Our ready-to-deploy suite helps healthcare professionals deliver optimal care, currently undergoing pilot testing.</p>
      </div>
      </div>

      <div className='flex flex-col justify-center'>

    
<img src="images/itservices.png" alt="healthcare"/>
<div className='px-4 py-4 border rounded-b-3xl border-slate-200 shadow-md'>
<h1 className='text-2xl lg:text-3xl font-bold'> Professional Services Automation</h1>
<p className='py-4'>Designed for small and mid-sized businesses, our PSA suite is currently under development to help you manage your workforce and maximize profits.</p>
</div>
</div>

<div className='flex flex-col justify-center mt-12 '>

    
<img src="images/applicationdev.png" alt="healthcare" className=''/>
<div className='px-4 py-4 border rounded-b-3xl border-slate-200 shadow-md'>
<h1 className='text-2xl lg:text-3xl font-bold'> Custom Application Development</h1>
<p className='py-4'>
 We bridge the gap between your specific needs and off-the-shelf software limitations by creating custom applications that perfectly match your requirements.
</p>
</div>
</div>
<div className='flex flex-col justify-center mt-12'>

    
<img src="images/systemsupport.png" alt="healthcare" className='border rounded-t-3xl border-slate-200 shadow-md'/>
<div className='px-4 py-4 border rounded-b-3xl border-slate-200 shadow-md'>
<h1 className='lg:text-4xl font-bold'> Systems Support and Maintenance</h1>
<p className='py-4'>
Our dedicated team provides ongoing support and maintenance for your existing software systems, ensuring optimal performance and security.
</p>
</div>
</div>
     
     </div>
       </div>
       <div className='w-full  m-auto px-10 lg:px-28 py-16 grid lg:grid-cols-2 gap-4  bg-gray-50'>
  {/* left Side */}
        <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl lg:text-5xl font-bold py-2 text-center lg:text-left'>Why Choose us</h3>
        <div>
          <ul>
            <li className='flex justify-between items-start my-6'>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Experienced Team</h5>
              <p>Our team of certified professionals combines extensive expertise in Java/Microsoft technologies, database management, and diverse industry domains like banking, retail, and financial services.</p>
           </div>
            </li>
            <li className='flex justify-between items-start my-6'>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Proven Track Record</h5>
              <p>We have a strong reputation for delivering innovative solutions, helping numerous clients achieve success.
              </p>
           </div>
            </li>
            <li className='flex justify-between items-start my-6 '>
            <div className='py-4 px-4 items-center my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
</div>
                <div >
                <h5 className='text-2xl py-4'> Collaborative Approach</h5>
              <p>We work closely with clients to understand clients needs, assemble the perfect development team, and tailor our services to your specific project requirements.s.</p>
           </div>
            </li>
       
          </ul>
        </div>
   
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whychoose/1.jpg" alt='/' />
        
        <img
          className='row-span-3 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whychoose/2.jpg"
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whychoose/3.png"
          alt='/'
        />
        
      </div>
    
  
    </div>

    <div className='my-2.5  py-16 px-10 lg:px-28 text-center'>
    <h2 className='text-3xl md:text-4xl text-center py-8  prose'>
        <span className='leading-[3rem]'>   Ready to take your software to the next level?<br/>
 To discuss your project and see <br/> how we can help you achieve your goals.</span>
    
      </h2>
      
      <Link to="/Contactus"> <button className= 'text-black px-16 py-4 rounded-2xl my-5 bg-lime-500 font-bold'>Contact Us</button> </Link>
    </div>
      </div>
  )
}

export default Products