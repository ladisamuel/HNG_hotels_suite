import React from 'react'

export default function button({width, text}) {
  return (
    <>
        <div className=''>
        <button className={` ${width}   bg-[#ffd600] text-black py-[5px] px-[10px] text-sm rounded hover:bg-[white] hover:text-[black] font-bold`}>{text}</button>
        </div>
    </>
  )
}
