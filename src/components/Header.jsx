import React from 'react'
export default function Header() {
  return (
      <>
        <div className='bg-[#242424] px-[50px] py-[30px] flex flex-col gap-[15px]'>
          <div className='flex justify-between'>
            <div className='flex gap-[5px] items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="grey" class="bi  bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
              <p className='text-[grey] text-sm'>Bodija Ibadan, Nigeria</p>
            </div>
            <div className='flex gap-[50px] items-center'>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[grey]'>Friday</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-cloud-fog" viewBox="0 0 16 16">
                  <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/>
                </svg>                 <p></p>
              </div>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[grey]'>Saturday</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-cloud-fog" viewBox="0 0 16 16">
                  <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/>
                </svg>
                <p></p>
              </div>
              <div className='flex gap-[10px] items-center'>
                <p className='text-[grey]'>Sunday</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-cloud-fog" viewBox="0 0 16 16">
                  <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973M8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div className=' flex justify-between items-center'>
            <div className=''>
              <p className='text-[yellow] hover hover:cursor-pointer text-2xl'>HNG <span className='text-4xl'>H</span>otels and suits</p>
            </div>
            <div>
              <ol className='flex gap-[60px] items-center'>
                <div className='flex flex-col gap-[5px] items-center'>
                <a href="/LandingPage">
                  <li className='text-[#ffd600]'>HOME</li>
                </a>
                <hr className='border border-[yellow] w-[70px] h-[3px] bg-[yellow] rounded-md' />
                </div>
                <a href="/RoomRates">
                  <li className='text-[grey] hover:text-[#ffd600] font-bold '>ROOMS & SUITS</li>
                </a>
                <a href="/Events">
                  <li className='text-[grey] hover hover:cursor-pointer font-bold hover:text-[#ffd600] '>EVENTS</li>
                </a>
                <a href="/Facilities">
                  <li className='text-[grey] hover:text-[#ffd600] font-bold '>FACILITIES</li>
                </a>
                <a href="/ContactUs">
                  <li className='text-[grey] font-bold hover:text-[#ffd600]'>CONTACT US</li>
                </a>
                <button className='text-[#ffd600] font-semibold hover:bg-[#ffd600] hover:border-[black] hover:text-[black] hover:font-semibold border border-[yellow] px-[5px] py-[7px] rounded-md'>BOOK NOW</button>
              </ol>
            </div>
          </div>
        </div>
      </>

  )
}
