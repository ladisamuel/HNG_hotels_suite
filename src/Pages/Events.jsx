import React from 'react'
import Header from '../components/Header'
import records from '../Data/Events.json'

export default function Events() {
  return (
    <>
       <Header />
       <div id='eventsBg' className='py-[230px] items-center'>
          <div className='text-5xl font-bold text-center text-[white]'>EVENTS</div>
          {/* <hr className='mx-[500px] bg-[#ffd600] rounded-md h-[5px] border border-[yellow]' /> */}
       </div>
       <div className='bg-[#242020]'></div>
       <div id='eventsHero2'>
        <div className='text-center py-[60px] flex flex-col gap-[5px]'>
          <p className='text-[white] text-3xl font-semibold'>VIEW OUR UPCOMING EVENTS ACROSS ALL OUR BRANCHES</p>
          <hr className='border border-[yellow] h-[5px] bg-[#ffd600] mx-[550px] rounded-md' />
        </div>
        <div className='border w-[100%] px-[50px] py-[20px] flex gap-[40px] border-[yellow]'>
          {/* {
            records.map( records => {

              return(
                <div className='border-[2px] border-[grey] w-[30%]'>
                  <div>
                    <img src={records.img} className='h-[45vh]' alt="" />
                  </div>
                </div>
              )
            })
          } */}
          <div className='border-[2px] border-[grey] w-[30%] rounded-md'>
            <div id='eventsPic1a' className='h-[30vh] rounded-md'></div>
            <div className='bg-[grey] h-[30vh]'></div>
          </div>
          <div className='border-[2px] border-[grey] h-[60vh] w-[30%] '>
            <div id='eventsPic1b' className='h-[30vh] rounded-md'></div>
            <div className='bg-[grey] h-[30vh]'></div>
          </div>
          <div className='border-[2px] border-[grey] h-[60vh] w-[30%] '>
            <div id='eventsPic1c' className='h-[30vh] rounded-md'></div>
            <div className='bg-[grey] h-[30vh]'></div>
          </div>
        </div>
        <div id='eventPics2a' className=' border-[2px] border-[yellow] h-[50vh]'>
          <div clasName='h-[20vh] bg-[white]'></div>
        </div>
       </div>
       
    </>
  )
}
