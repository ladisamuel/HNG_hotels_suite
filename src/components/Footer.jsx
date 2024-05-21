import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-[black] h-[50vh] px-[120px] py-[40px] flex gap-[70px]'>
            <div className='w-[20%] border border-[yellow]'>
                <p className='text-[white] font-bold mb-[25px]'>Quick Links</p>
                <p className='text-[white] font-thin'>About us</p>
                <p className='text-[white] font-thin'>FAQ's</p>
                <p className='text-[white] font-thin'>Help</p>
                <p className='text-[white] font-thin'>My account</p>
                <p className='text-[white] font-thin'>Create account</p>
                <p className='text-[white] font-thin'>Contacts</p>
            </div>
            <div className='w-[20%] border border-[yellow]'>
                <p className='text-[white] font-bold mb-[25px]'>Shops</p>
                <p className='text-[white] font-thin'>Hotels</p>
                <p className='text-[white] font-thin'>Restaurants</p>
                <p className='text-[white] font-thin'>Bars</p>
                <p className='text-[white] font-thin'>Events</p>
                <p className='text-[white] font-thin'>Fitness</p>
            </div>
            <div className='w-[25%] border border-[yellow] flex flex-col gap-[20px]'>
                <p className='text-[white] font-bold mb-[25px]'>Contact us</p>
                <p className='text-[white] font-thin'>No 21. Favours, Bodija, Ibadan,Nigeria.</p>
                <p className='text-[white] font-thin'>+2348101725687</p>
                <p className='text-[white] font-thin'>Emmanuelidus@gmail.com</p>
            </div>
            <div className='w-[25%] border border-[yellow] flex flex-col gap-[20px]'>
               <div>
                <input type="text" />
               </div>
                <p className='text-[white] font-thin'>No 21. Favours, Bodija, Ibadan,Nigeria.</p>
                <p className='text-[white] font-thin'>+2348101725687</p>
                <p className='text-[white] font-thin'>Emmanuelidus@gmail.com</p>
            </div>
        </div>
    </>
  )
}
