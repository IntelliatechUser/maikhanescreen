import React from 'react'

const Card = ({title,description,roundinfo,counter=false,enabled=false,onClick}) => {
  return (

    
    
   
    <div onClick={onClick}
    className={`relative p-6 w-full flex flex-col p-2 text-poppins text-regular text-mediumText border-4  h-[278px] rounded-xl ${
      enabled ? 'border-yellow-dark' : 'border-gray bg-gray bg-opacity-15'
    }`}
  >
        <div className='text-[28px] '>{title}</div>
<div className='text-[23px]'>{description}</div>   
{counter && <div className='absolute top-1 right-3 text-poppins text-regular text-[45px] text-mediumText'> {counter}</div>}
{roundinfo && <button onClick={()=>{}} className='absolute border text-center p-6 border-yellow-dark rounded-full bottom-4  w-[90%] text-poppins text-regular text-[23px] text-mediumText'> {roundinfo}</button>}
    </div>
  )
}

export default Card
