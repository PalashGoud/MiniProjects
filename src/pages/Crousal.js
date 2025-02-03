import React, { useState } from 'react'

function Crousal() {
    const [move, setMove] = useState(0)

    return (
        <div className='cursor-pointer overflow-hidden w-[100%] h-[100vh]'>
            <div style={{ transform: `translateX(-${move}%)` }} className='w-[400%] h-[100vh] flex object-cover overflow-hidden duration-500 '>
                <img className='w-[100%]' src='https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'></img>
                <img className='w-[100%]' src='https://images.unsplash.com/photo-1663970206537-2d24183b59c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyJTIwZm9yJTIwcGN8ZW58MHx8MHx8fDA%3D'></img>
                <img className='w-[100%]' src='https://images.unsplash.com/photo-1617224908579-c92008fc08bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D'></img>
                <img className='w-[100%]' src='https://images.unsplash.com/photo-1523688939046-b05f7d854f84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjB3YWxscGFwZXIlMjBmb3IlMjBwY3xlbnwwfHwwfHx8MA%3D%3D'></img>

            </div>

            <div onClick={() => move > 0 ? setMove(move - 25) : null} className=' text-white text-[50px] absolute top-[50%] px-4'> {"<"}</div>


            <div onClick={() => move < 75 ? setMove(move + 25) : null} className=' text-white text-[50px] absolute right-[.5%] top-[50%] px-4'> {">"}</div>
          
          <div className='flex gap-2 absolute bottom-[10%] left-[50%]'>
          <div onClick={()=> setMove(0)}  style={{backgroundColor: move==0 &&  "red"}} className='w-[20px] h-[20px]  rounded-full border-2 '></div>
          <div onClick={()=> setMove(25)} style={{backgroundColor: move==25 && "red"}} className='w-[20px] h-[20px]  rounded-full border-2 ' ></div>
          <div onClick={()=> setMove(50)} style={{backgroundColor: move==50 && "red"}} className='w-[20px] h-[20px]   rounded-full border-2 '></div>
          <div onClick={()=> setMove(75)} style={{backgroundColor: move==75 && "red"}} className='w-[20px] h-[20px]   rounded-full border-2 '></div>  
          </div>
        </div>
    )
}

export default Crousal