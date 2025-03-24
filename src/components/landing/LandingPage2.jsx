import React from 'react'
import records from '../records.json'

export default function LandingPage2() {
  return (
    <>
          {/* Main  */}
    <div className='border border-[blue] w-[100%]'>
        <p className='text-[30px] font-bold text-center mb-5'>BEST ROOMS</p>
        <p className='text-center font-semibold mb-4'>SEE OUR TOP PICK OF CITIES VISITED BY MOST GUESTS</p>
        <hr  className='border border-[#ffd600] w-[10%] h-[5px] rounded-md bg-[#ffd600] mx-[610px] mt-[5px]'/>
          {/* My pages  */}
          <div className='flex w-[100%]'>
          {
            records.map( record => {
              return(
                <div className='border p-5 w-[30%] text-center mx-[20px]'>
                  <div className=' bg-[#0b0b0b] text-white p-8' key={record.id} >
                    <img src={record.img} alt="unavailable" className=' mb-5 ' />
                    <p className='font-semibold text-[20px] mb-3'> {record.topic} </p>
                    <p className='text-sm mb-6'>{ record.content} </p>
                    <button className='border border-[#ffd600] text-[#ffd600] px-[20px] rounded font-semibold '>{ record.butt} </button>
                  </div>
                </div>
               )
            })
          }
          </div>

          {/* <div className=''>
            <div className=''>
              <img src="" alt="" className='' />
              <p className=''> </p>
              <p className=''> </p>
              <button className=''> </button>
            </div>
          </div> */}
    </div>
    </>
  )
}
