import React from 'react'

export default function LandingPage1() {
  return (
    <>
        {/* Main */}
<div className='bg-black text-white'>
             {/* Header  */}
    <div className='text-center mb-[80px]'>
        <p className='font-bold mt-[50px]'>WHAT CAN YOU DO AT HOTEL HNG?</p>
        <p className='text-[30px] font-semibold'>AWARD WINNING HOTEL</p>
        <hr  className='border border-[#ffd600] w-[10%] h-[5px] rounded-md bg-[#ffd600] mx-[590px] mt-[5px]'/>
    </div>
        {/* Image page */}
    <div className='flex gap-4 mt-7 justify-center mb-[50px]'>
        <div className='bg-[#ffd600] h-[50vh] rounded w-[25%]'>
            <img src="../public/img/section 7.jfif " alt="no image yet" className='h-[40vh]' />
        </div>
        <div className='bg-[#ffd600] h-[50vh] rounded w-[25%]'>
            <img src="../public/img/section 8.jfif " alt="no image yet" className='h-[40vh]' />
        </div>
        <div className='bg-[#ffd600] h-[50vh] rounded w-[25%]'>
            <img src="../public/img/section 3.jfif " alt="no image yet" className='h-[40vh]' />
        </div>

    </div>
      <div className='flex gap-3 justify-center mb-[40px] pb-[50px]' >
        <p className='border border-white rounded-full w-2 h-2 font-bold bg-[#ffd600]'></p>
        <p className='border border-white rounded-full w-2  font-bold '></p>
        <p className='border border-white rounded-full w-2 font-bold '></p>
      </div>
        </div>
   
    </>
  )
}

