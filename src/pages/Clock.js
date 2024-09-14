import React from 'react'

function Clock() {
    let currDate = new Date()
    let hour = currDate.getHours()
    let minutes = currDate.getMinutes()
    let seconds = currDate.getSeconds()
  return (
    
       <div className='flex h-[100vh] bg-[#282C34] items-center justify-center'>
        <div className='w-[350px] h-[350px] rounded-full border relative border-black  bg-[#FEFEFE] flex items-center justify-center'>
            <label className=' number-1 absolute top-0 text-[25px] font-[600]'>12</label>
            <label className='absolute bottom-0 text-[25px] font-[600]'>6</label>
            <label className='absolute right-1 text-[25px] font-[600]'>3</label>
            <label className='absolute left-1 text-[25px] font-[600]'>9</label>
            <div className='w-4 h-4 bg-black rounded-full'></div>
            <div style={{transform: `rotate(${hour*30}deg)`, transformOrigin: "bottom"}} className='h-[80px] w-[7px] rounded-sm bg-black absolute bottom-[50%]'></div>
            <div style={{transform: `rotate(${6*minutes}deg)`, transformOrigin: "bottom"}} className='h-[120px] w-[5px] rounded-sm bg-black absolute bottom-[50%]'></div>
            <div style={{transform: `rotate(${6*seconds}deg)`, transformOrigin: "bottom"}} className='h-[130px] w-[3px] rounded-sm bg-red-500 absolute bottom-[50%]'></div>
            </div>
        </div>
    
  )
}

export default Clock