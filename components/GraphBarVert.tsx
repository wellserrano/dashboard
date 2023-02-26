import React from 'react'

interface DataProps {
  data: {
    weekday: string
    height: string
  }[]
}

const GraphBarVert: React.FC<DataProps> = ({ data }) => {

  console.log(data)

  return (
    <div className="relative flex items-baseline justify-between z-10 gap-[59px]">

      <div className="absolute h-[3px] w-full bg-[#4A4556] -z-10 top-1/2" />

      {
        data &&
        data.map( e => {
          
          const barStyle = `w-4 bg-[#90F7EC] rounded-full`
          return (
            <div key={e.weekday} className="flex flex-col gap-2 items-center justify-center">
              <div className={ barStyle } style={{height: `${e.height}px`}}/>
              <span>{e.weekday}</span>
            </div>
          )
        })
      }

    </div>
  )
}

export default GraphBarVert