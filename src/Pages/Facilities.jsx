import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FacilitiesComp from '../components/trying/FacilitiesComp';
import FacilityData from '../Data/Facilities.json'

export default function Facilities() {

  const data = FacilityData.Facilities
  console.log('data', data)

  const bg_id = [
    'poolHero',
    'shampooHero',
    '',
    'barHero'
  ]
  return (
    <div>
      <Header />
      <div id='poolHero'>
        <p className='text-center text-[white] font-semibold text-4xl pt-[200px]'>FACILITIES & SERVICES</p>
      </div>
      {data.map((item, index)=>(
        <div key={index}>
          {index % 2 === 0 ? 
          
          <div className='h-[100vh] bg-[#0d0d0d] pt-[70px]'>
            <FacilitiesComp 
              img_url={item.img_url}
              head1={item.head1} 
              head2={item.head2}
              text1={item.text1}
              text2={item.text2}  
              arrange='left'
            />
          </div>
          : 
          
          <div id={bg_id[index]} className='h-[100vh] bg-[#0d0d0d] pt-[70px]'>
            <FacilitiesComp 
              img_url={item.img_url}
              head1={item.head1} 
              head2={item.head2}
              text1={item.text1}
              text2={item.text2}  
              arrange='right'
            />
          </div>
          }
          
        </div>
      ))}
      <Footer />
    </div>
  )
}

