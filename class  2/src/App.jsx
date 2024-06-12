

// function App () {
// hooks  === normal js ka function hain jo react na banai hua or export kra hua ha bss

// const { useRef } = require("react");

// const { useRef } = require("react");
// const { useState } = require("react");

// let [count , setCount ] = useState(0)

// function addCounter () {
//   setCount(count + 1);
// }

// function lesCount () {
//   if (count > 0) {
//     setCount(count - 1)
//   }
// }

// }


// let [todo, setTodo ] = useState(["a", "b", "c" ]);

// let  userName = 'abdullah';
// let user  = {
//   userName : "Abdullah",
//   email : "abdullahsheikh2gmail.com",
//   age : 19,
// } 


// let userInput = useRef();


// const addTodo = (event) => {
//   event.preventDefault()


//   console.log('todo added ', userInput.current.value);
//   userInput.current.value = "" 
// }

// return {
//   <>
//   {
//     <h1>hellow world  {count} </h1>
//     <button onClick={addCounter}>count + </button>
//     <button onClick={lesCounter}>count - </button>


//     <h1>Todo App</h1>
//     <form onSubmit={addTodo}>
//       <input type="text" placeholder="enter todo"  ref={userInput}/>
//       <button type="submit">Add Todo</button>
//     </form>

//     <ul>
//       {todo.map((item, index) => {
//         return <li key={index}>{item}
//         </li>
//       })}
//     </ul>


// <h1>
//   {userName}
// </h1>

// <ul>
//   <li>{user.userName}</li>
//   <li>{user.email}</li>
//   <li{user.age}></li>
// </ul>

// </>




//   }
// }

// let todo = ["a", "b", "c"]

// let userName = "Abdullah";
// let user = {
//   userName : "Sheikh Abdullah",
//   email :"abdullahsheikh2gmail.com",
//   age : 20
// }


// let userInput = useRef()

// const addTodo = (event) => {
//   event.preventDefault()


//   console.log('todo added ', userInput.current.value );
//   userInput.current.value = ""
// }

// return ( 
//   <>
//   <h1>Todo App</h1>
//   <form onSubmit={addTodo} >
//     <input type="text" placeholder="enter todo"  ref={userInput} />
//     <button type="submit">Add todo</button>
//   </form>

//   <ul>
//     {todo.map((item, index) => {
//       return <li key={index}>{item}</li>
//     })}
//   </ul>

//   <h1>{userName}</h1>
//   <ul>
//     <li>{userName.userName}</li>
//     <li>{userName.email}</li>
//     <li>{userName.age}</li>
//   </ul>
//   </>
// )



// let todo = ["a", "b", "c"]

// let userName = "Abdullah"

// let user = {
//   userName : "Abdullah",
//   email : "abdullahsheykh@gmail.com",
//   age  : "10"
// }


// let userInput = useRef();

// const addTodo = (event ) => {
//   event.preventDefault()

//   console.log('todo added', userInput.current.value);
//   userInput.current.value = ""
// }


// return (
//   <>
//   <h1>Todo App</h1>
//   <form onSubmit={addTodo}>
//     <input type="text" placeholder="enter todod" ref={userInput} />
//     <button type="submit">Add todo</button>
//   </form>

//   <ul>
//     {todo.map ((item, index) {
//       return <li key={index} > {item>}</li>
//     })}
// </ul>
//     <h1>{userName}</h1>
//     <ul>
//     <li>{userName.userName}</li>
//     <li>{userName.email}</li>
//     <li>{userName.age}</li>
//     </ul>
//   </>
// )


// Real Ha 

// import { useState } from "react";
// import { useRef } from "react";

// function App() {
//   //hooks kuch nahi 
//   const userInput = useRef();
//   const [todo, setTodo] = useState([]);

//   const addTodo = () => {
//     console.log(userInput.current.value);
//     todo.push(userInput.current.value);
//     setTodo([...todo])
//     console.log(todo);
//     userInput.current.value = ''
//   }

//   const deleteTodo = (index) => {
//     console.log('todo deleted', index);
//     todo.splice(index , 1);
//     setTodo([...todo])
//   }

