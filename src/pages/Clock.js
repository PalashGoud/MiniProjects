import React, { useEffect, useState } from 'react';

function Clock() {
  const [currDate, setCurrDate] = useState(new Date());

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

  // Function to calculate the positions of clock numbers
  const getClockNumberStyle = (index) => {
    const angle = ((index - 3) * 30) * (Math.PI / 180); // Convert degrees to radians
    const radius = 200; // Radius of the clock face
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      position: 'absolute',
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)',
      fontSize: '25px',
      fontWeight: 600,
      color: 'white', 
    };
  };

  return (
    <div className='flex cursor-pointer h-[100vh] bg-[#171517] relative items-center justify-center'>
      {/* Time display moved to the left */}
      <div className='box border-gray-400 border-[3px] flex items-center justify-center h-[10vh] text-[30px] w-[30vh] absolute text-white top-[50%] left-[5%] transform -translate-y-1/2'>
        {time}
      </div>
      <div className='clock w-[440px] h-[440px] rounded-full relative border-[white] border-[2px] bg-[#171517] flex items-center justify-center'>
        {/* Render clock numbers dynamically */}
        {[...Array(12).keys()].map((i) => (
          <div key={i} style={getClockNumberStyle(i + 1)}>{i + 1}</div>
        ))}

        {/* Center dot */}
        <div className='w-4 h-4 bg-white rounded-full'></div>

        {/* Hour hand */}
        <div
          style={{
            transform: `rotate(${hour * 30 + minutes / 2}deg)`,
            transformOrigin: 'bottom',
          }}
          className='h-[80px] w-[7px] rounded-md bg-[#355894] absolute bottom-[50%]'
        ></div>

        {/* Minute hand */}
        <div style={{
            transform: `rotate(${6 * minutes}deg)`,
            transformOrigin: 'bottom',
          }}
          className='h-[120px] w-[5px] rounded-sm bg-[#2ba4c3] absolute bottom-[50%]'
        ></div>

        {/* Second hand */}
        <div style={{
            transform: `rotate(${6 * seconds}deg)`,
            transformOrigin: 'bottom',
          }}
          className='h-[150px] w-[3px] rounded-sm bg-[#10f7ec] absolute bottom-[50%]'
        ></div>
      </div>

      <div className='absolute bottom-6 text-white'>Made with ❤️ By Palash</div>
    </div>
  );
}

export default Clock;
