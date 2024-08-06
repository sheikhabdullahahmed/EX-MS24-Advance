import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


function App () {
  return (
    <Provider store={store}>
      <PersistGate loading= {null} persistor={persistor}>
    <>
    <h1>Todo</h1>
    </>
    </PersistGate>
    </Provider>
    
  )
}