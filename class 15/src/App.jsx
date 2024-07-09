import { useState, useEffect } from "react";
import './App.css';

//useeffect : 3 stage 
// 1: Initial :
//usage Compuents ke start ho te he koi kam karana ho   
//Example : API fetching , any logical words 


useEffect(() => {

}, [])

//[] => dependences list 

//  2: Update:
// Usage : jab be koi state ya props par kam karana ho 
//Example : jab count {state } li value 5 ho jay , to ek alerat dekha den ahi 


useEffect(() => {
  if (count == 5 ) {
    alert("value 5 par hai")
  }
}, [count ])



// 3: Unmount :
//Usage : jab componenets khatm   honay wala ho , to koi kam karwana ho 
//Example : koi lister  khatam karwana ho


useEffect(() => {
  const onclick = () => {
    console.log('click lister chal raha ha');
  }
  document.addEventListener('click', onclick)
  return (
    document.removeEventListener('click', onclick)
  )
}, [])


function App () {
  const [count, setCount ] = useState(0)
  const [bulb, setBulb ] = useState(false)
  const toggle = () => {
    setBulb(!bulb)
  } 

  useEffect(() => {
    console.log('initail');
  }, [])

  useEffect(() => {
    console.log('update', count);
    if (count == 5) {
      alert("5 hogaya hai")
    }
  }, [count])
}