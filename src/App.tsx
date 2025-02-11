import React, { useRef } from 'react'
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./lib/store";
import Routeer from "./router";
import Loader from "./assets/react.svg";



function App(){
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore()
  }


  console.log(storeRef.current);
  
  return (
    <React.Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen">
          <img src={Loader} alt="Loading..." className="max-w-md animate-pulse" />
          <h6 className="text-xs">Loading...</h6>
        </div>
      }
    >
  
        <div className="App">
          <Provider store={storeRef.current}>
            <BrowserRouter>
         
                <Routeer/>
             
            </BrowserRouter>
          </Provider>
        </div>
   
   </React.Suspense>
  );
}

export default App;
