import React from 'react'

export default function FacilitiesComp({ head1, head2, text1, text2, link, img_url, arrange}) {

    console.log(arrange, 'the arrangement')

  return (
    <>  
       <div className=' px-[70px] py-[10px] flex '>

        {arrange === 'left' ?
            <>
                <div className=' h-[60vh] w-[45%] px-[80px] py-[45px] flex flex-col'>
                    <img src={img_url} alt="" className=' mb-[30px]'/>
                    <div className='ml-[150px] flex gap-[10px]'>
                    <p className='bg-[#ffd600] p-[5px] rounded-md border border-[grey]'></p>
                    <p className='p-[5px] rounded-md border border-[grey]'></p>
                    <p className='p-[5px] rounded-md border border-[grey]'></p>
                    </div>
                </div>
                <div className='h-[60vh] w-[55%] px-[20px]'>
                    <p className='text-[white] mb-[10px]'>{head1}</p>
                    <p className='text-[white] font-semibold text-3xl mb-[10px]'>{head2}</p>
                    <p className='text-[white] mb-[20px]'>{text1}</p>
                    <p className='text-[white] mb-[30px]'>{text2}</p>
                    <button className='bg-[#ffd600] py-[10px] px-[20px] rounded-md font-semibold'>BOOK NOW</button>
                </div>
            </>
            :
            <>
                <div className='h-[60vh] w-[55%] px-[20px]'>
                    <p className='text-[white] mb-[10px]'>{head1}</p>
                    <p className='text-[white] font-semibold text-3xl mb-[10px]'>{head2}</p>
                    <p className='text-[white] mb-[20px]'>{text1}</p>
                    <p className='text-[white] mb-[30px]'>{text2}</p>
                    <button className='bg-[#ffd600] py-[10px] px-[20px] rounded-md font-semibold'>BOOK NOW</button>
                </div>
                <div className=' h-[60vh] w-[45%] px-[80px] py-[45px] flex flex-col'>
                    <img src={img_url} alt="" className=' mb-[30px]'/>
                    <div className='ml-[150px] flex gap-[10px]'>
                    <p className='bg-[#ffd600] p-[5px] rounded-md border border-[grey]'></p>
                    <p className='p-[5px] rounded-md border border-[grey]'></p>
                    <p className='p-[5px] rounded-md border border-[grey]'></p>
                    </div>
                </div>
            </>
        }
        </div>
    </>
  )
}

