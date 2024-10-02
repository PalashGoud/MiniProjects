import React, { useEffect, useState } from 'react';

function Clock() {
  let [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const hour = currDate.getHours();
  const minutes = currDate.getMinutes();
  const seconds = currDate.getSeconds();
  const time = currDate.toLocaleTimeString();

  return (
    <div className='flex h-[100vh] bg-[#171517] relative items-center justify-center'>
      <div className='box border-gray-400 border-[3px] flex items-center justify-center h-[10vh] text-[30px] w-[30vh] absolute text-white  top-[50%] left-[20vh]'>{time}</div>
      <div className='clock w-[350px] h-[350px] rounded-full relative border-[white] border-[2px] text-[white] bg-[#171517] flex items-center justify-center'>
        <label className=' number-1 absolute top-0 text-[25px] font-[600]'>12</label>
        <label className=' number-1 absolute top-3 text-[25px] left-[36vh] font-[600]'>1</label>
        <label className=' number-1 absolute top-[10vh] text-[25px] left-[46vh] font-[600]'>2</label>
        <label className='absolute right-1 text-[25px] font-[600]'>3</label>
        <label className=' number-1 absolute top-[36vh] text-[25px] left-[47vh] font-[600]'>4</label>
        <label className=' number-1 absolute top-[45vh] text-[25px] left-[38vh] font-[600]'>5</label>
        <label className='absolute bottom-0 text-[25px] font-[600]'>6</label>
        <label className=' number-1 absolute top-[44vh] text-[25px] left-[12vh] font-[600]'>7</label>
        <label className=' number-1 absolute top-[36vh] text-[25px] left-[5vh] font-[600]'>8</label>
        <label className='absolute left-1 text-[25px] font-[600]'>9</label>
        <label className=' number-1 absolute top-[10vh] text-[25px] left-[5vh] font-[600]'>10</label>
        <label className=' number-1 absolute top-3 text-[25px] left-[15vh] font-[600]'>11</label>

        <div className='w-4 h-4 bg-black rounded-full'></div>
        <div
          style={{ transform: `rotate(${hour * 30 + minutes / 2}deg)`, transformOrigin: 'bottom' }}
          className='h-[80px] w-[7px] rounded-md bg-[#355894] absolute bottom-[50%]'
        ></div>
        <div
          style={{ transform: `rotate(${6 * minutes}deg)`, transformOrigin: 'bottom' }}
          className='h-[120px] w-[5px] rounded-sm bg-[#54b4cc] absolute bottom-[50%]'
        ></div>
        <div
          style={{ transform: `rotate(${6 * seconds}deg)`, transformOrigin: 'bottom' }}
          className='h-[130px] w-[3px] rounded-sm bg-[#10f7ec] absolute bottom-[50%]'
        ></div>
      </div>
      <div className='absolute bottom-6 text-white '>Made with ❤️ By Palash</div>
    </div>
  );
}

export default Clock;
