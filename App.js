// import React from "react";

// import Greeting from "./Greeting";

// function App(){
//   const isLoggedIn = true;

//   return(
//     <div className="App">
//       <Greeting isLoggedIn={isLoggedIn}/>
//       <
//     </div>
//   )
// }
// export default App;
// import React from "react";

// const FruitList =()=>{
//   const fruits = ["apple", "banana", "cherry"];
//   return (
//     <>
//     <h1>Fruit List</h1>
//     <ol>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ol>
//     </>
//   );
// }

// export default FruitList;


import React,{useState} from 'react';
//counter componenet

const Counter=()=>{
  const[count,setCount]=usestate(0);
  //current state count
  //
  //usestate to initialize
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() =>setCount(count+1)}>Increment</button>
      <button onClick={() =>setCount(count-1)}>Decrement</button>
    </div>
  )
}
export default Counter;