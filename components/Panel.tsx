import React from 'react'

// import Image from 'next/image'
import GraphBarVert from './GraphBarVert'

import { Triangle } from 'phosphor-react'

const Panel: React.FC = () => {
  return (
    <div className='col-span-3 py-7 px-12 text-white bg-[#363447] rounded-2xl shadow-card'>
      <h3 className='mb-8 text-2xl font-semibold'>Vendas por dia da semana</h3>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col justify-start'>
            <p className='flex items-center gap-1 mb-2 text-sm'>
              <Triangle size={15} weight="fill" color='#81FBB8'/>
              Dia com mais vendas
            </p>
            <p className='mb-8 text-2xl'>quarta-feira</p>
            <p className='flex items-center gap-1 mb-2 text-sm'>
              <Triangle size={15} weight="fill" color='#EA5455' style={{transform: 'rotate(180deg)'}}/>
              Dia com menos vendas
            </p>
            <p className='text-2xl'>domingo</p>
        </div>
        <div>
          <GraphBarVert data={[
            {weekday: 'dom', height: '39'},
            {weekday: 'seg', height: '115'},
            {weekday: 'ter', height: '76'},
            {weekday: 'qua', height: '159'},
            {weekday: 'qui', height: '129'},
            {weekday: 'sex', height: '120'},
            {weekday: 'sab', height: '69'},
          ]}/>
          {/* <Image src='/chart-test.png' alt='chat example' width={523} height={186}/> */}
        </div>
      </div>

    </div>
  )
}

export default Panel