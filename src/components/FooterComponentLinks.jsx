import React from 'react'

export const FooterComponentLinks = ({title,list}) => {
    console.log("list >>>>>>>>>>>>>>",list);
  return (<div >
    <div className='text-poppins text-[25px] text-regular text-black'>{title} </div>
      
    <div>
        {list.map((item)=>{
           return <div className='text-poppins text-regular text-[22px] text-mediumText'>{item}</div>
        }
        )}
    </div>
    </div>
  )
}


export const SocialLinks = () => {
    return (<div >
        <div className='text-poppins text-[25px] text-regular text-black'>Social Links </div>
      <div className='grid grid-cols-5 gap-x-1'><img /><img /> <img/> <img/> <img/> </div>
        
      <div className='grid grid-cols-2 gap-x-1'>
         <img/>
         <img/>
      </div>
      </div>
    )
  }
  