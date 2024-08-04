
// import { store } from './store'
// import { Provider } from 'react-redux'



// function App () {
//   return (
//     <Provider store={store}>
//     <div>
//     <h1>Redux</h1>
//     </div>
//     </Provider>
//   )
// }

// export default App


// import { store } from "./store";
// import { Provider } from "react-redux";

//  export default function App () {
//   return (
//     <>
//     <Provider store={store} >
//       <h1>Redux</h1>
//     </Provider>
//     </>
//   )
// }



import { store } from "./store";
import { Provider } from "react-redux";


function App () {
  return (
    <Provider store={store}>
    <>
    <h1>Provider</h1>
    </>
    </Provider>
  )
}

export default App