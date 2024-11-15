import { useEffect, useReducer } from "react";
import "./App.css";


initialValue = {
  question:[],
  // loading, error, ready, active, finished
  status:'loading'
}


function reducer(state, action){
  switch(action.type){
    case 'ready':
      return {...state, question: action.payload, status: "ready" }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer,initialValue);
  return(

  )
  useEffect(function(){
    fetch("https://www.youtube.com/").then(res=>res.json).then(data=>data)
  })
}

export default App;





