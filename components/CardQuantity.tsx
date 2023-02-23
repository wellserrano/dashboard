import Image from 'next/image'
import React from 'react'

import smileyImg from '../public/smiley.svg'

const CardQuantity: React.FC = () => {
  return (
    <div className='flex flex-col items-center text-white bg-[#363447] py-7 px-20 rounded-2xl shadow-card'>
      <div id="top" className='font-semiboldbold text-2xl'>
        <p>NPS geral</p>
      </div>
      <div id="content" className='flex flex-col items-center text-[#81FBB8] font-semibold text-2xl my-20 gap-4'>
        <Image src={ smileyImg } alt="smiley face"/>
        <p>Excelente!</p>
      </div>
      <div id="bottom" className='text-sm font-medium'>
        <p>NPS Score 75</p>
      </div>
    </div>
  )
}

export default CardQuantity