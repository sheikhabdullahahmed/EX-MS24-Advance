// import React from 'react'

// function App() {
//   return (
//     <div>
//       <input title='fullanm' placeholder='Enter Your Name' / >
//     </div>
//   )
// }

// export default App


// import axios from 'axios'
// import React, {useRef, useState } from 'react'
// import {useEffect} from 'react'

// const App = () => {
//     const [questions, setQuestions] = useState(null)
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const [total, setTotal] = useState(0);
//     const [result, setResult] = useState(0);
//     const seletedOptionRef = useRef()


//     // get quiz appplocation

//     useEffect(() => {
//         axios('https://the-trivia-api.com/v2/questions')
//         .then((res) => {
//             console.log(res.data);
//             setQuestions(res.data);
//             setTotal(res.data.length * 10)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }, [])
// }




import axios from 'axios'
import React, {useRef, useState} from 'react'
import {useEffect} from 'react' 


const App = () => {
    const [question, setQuestion] = useState(null)
    const [current, setCurrentIndex ] = useState(0)
    const [totalMarks, setTotalMarks ] = useState(0)
    const [result, setResult] = useState(0)
    const setOptionalRef =  useRef()
    
    useEffect(() => {
        axios('https://the-trivia-api.com/v2/questions')
        .then((res) => {
            console.log(res.data);
            setQuestion(res.data);
            setTotalMarks(res.data.length * 10);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    function shuffleArray(arr) {
        let newArr = arr.slice();
        
        for (let i = newArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        
        return newArr;
    }
    


    // nexquestion

    const nextQusetion = () => {
        // gte checked value 
        const seletOption  = setOptionalRef.current.querySelector('input : checked');
        console.log(seletOption.value);


        if (question[current].correctAnswer === seletOption.value) {
            console.log('sahi answer lagaya hai.');
            setResult(result + 10)
        }else {
            console.log('galat answer hai ');
        }
         if (current < question.length -1) {
            setCurrentIndex(current + 1)
        }else {
            console.log('question khatam');
        }

    }
   return (
    <>
    <h1>Quiz App</h1>
    <h1>Result {result} / {totalMarks}</h1>
    {question ?
    <div>
        <h1>Q{current + 1} :{question[current].question.text}</h1>
        <ul ref={setOptionalRef}>
            {shuffleArray([...question[current].incorrectAnswers , question[current].correctAnswer]).map((item, index) => {
                return <li key={index}>
                    <input type="radio" value={item} name="choice" id="" />
                    <label htmlFor="">{item}</label>
                </li>
            })}
        </ul>
        <button onClick={nextQusetion }>Next</button>
    </div>
    : <h1>Loading ...</h1>
    }
    </>
   )
}



export default App
