import React, { useState } from 'react'

function App() {
  let [userScore,setUserScore] = useState(0)
  let [computerScore,setComputerScore] = useState(0)
  let [rounds, setRounds] = useState(0)
  let [message, setMessage] = useState("")
  let [history, setHistory] = useState([])
  let [streak, setStreak] = useState(0)

  function handleClick(userMove){
    let random = Math.random()
    let computerMove = random<0.33 ? "Rock": random<0.67 ? "Paper" : "Scissors"
    let _compscore = computerScore
    let _userscore = userScore

    let result = ""


    if (userMove===computerMove){
      result = "Draw"
    }else if(
      userMove==="Rock" && computerMove==="Scissors" ||
      userMove==="Paper" && computerMove==="Rock" ||
      userMove==="Scissors" && computerMove==="Paper" 
    ){
      _userscore++
      result = "User Wins"
      setStreak(streak + 1)   
    }else{
      _compscore++
      result = "Computer Wins"
      setStreak(0)            
    }

    setUserScore(_userscore)
    setComputerScore(_compscore)
    setRounds(rounds + 1)
    setMessage(result)
    setHistory([
      ...history,
      `User: ${userMove} | Computer: ${computerMove} → ${result}`
    ])
  }

  function resetIt(){
    setUserScore(0)
    setComputerScore(0)
    setRounds(0)
    setMessage("")
    setHistory([])
    setStreak(0)
  }
  
  return (
    <div style={{textAlign:"center"}}>
      <h1>Computer : User</h1>
      <h2>{computerScore} : {userScore}</h2>
      <h3>Rounds Played: {rounds}</h3>
      <h3>Current Streak: {streak}</h3>
      <h3>{message}</h3>

      <button id='rock' className='rps' onClick={()=>{handleClick("Rock")}}></button>
      <button id='paper' className='rps' onClick={()=>{handleClick("Paper")}}></button>
      <button id='scissors' className='rps' onClick={()=>{handleClick("Scissors")}}></button><br/>
      <button id='reset' className='rps' onClick={resetIt}></button>
      <div>
        <h3>History</h3>
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default App