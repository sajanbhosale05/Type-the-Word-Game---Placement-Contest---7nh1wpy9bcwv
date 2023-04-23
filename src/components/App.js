import React, { useState, useEffect } from 'react';
import "../styles/App.css"

const WORD_LIST = ['apple', 'banana', 'cherry', 'grape', 'orange'];

function App() {
  const [word, setWord] = useState('');
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [index, setIndex] = useState(0);
  
  useEffect(()=>{
    setWord(WORD_LIST[index]);
    const timer=setTimeout(()=>{setTFlashWord(false)},500);
    return()=>clearTimeout(timer)
  })
  
  const handleInputChange= (e)=>{setUserInput(e.target.value);}
  const handleFormSubmit= (e)=>{if(userInput===word){setResult("You won!");}else{setResult("You lost!")}e.preventDefault();}
  
  
  const handleRestartClick=(e)=>{
    if(index>WORD_LIST.length){
      setIndex(0);
    }
    e.preventDefault();
    setIndex(index+1);
    setTFlashWord(true);
    setUserInput("");

  }
  
  const
  


  return (
    <div class="mini-game-container">
      <h2 class="mini-game-title">Mini Game</h2>
      <p class="mini-game-word">{word}</p>
{! flashWord && !result && 
      <form class="mini-game-form" onSubmit={handleFormSubmit}>
        <input class="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
        <button class="mini-game-button" type="submit">Check Answer</button>
      </form>
      {result && (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
        </>
      )}
    </div>
  );
}

export default App;
