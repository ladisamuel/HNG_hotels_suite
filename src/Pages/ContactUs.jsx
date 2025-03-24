import React from 'react'
import 'primeicons/primeicons.css';
import MyButton from '../components/trying/MyButton' 
import Header from '../components/Header'
import Footer from '../components/Footer'       

export default function ContactUs() {
  return (
    <>
        <Header />
        <div id='contactUsHero'>
            <p className='text-center text-[white] font-semibold text-5xl pt-[200px]'>Contact Us</p>
        </div>
        {/* Header name */}
        {/* Info container */}
        <div className='flex w-[100%] '> 
            {/* first Info  */}
        <div className=' w-[50%]'>
       <div className='bg-[#ffd600] h-[100vh] text-center py-[20px] px-[60px] text-sm font-semibold'>
            <p className=' font-bold mb-[2px] text-3xl pt-[30px]'>Get in touch</p>
            <hr className='border border-[black] bg-[black] mb-[20px] py-[1.1px] rounded-md mx-[200px]' />
            <p className='mb-4'>We Are Also Active In Social Media. You Can Find Us <br /> On Below Address</p>
            {/* first icon */}
            <div className='mb-4 flex flex-col'>
                <i className='pi pi-map-marker mb-2 ' style={{ fontSize: '1.4rem'}}></i>
                <p>No 21.Favors,Bodija, <br />Ibadan,Nigeria.</p>
            </div>
            {/* second icon */}
            <div className='mb-7'>
                <i className='pi pi-clock font-bold mb-2' style={{ fontSize: '1.4rem'}}></i>
                <p>Opening Hour 8:00AM-10:00PM<br />Monday-Sunday</p>
            </div>
            {/* third */}
            <div className='mb-[40px] flex flex-col items-center'>
                <p>Call. +2448101725687</p>
                <p>Email.sanyaoluboluwatife9@gmail.com</p>
                {/* container icons */}
                <div className='mt-4 flex items-center  gap-[7px]'>
                    <i className='pi pi-facebook px-2 text-xl'></i>
                    <i className='pi pi-youtube px-2 text-xl'></i>
                    <i className='pi pi-google px-2 text-xl'></i>
                    <i className='pi pi-linkedin px-2 text-xl'></i>
                    <i className='pi pi-twitter px-2 text-xl'></i>
                </div>
            </div>
       </div>
        </div>

        {/* second Info */}
        <div className=' bg-black text-white text-xs  px-[60px] w-[50%]'>
            <p className='font-semibold mb-[6px] text-3xl pt-[30px] text-center'>Send a message</p>
            <hr className='mb-[10px] bg-[#ffd600] border border-[#ffd600] py-[1.1px] mx-[200px] rounded-md ' />
            <p className=' text-center text-[0.9rem] text-[grey] mb-[3px] '> Do You Have Anything In Your Mind To Tell Us? Please Don't</p>
            <p className='text-center text-[0.9rem] text-[grey]'>Hesitate to Get In Touch with Us via our Contact Form</p>
            <form>
                {/* Names form container */}
                <div className=' flex gap-6 mt-6'>
                    <div className='w-[100%]'>
                    <p className='mb-3 text-[grey]'>First Name</p>
                    <input type="text" placeholder='' className='bg-white  h-[50px] text-black w-[100%]' />
                    </div>
                <div className='w-[100%]'>
                <p className='mb-3 text-[grey] '>Last Name</p>
                <input type="text" placeholder='' className='bg-white  h-[50px] text-black w-[100%]' />
                </div>
                
                </div>
                {/* email  */}
                <div className='mt-4'>
                <p className='mb-3 text-[grey]'>Email</p>
                <input type="text" placeholder='' className='bg-white  w-[100%] h-[50px] text-black' />
                </div>
                {/* message  */}
                <div className='mt-4'>
                <p className='mb-3 text-[grey]'>Message</p>
                <input type="text" placeholder='' className='bg-white  w-[100%] h-[20vh] text-black' />
                </div>
               {/* Button Link */}
               <div className='mt-[20px]' > 
                <MyButton 
                text='Submit'
                width='w-[100%]'
                />
               </div>
            </form>
        </div>
        </div>
        <Footer /> 
    
     
    </>
  )
}