//   const editTodo = (index)=>{
//     const updatedValue = prompt('enter updated value')
//   }

//   return (
//     <>
//       <h1>Hello world!</h1>
//       <input type="text" placeholder="enter todo" ref={userInput} />
//       <button onClick={addTodo}>AddTodo</button>
//       <ul>
//         {todo.map((item, index) => {
//           return <li key={index}>{item}
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//             <button onClick={()=>editTodo(index)}>Edit</button>
//           </li>
//         })}
//       </ul>
//     </>
//   )
// }

// export default App


// import { useState, useRef } from "react";

// function App() {
//   const userInp = useRef();
//   const [todo, setTodo] = useState([]);

//   function addTodo() {
//     setTodo([...todo, userInp.current.value]);
//     userInp.current.value = ""
//   }

//   const deleteTodo = (index) => {
//     // const newTodos = todo.filter((_, i) => i !== index);
//     todo.splice(index, 1)
//     setTodo([...todo]);

//   };

//   const editTodo = (index) => {
//     const newValue = prompt("Edit your todo", todo[index]);
//     const newTodos = todo.map((item, i) => (i === index ? newValue : item));
//     setTodo(newTodos);
//   };

//   return (
//     <div className="bg-purple-700	h-screen ">
//     <div className="w-2/4 min-h-96 border-2 shadow-2xl shadow-gray-400  bg-[#1A1A40] pt-2 border-none  mx-auto text-center  "  >
//       <h1 className="font-bold  text-white text-5xl  " >Todo List</h1>
//       <input placeholder="What is the Task Today?" className="text-white pl-3 mt-8 text-lg bg-[#1A1A40] border-solid border-2 border-indigo-600  w-2/4 min-h-11"   type="text" ref={userInp} />
//       <button className="border-2 border-none  font-medium cursor-pointer bg-[#8758FF] min-h-11 w-24 text-base  text-white " onClick={addTodo}>Add Todo</button>
//       <ul className="text-white text-base  ">
//         {todo.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button className="text-white  min-h-9 w-24 border-2 mt-6 mx-2 cursor-pointer " onClick={() => deleteTodo(index)}>Delete</button>
//             <button className="text-white  border-2 min-h-9 w-24 cursor-pointer" onClick={() => editTodo(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// }

// export default App;





import { useState } from "react";
import {useRef} from 'react'

const App = () => {
    const Inp = useRef()
    const [todo, setTodo] = useState([])


    function addTodo () {
        setTodo([...todo, Inp.current.value])
        Inp.current.value = ""
    }

    const deleteTdo = (index) => {
        todo.slice(index, 1)
        setTodo([...todo])
    }


    const editTodo = (index) => {
        const userInp = prompt("Enter Update Value", todo[index])
        const newTodo = todo.map ((item, i) => (i === index ? userInp : item))
        setTodo(newTodo)
    }
    return (
        <>
        <h1>Todo List</h1>
        <input className="border-2" type="text" placeholder="Enter Any Text" name="" id="" />
        <button onClick={addTodo}>Search</button>
        <ul>
            {todo.map((item, index) => {
                <li key={index}>{item}
                <button onClick={deleteTdo}>Delete</button>
                <button onClick={editTodo}>Edit</button>

                </li>
            })}
        </ul>
        </>
    )
}


export default App



// import {useRef, useState} from 'react'


// const App = () => {
//     const userInp = useRef()
//     const [todo, seTodo ] = useState()

//     const addTodo = () => {
//         seTodo([...todo, userInp.current.value])
//         userInp.current.value = ""
//     } 

//     const deleteTodo = (index) => {
//         todo.silce(index,1 )
//         seTodo([...todo])
//     }

//     const editTodo = (index) => {
//         const newtodo = prompt("Enter Updated Value", todo[index])
//         const newValue = todo.map((item, i) => (i === index ?  userInp : item))
//     }


//     return (
//         <>
//         <h1>Hellow Tdo</h1>
//         <input className='border-2' type="text" name="" id="" placeholder='Enter Upadte Value' ref={userInp}  />
//         <button onCanPlay={addTodo}>Search</button> 
//         <ul>
//             {}
//         </ul>
//         </>
        
//     )

// }


// export default App




