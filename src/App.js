//useMemo
import React, { useState , useMemo} from 'react'


const App = () => {
  const [count,setCount]=useState(0);
  const [dark,setDark]=useState(false);
  const memoCalculation = useMemo(() => {
  const calculation=handleClick(count);
  return calculation;
  }, [count]);
  const cssStyle={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }
  return (
    <div style={cssStyle}>
     <h1>{process.env.REACT_APP_WELCOME_TEXT}</h1>

     <input type='number'
     value={count}
     onChange={(e)=>setCount(e.target.valueAsNumber)}
     />
     <h1>calculation:{memoCalculation}</h1>
      
      <button onClick={()=>setDark(!dark)}>Toggel</button>
    </div>
  )
}
function handleClick(num){
    console.log("Loop started");
  for(let i=0;i<10000;i++){}
  return num;
}

export default App




// //UseReduser
// import React, { useReducer } from 'react'
// const initialState={count:0};
// const reducer=(state,action)=>{
//   switch (action.type){
//     case "increase":
//     return{count:state.count+1};
//     case "decrease":
//     return{count:state.count-1};
//     default:
//       case "increase":
//     return state;
//   }

// }
// const App = () => {
//   const [state,dispatch]=useReducer(reducer,initialState);
//    function IncreaseEle(){
//       dispatch({type:"increase"})
//    }
//    function DecreaseEle(){
//       dispatch({type:"decrease"})
//    }
//   return (
//     <div>
//       <h1>Count:{state.count }</h1>
//       <button onClick={IncreaseEle}>Increase</button>
//       <button onClick={DecreaseEle}>Decrease</button>
//     </div>
//   )
// }

// export default App



//useRef Hook

// import React, { useEffect, useRef,useState } from 'react'

// const App = () => {
//   // const [name,setName]=useState("");
//   // const count=useRef(0);
//   // useEffect(
//   //   ()=>{count.current=count.current+1

//   // })
//   const inputEle=useRef();
//   function handleClick(){
//       inputEle.current.style.width="400px";
//       inputEle.current.focus();
//   }
//   return (
//     <div>
//       {/* <input type='text' onChange={(e)=>setName(e.target.value)}/>
//       <h1>{count.current}</h1> */}
//       <input type="text" ref={inputEle}/>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default App


// UseContex Hook


// import React,{createContext, useState} from 'react'
// import MainComponent from './MainComponent';
// export const LoginContext=createContext();
// const App = () => {
//   const [count,setCount]=useState(0);
//   return (
//     <LoginContext.Provider value={count}>
//       <div>
//        <MainComponent/>
//        <button onClick={()=>setCount(count+1)}>Counter</button>
//     </div>
//     </LoginContext.Provider>
//   )
// }

// export default App


// UseState && UseEffect




// import React from 'react'
// import { useState, useEffect } from "react"
// import Counter from './counter'

// const App = () => {
//   // const [count,setCount]=useState(0);
//   // function increasCount(){
//   //   setCount(count+1);
//   // }
//   // const [data,setData]=useState(0);
//   // const[mode,setMode]=useState("Normal");
//   // function changeMode(){
//   //   setMode(mode==="Normal"?"Dark":"Normal");
//   //   }
//   // const[name,setName]=useState("");
//   // useEffect(()=>{
//   //   document.title=`${count} Count App`;
//   // },[count]);
//   const [count,setCount]=useState(0);
//   const [data,setData]=useState(0);
//   return (
//     <div>
//       <h1>Harshal There</h1>
//       <Counter counter={count} data={data} />
//       <button onClick={()=>setCount(count+1)}>Counter</button>
//       <button onClick={()=>setData(data+1)}>Data: {data}</button>
//       {/* <button onClick={increasCount}>Counter: {count}</button>
      
//       <button onClick={()=>setData(data+1)}>Data: {data}</button> */}
//       {/* { <br></br>
//       <button onClick={changeMode}>{mode}</button>
//        <input type="text" onChange={e=>setName(e.target.value)}/>
//       <h2>{name}</h2> } */}
//     </div>
//   )
// }

// export default App
