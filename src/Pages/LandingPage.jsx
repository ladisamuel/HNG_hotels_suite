import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import records from '../Data/LandingPage.json'


export default function MainPage() {

  // var names = [
  //   "Dara",
  //   "Bolu",
  //   "Adex",
  //   "Dayond"
  // ]
  
  // for (let i = 0; i < names.length; i++) {
  //   console.log();
  // }


  return (
    <>
      < Header/>
      <div className='h-[110vh]' id='hero'>
        <div className='items-center text-center py-[170px]'>
            <p className='text-[white] text-4xl mb-[30px] font-serif' id='font1'>Book Today</p>
            <p className='text-[white] text-4xl font-bold mb-[10px]'>Find and Book hotels in Nigeria</p>
            <p className='text-[white]'>Search through 12,879 hotels in Nigeria</p>
            <form action="" className='mt-[40px] w-[100%] px-[150px] items-center'>
              <input type="text" placeholder='13 Jun 2020-18 Jun 2020' className='w-[40%] border border-[grey] h-[55px] py-[10px] px-[20px]' id='input1' />
              <select name="" className='w-[20%] h-[54px] px-[20px] py-[10px] border border-[grey]' >
                <option value="">Guest</option>
                <option value=""></option>
              </select>
              <select name="" placeholder='' id="" className='w-[20%] h-[54px] border border-[grey] px-[20px] py-[10px]' >
                <option value="">Children</option>
                <option value=""></option>
              </select>
              <button className='h-[54px] px-[35px] font-semibold border-none bg-[#ffd600] ' id='checkRatesBtn'>CHECK RATES</button>
            </form>
        </div>
      </div>
      <div className='bg-[#2e2d2d] h-[85px]'></div>
      <div className='bg-[#141313] h-[100vh] py-[60px] text-center '>
        <div>
          <p className='text-[white] '>WHAT CAN YOU DO AT HOTEL HNG?</p>
          <p className='text-[white] font-semibold text-3xl mb-[20px]'>AWARD WINNING HOTEL</p>
          <hr className=' py-[1px] rounded-md bg-[#ffd600] mx-[500px]' />
        </div>
        <div className=' mt-[30px]'>
          <div className='w-[100%]  px-[120px] py-[20px] rounded-md flex gap-[40px] '>
            <div className='bg-[#ffd600] h-[48vh] w-[30%]' id='awardImgBg' > 
                <img src="src/assets/LandingPage/hotel img 2.jpeg" alt="" className='w-[310px] h-[230px] rounded-md' id='awardImg'/>
            </div>
            <div className='bg-[#ffd600] h-[48vh] w-[30%]' id='awardImgBg' > 
                <img src="src/assets/LandingPage/hotel img 3.jpeg" alt="" className='w-[310px] h-[230px] rounded-md' id='awardImg'/>
            </div>
            <div className='bg-[#ffd600] h-[48vh] w-[30%]' id='awardImgBg' > 
                <img src="src/assets/LandingPage/hotel img 4.jpeg" alt="" className='w-[310px] h-[230px] rounded-md' id='awardImg' />
            </div>
          </div>
        </div>
        <div className='px-[600px] flex gap-[10px] mt-[20px]'>
          <p className='bg-[#ffd600] p-[5px] rounded-md border border-[grey]'></p>
          <p className='p-[5px] rounded-md border border-[grey]'></p>
          <p className='p-[5px] rounded-md border border-[grey]'></p>
        </div>
      </div>
      <div id='hero2'>

        <div className='text-center py-[20px] flex flex-col gap-[5px]'>
          <p className='text-[white] text-3xl font-semibold'>BEST ROOMS</p>
          <p className='text-[white] text-md'>SEE OUR TOP PICKS OF CITIES VISITED BY MOST GUESTS</p>
          <hr className=' py-[1.5px] bg-[#ffd600] mx-[550px] rounded-md' />
        </div>
        <div className='py-[20px] px-[120px] flex gap-[40px]'>
          {
            records.map( records => {
          
              return(
                <div className='border-[2px] border-[grey] w-[100%]'>
                  <div>  
                      <img src={records.img} alt=""  className='h-[45vh] w-[350px]' />
                  </div>
                  <div className='w-[100%]  px-[10px] py-[20px]'>
                    <div className='text-[white] font-semibold mb-[10px] text-center'>
                      {records.topic}
                    </div>
                    <div className='text-[#d2c9c9] mb-[30px]'>
                      {records.content}
                    </div>
                    <div className=' border-[#ffd600] h-[40px] mt-[10px] py-[5px] text-[#ffd600] border-[2px] font-semibold rounded-md text-center hover:cursor-pointer hover:bg-[#ffd600] hover:text-[black] hover:border-[black]'>
                      {records.butt}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div id='hero3' className='py-[70px] px-[70px]'>
        <div className=' px-[10px] py-[10px]  flex gap-[30px]'>
          <div className=' h-[60vh] w-[50%] px-[80px] py-[45px] flex flex-col'>
            <img src="src/assets/LandingPage/hotel img 9.jpeg" alt="" className=' mb-[30px]'/>
            <div className='ml-[150px] flex gap-[10px]'>
              <p className='bg-[#ffd600] p-[5px] rounded-md border border-[grey]'></p>
              <p className='p-[5px] rounded-md border border-[grey]'></p>
              <p className='p-[5px] rounded-md border border-[grey]'></p>
            </div>
          </div>
          <div className='h-[60vh] w-[50%] px-[20px]'>
            <p className='text-[white] mb-[10px]'>GET THE FIVE STAR TREATMENT</p>
            <p className='text-[white] font-semibold text-3xl mb-[10px]'>DELUXE ROOMS WITH A BEAUTIFUL VIEW</p>
            <p className='text-[white] mb-[20px]'>Services Includes; In-Door swimming pool, Free breakfast, High sped Internet, Free airport pickup & drop-off, Car rental, Beach Tour, Pool Lounge, Duplex-styled Serviced apartments, Maximum security, 24/7 Power Supply and many more.</p>
            <p className='text-[white] mb-[10px]'>Double M Exquisite Suites and Lounge is a Budget Hotel in Lekki,Lagos</p>
            <button className='bg-[#ffd600] py-[10px] px-[20px] rounded-md font-semibold'>BOOK NOW</button>
          </div>
        </div>
      </div>
      <div className='h-[50vh] bg-[#201f1f] py-[70px] px-[445px]'>
        <img src="src/assets/LandingPage/world png.png" alt="" className='w-[400px] h-[165px]' />
      </div>
      <Footer />

    </>
  )
}
