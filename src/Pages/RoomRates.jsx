import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RoomsData from '../Data/RoomRates.json'

export default function RoomRates() {
  return (
    <>
      <Header />
      <div className='h-[70vh]' id='roomRatesHero' >
        <p className='text-[white] text-4xl font-semibold text-center pt-[150px]'>ROOM & RATES</p>
      </div>
        <div className='bg-[black] h-[18vh] w-[100%] py-[20px] px-[250px] '>
            <form action="" className=' w-[100%] items-center'>
                <input type="text" placeholder='13 Jun 2020-18 Jun 2020' className='w-[40%] border border-[grey] h-[53px] py-[10px] px-[20px]' id='input1' />
                <input type="text" placeholder='5 DAYS STAY' className='h-[53px] py-[10px] px-[30px] border border-[grey]' />
                <button className='h-[53px] w-[20%] font-semibold border-none bg-[#ffd600] ' id='checkRatesBtn'>CHECK RATES</button>
            </form>
        </div>
        <div className='bg-[#282828] px-[90px] py-[50px]'>
            <div className='w-[100%] flex flex-row gap-[50px]'>
                <div className='border border-[yellow] w-[60%] p-[5px] flex flex-col gap-[65px]'>
                   
                   {
                    RoomsData.map( RoomsData => {
                        return(
                            <div className=' p-[5px] cols-2 gap-[40px]'>
                                <div className='border border-[white] w-[50%] items-center flex flex-col'>
                                    <div>
                                        <img src={RoomsData.img} alt="" className='h-[230px]' />
                                    </div>
                                    <div className='py-[20px] px-[20px]'>
                                        <p className='text-[white] font-semibold text-2xl text-center'>{RoomsData.heading}</p>
                                        <p className='text-[white] mt-[20px] mb-[30px]'>{RoomsData.text}</p>
                                        <button className='border-[#ffd600] h-[40px] px-[30px] mt-[10px] py-[5px] text-[#ffd600] border-[2px] font-semibold rounded-md text-center hover:cursor-pointer hover:bg-[#ffd600] hover:text-[black] hover:border-[black]'>{RoomsData.button}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
                <div className=' w-[30%]'>
                    <div>
                        <div className='bg-[#ffd600] h-[8vh] py-[7px]' id='roomTypes'>
                            <p className='font-semibold text-center '>ROOM TYPES</p>
                        </div>
                        <div className='bg-[black] flex flex-col py-[10px] gap-[20px] h-[27vh]'>
                            <p className='text-[white] text-center font-bold text-xl' >Deluxe</p>
                            <p className='text-[white] text-center font-bold text-xl' > Standard</p>
                            <p className='text-[white] text-center font-bold text-xl' >Studio</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#ffd600] h-[8vh] py-[7px]'>
                            <p className='font-semibold text-center '>ROOM RATES</p>
                        </div>
                        <div className='bg-[black] flex flex-col py-[10px] gap-[20px] h-[20vh]'>
                            <p className='text-[white] text-center font-bold text-xl' >Breakfast</p>
                            <p className='text-[white] text-center font-bold text-xl' >Lunch</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#ffd600] h-[8vh] py-[7px]'>
                            <p className='font-semibold text-center '>GUESTS</p>
                        </div>
                        <div className='bg-[black] flex flex-col py-[10px] gap-[20px] h-[50vh]'>
                            <p className='text-[white] text-center font-bold text-xl' >2</p>
                            <p className='text-[white] text-center font-bold text-xl' >3</p>
                            <p className='text-[white] text-center font-bold text-xl' >4</p>
                            <p className='text-[white] text-center font-bold text-xl' >5</p>
                            <p className='text-[white] text-center font-bold text-xl' >6</p>
                            <p className='text-[white] text-center font-bold text-xl' >7</p>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#ffd600] h-[8vh] py-[7px]'>
                            <p className='font-semibold text-center '>CHILDREN</p>
                        </div>
                        <div 
                        className='bg-[black] flex flex-col py-[10px] gap-[20px] h-[27vh]'>
                            <p className='text-[white] text-center font-bold text-xl'>1</p>
                            <p className='text-[white] text-center font-bold text-xl'>2</p>
                            <p className='text-[white] text-center font-bold text-xl'>3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-[30px] h-[10vh] px-[450px] flex gap-[25px] items-center'>
                <p className='text-[white] hover:cursor-pointer '>1</p>
                <p className='text-[white] hover:cursor-pointer'>2</p>
                <button className='bg-[yellow] px-[10px] py-[5px] text-[black] font-semibold rounded-md'>NEXT</button>
            </div>
        </div>
        <Footer />
    </>
  )
}
