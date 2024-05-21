import React from 'react'

export default function Header() {
  return (
      <>
        <div className='h-[18vh] bg-[black] px-[50px] py-[30px] flex justify-between items-center '>
          <div className=''>
            <p className='text-[yellow]'>HNG <span className='text-4xl'>H</span>otels & suit</p>
          </div>
          <div>
            <ol className='flex gap-[60px] items-center'>
              <div className='flex flex-col gap-[5px] items-center'>
              <li className='text-[yellow]'>HOME</li>
              <hr className='border border-[yellow] w-[70px] h-[3px] bg-[yellow] rounded-md' />
              </div>
              <li className='text-[grey] font-bold '>ROOMS & SUITS</li>
              <li className='text-[grey] font-bold '>EVENTS</li>
              <li className='text-[grey] font-bold '>FACILITIES</li>
              <li className='text-[grey] font-bold '>CONTACT</li>
              <button className='text-[yellow] border border-[yellow] px-[10px] py-[7px] rounded-md'>BOOK NOW</button>
            </ol>
          </div>
        </div>
      </>

  )
}
