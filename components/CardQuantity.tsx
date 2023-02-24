import React from 'react'

import { Circle } from 'phosphor-react'

interface Props {
  percentage: number
  size: number
  title: string
}

const CardQuantity: React.FC<Props> = ({ title, percentage, size }) => {
  const radius = 75 ;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className='flex flex-col justify-center items-center text-white bg-[#363447] py-7 px-12 rounded-2xl shadow-card'>
      <div id="top" className='flex justify-center items-center font-semibold text-2xl'>
        <p>{ title }</p>
      </div>
      <div id="progress-circle">
        <div className='flex flex-col items-center'>
          <svg 
            width={ size } 
            height={ size } 
            className='my-8'
            viewBox={`0 0 ${ size } ${ size }`}
          >
            <circle
              id='circle-background'
              cx={ size/2 }
              cy={ size/2 }
              strokeWidth="29px"
              r={ radius }
              className='fill-none stroke-slate-500'
            />
            <circle
              id='circle-progress'
              cx={ size/2 }
              cy={ size/2 }
              strokeWidth="29px"
              r={ radius }
              className='fill-none stroke-blue-500'
              style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }}
              transform={`rotate(-90 ${ size/2 } ${ size/2 })`}
              
            />
            <text x='50%' y='50%' dy='0.3em' textAnchor='middle' className='text-4xl fill-white' >
              { percentage }%
            </text>
          </svg>
          <div id="bottom" className='flex gap-4'>
            <p>Esperado 100</p>
            <p>Alcançado { percentage }</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardQuantity