import React, { useState } from 'react'

function Snakenladder() {
 const[dice,setDice]=useState("")
 const[p1,setP1] = useState(0)
 const[p2,setP2] = useState(0)
 const[turn,setTurn] = useState(1)
 const throwDice= ()=>{
    let diceValue = Math.ceil(Math.random()*6)
    setDice(diceValue)
    if (turn == 1){
      if(diceValue+p1<31){
          setP1(diceValue+p1)
      }
        setTurn(2)
    }
    else if (turn == 2){
      if(diceValue+p2<31){
        setP2(diceValue+p2)
      }
        setTurn(1)
    }
   
 
 }

  return (
    <div className='h-[100vh] w-[100%] flex items-center justify-center gap-9'> 

<br></br>
turn:{turn}   


     {p1 == 3 ? setTimeout(() =>{setP1(22)},500): null}
     {p1 == 5 ? setTimeout(() =>{setP1(8)},500): null}
     {p1 == 11 ? setTimeout(() =>{setP1(26)},500): null}
     {p1 == 20 ? setTimeout(() =>{setP1(29)},500): null}

     {p2 == 3 ? setTimeout(() =>{setP2(22)},500): null}
     {p2 == 5 ? setTimeout(() =>{setP2(8)},500): null}
     {p2 == 11 ? setTimeout(() =>{setP2(26)},500): null}
     {p2 == 20 ? setTimeout(() =>{setP2(29)},500): null}

     {p1 == 17 ? setTimeout(() =>{setP1(4)},500): null}
     {p1 == 19 ? setTimeout(() =>{setP1(7)},500): null}
     {p1 == 21 ? setTimeout(() =>{setP1(9)},500): null}
     {p1 == 27 ? setTimeout(() =>{setP1(1)},500): null}
     
     {p2 == 17 ? setTimeout(() =>{setP2(4)},500): null}
     {p2 == 19 ? setTimeout(() =>{setP2(7)},500): null}
     {p2 == 21 ? setTimeout(() =>{setP2(9)},500): null}
     {p2 == 27 ? setTimeout(() =>{setP2(1)},500): null}




     <div className='flex bg-cover flex-wrap h-[500px] w-[600px] bg-[url(https://media.licdn.com/dms/image/C4D12AQFPcUrsF97dTw/article-cover_image-shrink_600_2000/0/1543747519723?e=2147483647&v=beta&t=-12hmqMWefu4vwmnTJxLrgchhwBwqX4oUpUleOzVD0E)]'>

     <button className={p1==25 && p2==25 ? "dono": p1==25 ? "goti-1" :p2==25 ? "goti-2":"blank"}></button>
     <button className={p1==26 && p2==26 ? "dono": p1==26 ? "goti-1" :p2==26 ? "goti-2":"blank"}></button>
     <button className={p1==27 && p2==27 ? "dono": p1==27 ? "goti-1" :p2==27 ? "goti-2":"blank"}></button>
     <button className={p1==28 && p2==28 ? "dono": p1==28 ? "goti-1" :p2==28 ? "goti-2":"blank"}></button>
     <button className={p1==29 && p2==29 ? "dono": p1==29 ? "goti-1" :p2==29 ? "goti-2":"blank"}></button>
     <button className={p1==30 && p2==30 ? "dono": p1==30 ? "goti-1" :p2==30 ? "goti-2":"blank"}></button>
     <button className={p1==24 && p2==24 ? "dono": p1==24 ? "goti-1" :p2==24 ? "goti-2":"blank"}></button>
     <button className={p1==23 && p2==23 ? "dono": p1==23 ? "goti-1" :p2==23 ? "goti-2":"blank"}></button>
     <button className={p1==22 && p2==22 ? "dono": p1==22 ? "goti-1" :p2==22 ? "goti-2":"blank"}></button>
     <button className={p1==21 && p2==21 ? "dono": p1==21 ? "goti-1" :p2==21 ? "goti-2":"blank"}></button>
     <button className={p1==20 && p2==20 ? "dono": p1==20 ? "goti-1" :p2==20 ? "goti-2":"blank"}></button>
     <button className={p1==19 && p2==19 ? "dono": p1==19 ? "goti-1" :p2==19 ? "goti-2":"blank"}></button>
     <button className={p1==13 && p2==13 ? "dono": p1==13 ? "goti-1" :p2==13 ? "goti-2":"blank"}></button>
     <button className={p1==14 && p2==14 ? "dono": p1==14 ? "goti-1" :p2==14 ? "goti-2":"blank"}></button>
     <button className={p1==15 && p2==15 ? "dono": p1==15 ? "goti-1" :p2==15 ? "goti-2":"blank"}></button>
     <button className={p1==16 && p2==16 ? "dono": p1==16 ? "goti-1" :p2==16 ? "goti-2":"blank"}></button>
     <button className={p1==17 && p2==17 ? "dono": p1==17 ? "goti-1" :p2==17 ? "goti-2":"blank"}></button>
     <button className={p1==18 && p2==18 ? "dono": p1==18 ? "goti-1" :p2==18 ? "goti-2":"blank"}></button>
     <button className={p1==12 && p2==12 ? "dono": p1==12 ? "goti-1" :p2==12 ? "goti-2":"blank"}></button>
     <button className={p1==11 && p2==11 ? "dono": p1==11 ? "goti-1" :p2==11 ? "goti-2":"blank"}></button>
     <button className={p1==10 && p2==10 ? "dono": p1==10 ? "goti-1" :p2==10 ? "goti-2":"blank"}></button>
     <button className={p1==9 && p2==9 ? "dono": p1==9 ? "goti-1" :p2==9 ? "goti-2":"blank"}></button>
     <button className={p1==8 && p2==8 ? "dono": p1==8 ? "goti-1" :p2==8 ? "goti-2":"blank"}></button>
     <button className={p1==7 && p2==7 ? "dono": p1==7 ? "goti-1" :p2==7 ? "goti-2":"blank"}></button>
     <button className={p1==1 && p2==1 ? "dono": p1==1 ? "goti-1" :p2==1 ? "goti-2":"blank"}></button>
     <button className={p1==2 && p2==2 ? "dono": p1==2 ?"goti-1": p2==2 ? "goti-2":"blank"}></button>
     <button className={p1==3 && p2==3 ? "dono": p1==3 ?"goti-1": p2==3 ? "goti-2":"blank"}></button>
     <button className={p1==4 && p2==2 ? "dono": p1==4 ?"goti-1": p2==4 ? "goti-2":"blank"}></button>
     <button className={p1==5 && p2==5 ? "dono": p1==5 ?"goti-1": p2==5 ? "goti-2":"blank"}></button>
     <button className={p1==6 && p2==6 ? "dono": p1==6 ?"goti-1": p2==6 ? "goti-2":"blank"}></button>
     
     </div>
     
    
     <button onClick={()=>throwDice()} className='blank-1'> Roll The dice <div>{dice}</div></button>
     
     </div>
  )
}

export default Snakenladder