// import {useState, useRef} from 'react'


// const App = () => {
//     const userInp = useRef()
//     const [todo, setTodo ] = useState([])

// const addTodo = () => {
//     setTodo([...todo, userInp.current.value])
//     userInp.current.value = ""
//     }

//     const deleteTodo = (index) => {
//         todo.splice(index , 1)
//         setTodo([...todo])
//     }

//     const editTodo = (index) => {
//         const useIp = prompt("Enter Updated Value", todo[index])
//         const newArr = todo.map((item, i) => (i === index ? useIp : item))
//     }


//     return (
//         <>
//         <h1>Hellow Todo</h1>
//         <input type="text" placeholder='Enter Value'  name="" id=""  />
//         <button onClick={ addTodo }>Search</button>
//         <ul>
//             {todo.map((item, index) => {
//                 <li key={index}>{item}
//                 <button onClick={ () => deleteTodo (index)}>Delte</button>
//                 <button onClick={editTodo (index)}>Edit</button>
//             </li>
//             })}
//         </ul>
//         </>
//     )
//  }


//  export default App
// className="text-center text-lg

// import { useState } from "react";
// import { useRef   } from "react";



// function App () {
//   const userInp = useRef()
//   const [todo, setTodo] = useState ([])

//   const addTodo = () => {
//     console.log(userInp.current.value);
//     todo.push(userInp.current.value);
//     setTodo([...todo])
//     console.log(todo);
//     userInp.current.value = ""
//   }

//   const deleteTodo = (index) => {
//     console.log('todo deleted', index);
//     todo.splice(index, 1)
//     setTodo([...todo])
//   }


//   return (
//     <>
//     <h1>hellow World</h1>
//     <input type="text" placeholder="Enter Todo" name="" ref={userInp} id="" />
//     <button onClick={addTodo}>Add Todo</button>
//     <ul>
//       {todo.map((item, index) => {
//         return <li key={index}>{item}
//         <button onClick={() => deleteTodo(index)}>Delete</button>
//         </li>
//       })}
//     </ul>
//     </>
//   )
// }


// export default App

// import { useState } from "react";
// import { useRef } from "react";
// // import { createLogger } from "vite";

// function App() {
//   //hooks kuch nahi 
//   const userInput = useRef();
//   const [todo, setTodo] = useState([]);

//   const addTodo = () => {
//     console.log(userInput.current.value);
//     todo.push(userInput.current.value);
//     setTodo([...todo])
//     console.log(todo);
//     userInput.current.value = ''
//   }

//   const deleteTodo = (index) => {
//     console.log('todo deleted', index);
//     todo.splice(index , 1);
//     setTodo([...todo])
//   }

//   const editTodo = (index)=>{
//     const updatedValue = prompt('enter updated value')
//   }

//   return (
//     <>
//       <h1>Hello world!</h1>
//       <input type="text" placeholder="enter todo" ref={userInput} />
//       <button onClick={addTodo}>AddTodo</button>
//       <ul>
//         {todo.map((item, index) => {
//           return <li key={index}>{item}
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//             <button onClick={()=>editTodo(index)}>Edit</button>
//           </li>
//         })}
//       </ul>
//     </>
//   )
// }





// function App () {
//   const userInp = useRef()
//   const [todo, setTodo] = useState([])

//   const addTodo = () => {
//     console.log(userInp.current.value);
//     todo.push(userInp.current.value)
//     setTodo([...todo])
//     console.log(todo);

//     userInp.current.value = ""
//   }

//   const deletodo = (index) => {
//     console.log('todo deleted', index);
//     todo.splice(index, 1)
//     setTodo([...todo])

//   }

//   return (
//     <>
//     <h1>Hellow World</h1>
//     <input type="text" placeholder="Enter Todo" name="" id="" ref={userInp} />
//     <button onClick={addTodo}>Add Todo</button>    
//     <ul>
//       {todo.map((item,index ) => {
//         return <li key={index}>{item}
//         <button onClick={() => deletodo(index)}>delete</button>
//         </li>
//       }
//       })}
//     </ul>
//     </>
//   )
// }
// e

// xport default App




// import React from 'react'

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App
































// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);