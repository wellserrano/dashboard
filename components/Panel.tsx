import React from 'react'

import Image from 'next/image'

const Panel: React.FC = () => {
  return (
    <div className='col-span-3 py-7 px-12 text-white bg-[#363447] rounded-2xl shadow-card'>
      <h3 className='mb-8 text-2xl font-semibold'>Vendas por dia da semana</h3>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
            <p className='mb-2 text-sm'>
              Dia com mais vendas
            </p>
            <p className='mb-8 text-2xl'>quarta-feira</p>
            <p className='mb-2 text-sm'>Dia com menos vendas</p>
            <p className='text-2xl'>domingo</p>
        </div>
        <div>
          <Image src='/chart-test.png' alt='chat example' width={523} height={186}/>
        </div>
      </div>

    </div>
  )
}

export default Panel