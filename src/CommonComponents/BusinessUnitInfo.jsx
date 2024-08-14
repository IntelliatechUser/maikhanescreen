import React from 'react'

const BusinessUnitInfo = ({unitDetailsKey,unitDetailsValue,img}) => {
  return (
    <div><div className="grid grid-cols-[30%_70%] border  border-gray rounded-3xl p-2  items-center ">
        <div className='flex p-4'><div className='w-12 h-12 rounded-full flex justify-center  text-center bg-customOrange p-2'><img src={img}/></div></div>
        <div className='flex flex-col '>
            <p className='text-black font-bold h-[50px]'>{unitDetailsKey}</p>
            <div>{unitDetailsValue}</div>
        </div>
        </div></div>
  )
}

export default BusinessUnitInfo