import React from 'react';
const Home = () => {
  return (
    <div className='w-full leading-loose'>

      <img className="w-full  h-[550px] object-cover left-0" src="images/hero/home.png" alt='Homeheroimage'/>
      <div className='bg-black/50 absolute left-0 w-full'/>

     <div className='absolute w-full h-[550px] flex flex-col justify-center  text-white top-0 text-center lg:text-left' >
      <div className='md:left-[10%] max-w-[1140px] m-auto absolute p-4'>
      <p className='my-2 text-white text-center lg:text-left'>
      Your one-stop shop for value-added and cost-effective IT solutions.</p>
      <h1 className='ont-bold my-5 text-white text-4xl lg:text-5xl py-2 text-center lg:text-left lg:leading-normal'>Transforming your IT into a 
<br/>strategic advantage.</h1>
<button className= 'text-black p-4 rounded-2xl my-5 bg-lime-500 font-bold sm:text-center'>Get a free Consultation</button>

     </div>
       </div>
        
        <div>
        <p className='my-2.5 text-lg py-16 px-10 lg:px-28'>
          ITLABS INC is a MI based Technology Solutions and IT staffing Company with Global access and nationwide delivery capability.An international class work place, a highly motivated work force, a mature management team and an impressive list of clients, have all quickly put ITLABS amongst India's serious players in Information Technology.
          </p>
        </div>

        <div className='w-full  m-auto px-10 lg:px-28 py-16 grid lg:grid-cols-2 gap-4  bg-gray-50'>
  {/* left Side */}
        <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl md:text-5xl font-bold py-2'>Who We Are</h3>
        <p className='text-lg py-6'>
        As a one-stop technology shop, ITLABS provides an array of value added and cost-effective solutions & services to help its customers translate their IT investments to meet their strategic business needs. Operations are organized into Centralized Systems & Technology Centers – Systems Development Center, Systems Quality Center and BPO Center so that customer- focus is constantly maintained and commitments are always met.
        </p>
        <p className='text-lg pb-6'>
        A world class work place, a highly motivated work force, a mature management team and an impressive list of clients, have all quickly put ITLABS most preferred player in Information Technology.
        </p>
        <div>
         
        </div>
      </div>
      {/* right Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whoweare1.jpg" alt='/' />
        
        <img
          className='row-span-3 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whoweare2.png"
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2 rounded-[36px]'
          src="images/whoweare3.jpg"
          alt='/'
        />
        
      </div>
    
  
    </div>
       
    <div>
        <p className='my-2.5 text-lg py-16 px-10 lg:px-28 lg:text-left'>
        The vision of ITLABS is to be a world class Information Technology company, by providing Loyal Affordable Business Services across the world. 

          </p>
        </div>
        <div className='py-16 px-10 lg:px-28 bg-gray-50'>
        <h1 className='text-4xl md:text-5xl font-bold py-2'>Our Clients</h1>
        <p className='text-lg py-2'>Our growth comes from the unique business model and integration of people, processes and technology. </p>
       <div className='grid grid-cols-4 gap-4 py-8'>
         <img src="images/client1.png" alt="client1"/>
         <img src="images/client2.png" alt="client1"/>
         <img src="images/client3.png" alt="client1"/>
         <img src="images/client4.png" alt="client1"/>

       </div>
        </div>
        </div>
  )
}

export default Home