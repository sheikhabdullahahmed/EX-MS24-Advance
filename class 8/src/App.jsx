// import axios from 'react'
// import {useEffect, useRef} from 'react'
// import {useState} from 'react'

// const App = () => {
//   const [question ,setQuestion] = useState(null)
//   const [currentIndex,  setCurrentIndex] = useState(0)

//   useEffect(() => {
//     axios('')
//   })
  

// }



import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [questions, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(0)
 
  const checkedInput = useRef()
  // useeffect for api calling
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then((res) => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch((error) => {
        console.log('error ===>', error)
      })
  }, [])

  //change question
  const nextQuestion = () => {
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(currentIndex + 1); //thora sa time leta ha
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // setCurrentIndex(prev => prev + 1)
    // console.log(currentIndex);

    const selectedOption = checkedInput.current.querySelector('input:checked');
    console.log(selectedOption.value);


    if (questions[currentIndex].correctAnswer === selectedOption.value) {
      console.log('shai answer lagaya hai');
      setResult((result + 10))
    }
    else {
      console.log('galat answer hai');
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log('maalik questions khtm hogaye hain!')
    }
  }

  //shuffle array
  function shuffleArray(arr) {
    let newArr = arr.slice();

    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  }


  return (
    <>
      <h1>Quiz App!</h1>
      {questions ?
        <div>
          <h1>Q{currentIndex + 1}: {questions[currentIndex].question.text}</h1>
          <ul ref={checkedInput}>
            {shuffleArray([...questions[currentIndex].incorrectAnswers, questions[currentIndex].correctAnswer]).map((item, index) => {
              return <li key={index}>
                <input type="radio" name='choice' id={item} value={item}/>
                <label htmlFor={item}>{item}</label>
              </li>
            })}
          </ul>
          <button onClick={nextQuestion}>Next</button>
        </div>
        : <h1>Loading...</h1>}
    </>
  )
}

export default App