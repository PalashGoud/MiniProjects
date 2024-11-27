import React, { useState } from 'react'

function TicTacToe() {
    const [a1, setA1] = useState("")
    const [a2, setA2] = useState("")
    const [a3, setA3] = useState("")
    const [a4, setA4] = useState("")
    const [a5, setA5] = useState("")
    const [a6, setA6] = useState("")
    const [a7, setA7] = useState("")
    const [a8, setA8] = useState("")
    const [a9, setA9] = useState("")
    const [turn, setTurn] = useState("1")
    const block1Fn = () => {
        if (turn == 1 && a1 == "") {
            setA1("X")
            setTurn(2)
        }
        else if (turn == 2 && a1 == "") {
            setA1("O")
            setTurn(1)
        }
    }
    const block2Fn = () => {
        if (turn == 1 && a2 == "") {
            setA2("X")
            setTurn(2)
        }
        else if (turn == 2 && a2 == "") {
            setA2("O")
            setTurn(1)
        }
    }
    const block3Fn = () => {
        if (turn == 1 && a3 == "") {
            setA3("X")
            setTurn(2)
        }
        else if (turn == 2 && a3 == "") {
            setA3("O")
            setTurn(1)
        }
    }
    const block4Fn = () => {
        if (turn == 1 && a4 == "") {
            setA4("X")
            setTurn(2)
        }
        else if (turn == 2 && a4 == "") {
            setA4("O")
            setTurn(1)
        }
    }

    const block5Fn = () => {
        if (turn == 1 && a5 == "") {
            setA5("X")
            setTurn(2)
        }
        else if (turn == 2 && a5 == "") {
            setA5("O")
            setTurn(1)
        }
    }

    const block6Fn = () => {
        if (turn == 1 && a6 == "") {
            setA6("X")
            setTurn(2)
        }
        else if (turn == 2 && a6 == "") {
            setA6("O")
            setTurn(1)
        }
    }

    const block7Fn = () => {
        if (turn == 1 && a7 == "") {
            setA7("X")
            setTurn(2)
        }
        else if (turn == 2 && a7 == "") {
            setA7("O")
            setTurn(1)
        }
    }

    const block8Fn = () => {
        if (turn == 1 && a8 == "") {
            setA8("X")
            setTurn(2)
        }
        else if (turn == 2 && a8 == "") {
            setA8("O")
            setTurn(1)
        }
    }
    const block9Fn = () => {
        if (turn == 1 && a9 == "") {
            setA9("X")
            setTurn(2)
        }
        else if (turn == 2 && a9 == "") {
            setA9("O")
            setTurn(1)
        }
    }

    return (



        <div className='background-ttt'>
            <div className='b-tt-1'>
                <label className='b-tt-2'> Tic Tac Toe</label>
            </div>
            <div className='b-tt-3'><label className='ttl'> Turn of Player</label> {turn}</div>

            {a1 == "X" && a2 == "X" && a3 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a4 == "X" && a5 == "X" && a6 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a7 == "X" && a8 == "X" && a9 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a1 == "X" && a4 == "X" && a7 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a2 == "X" && a5 == "X" && a8 == "X" ? setTimeout(() => { alert("Congratulations Player 1 won") }, 500) : null}
            {a3 == "X" && a6 == "X" && a9 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a3 == "X" && a5 == "X" && a7 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}
            {a1 == "X" && a5 == "X" && a9 == "X" ? setTimeout(() => { alert("Congratulations Player 1 Won") }, 500) : null}

            {a1 == "O" && a2 == "O" && a3 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a4 == "O" && a5 == "O" && a6 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a7 == "O" && a8 == "O" && a9 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a1 == "O" && a4 == "O" && a7 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a2 == "O" && a5 == "O" && a8 == "O" ? setTimeout(() => { alert("Congratulations Player 2 won") }, 500) : null}
            {a3 == "O" && a6 == "O" && a9 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a3 == "O" && a5 == "O" && a7 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}
            {a1 == "O" && a5 == "O" && a9 == "O" ? setTimeout(() => { alert("Congratulations Player 2 Won") }, 500) : null}


            <div className='ttt-bord relative'>
                <div style={{ color: a1 == "X" ? '#393546' : '#00F701' }} onClick={() => block1Fn()} className='ttt-box'>{a1}</div>
                <div style={{ color: a2 == "X" ? '#393546' : '#00F701' }} onClick={() => block2Fn()} className='ttt-box'>{a2}</div>
                <div style={{ color: a3 == "X" ? '#393546' : '#00F701' }} onClick={() => block3Fn()} className='ttt-box'>{a3}</div>
                <div style={{ color: a4 == "X" ? '#393546' : '#00F701' }} onClick={() => block4Fn()} className='ttt-box'>{a4}</div>
                <div style={{ color: a5 == "X" ? '#393546' : '#00F701' }} onClick={() => block5Fn()} className='ttt-box'>{a5}</div>
                <div style={{ color: a6 == "X" ? '#393546' : '#00F701' }} onClick={() => block6Fn()} className='ttt-box'>{a6}</div>
                <div style={{ color: a7 == "X" ? '#393546' : '#00F701' }} onClick={() => block7Fn()} className='ttt-box'>{a7}</div>
                <div style={{ color: a8 == "X" ? '#393546' : '#00F701' }} onClick={() => block8Fn()} className='ttt-box'>{a8}</div>
                <div style={{ color: a9 == "X" ? '#393546' : '#00F701' }} onClick={() => block9Fn()} className='ttt-box'>{a9}</div>
                <div style={{width : a1=="X" && a2 =="X" && a3 =="X" || a1=="O" && a2=="O" && a3=="O" ? "100%" : "0" }} className='bg-red-500 h-1 duration-300 absolute top-12'></div>
                <div style={{width : a4=="X" && a5 =="X" && a6 =="X" || a4=="O" && a5=="O" && a6=="O" ? "100%" : "0" }}  className='bg-red-500 h-1 duration-300 absolute top-[24vh]'></div>
                <div style={{width : a7=="X" && a8 =="X" && a9 =="X" || a7=="O" && a8=="O" && a9=="O" ? "100%" : "0" }} className='bg-red-500  h-1 duration-300 absolute top-[40vh]'></div>  
                <div style={{height : a1=="X" && a4 =="X" && a7 =="X" || a1=="O" && a4=="O" && a7=="O" ? "100%" : "0" }} className=' bg-red-500 h-[100%]  w-1 duration-300 absolute left-[50px] '></div> 
                <div style={{height : a2=="X" && a5 =="X" && a8 =="X" || a2=="O" && a5=="O" && a8=="O" ? "100%" : "0" }} className=' bg-red-500 h-[100%]  w-1 duration-300 absolute left-[152px]'></div>   
                <div style={{height : a3=="X" && a6 =="X" && a9 =="X" || a3=="O" && a6=="O" && a9=="O" ? "100%" : "0" }} className= 'bg-red-500 h-[100%]  w-1 duration-300 absolute right-[49px]'></div>  
                <div style={{width : a3=="X" && a5 =="X" && a7 =="X" || a3=="O" && a5=="O" && a7=="O" ? "3px" : "0" }} className= 'bg-red-500 h-[140%]  w-1 duration-300 rotate-45 absolute  left-[153px] top-[-62px]'></div>    
                <div style={{width : a1=="X" && a5 =="X" && a9 =="X" || a1=="O" && a5=="O" && a9=="O" ? "3px" : "0" }} className= 'bg-red-500 h-[140%]  w-1 duration-300 -rotate-45 absolute  left-[153px] top-[-62px]'></div>      
                                     
            </div>  
            <div className='tt-l'> Player 1 = X </div>
            <button onClick={()=> window.location.reload()} className='bg-purple-950 rounded-lg h-[6vh] w-[10vh]  text-[18px] absolute bottom-[15vh] text-white '>RESET</button> 
            <div className='tt-l1'> Player 2 = O </div>

            <div className='absolute bottom-0 text-black '>Made with ❤️ By Palash</div>
        </div>
    )
}

export default TicTacToe