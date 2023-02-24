interface DataProps {
  weekday: string
  height: string
}

export default function GraphBarVert({ data }: { data: DataProps[] }) {

  console.log(data)

  return (
    <div className="relative flex justify-between z-10 gap-[59px]">

      <div className="absolute h-[3px] w-full bg-[#4A4556] -z-10 top-1/2" />

      {
        data &&
        data.map( e => {
          
          const barStyle = `w-4 h-[${e.height}px] bg-[#90F7EC] rounded-full`
          
          return (
            <div key={e.weekday} className="flex flex-col gap-2 items-center justify-center">
              <div className={ barStyle } />
              <span>{e.weekday}</span>
            </div>
          )
        })
      }

    </div>
  )
}