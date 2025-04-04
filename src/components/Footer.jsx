import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-[black] h-[55vh] px-[120px] py-[40px] flex flex-col gap-[30px]'>
            <div className='flex gap-[70px]'>
                <div className='w-[20%] '>
                    <p className='text-[white] font-bold mb-[25px]'>Quick Links</p>
                    <p className='text-[white] font-thin'>About us</p>
                    <p className='text-[white] font-thin'>FAQ's</p>
                    <p className='text-[white] font-thin'>Help</p>
                    <p className='text-[white] font-thin'>My account</p>
                    <p className='text-[white] font-thin'>Create account</p>
                    <p className='text-[white] font-thin'>Contacts</p>
                </div>
                <div className='w-[20%] '>
                    <p className='text-[white] font-bold mb-[25px]'>Shops</p>
                    <p className='text-[white] font-thin'>Hotels</p>
                    <p className='text-[white] font-thin'>Restaurants</p>
                    <p className='text-[white] font-thin'>Bars</p>
                    <p className='text-[white] font-thin'>Events</p>
                    <p className='text-[white] font-thin'>Fitness</p>
                </div>
                <div className='w-[25%]  flex flex-col gap-[15px]'>
                    <p className='text-[white] font-bold mb-[15px]'>Contact us</p>
                    <p className='text-[white] font-thin'>No 21. Favours, Bodija, Ibadan,Nigeria.</p>
                    <p className='text-[white] font-thin'>+2348101725687</p>
                    <p className='text-[white] font-thin'>Emmanuelidus@gmail.com</p>
                </div>
                <div className='w-[25%] '>
                    <p className='text-[white] font-bold mb-[25px]'>Keep in Touch</p>
                    <div className=' flex '>
                        <input type="text" id='input2' placeholder='Your email'/>
                        <button className='bg-[#ffd600] px-[20px] text-[black] font-medium' id='button1'>Submit</button>
                    </div>
                    <div className='mt-[25px] flex flex-col gap-[15px]'>
                        <p className='font-medium text-[white] text-xl'>Follow Us</p>
                        <div className='flex gap-[25px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='flex gap-[15px]' id='footerBottom'>
                <p className='text-[white] font-medium text-lg'>Terms and Conditions</p>
                <p className='text-[white] font-medium text-lg'>Privacy</p>
                <p className='text-[white] font-medium text-lg'>c 2020 HNG Hotels and Suites</p>
            </div>    
        </div>
    </>
  )
}
 