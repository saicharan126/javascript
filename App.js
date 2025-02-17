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


// import React,{useState} from 'react';
// //counter componenet

// const Counter=()=>{
//   const[count,setCount]=usestate(0);
//   //current state count
//   //
//   //usestate to initialize
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() =>setCount(count+1)}>Increment</button>
//       <button onClick={() =>setCount(count-1)}>Decrement</button>
//     </div>
//   )
// }
// export default Counter;

// import React from "react";

// import Greeting from "./Greeting";

// function App(){
//   const isLoggedIn = true;

//   return(
//     <div className="App">
//       <Greeting isLoggedIn={isLoggedIn}/>
      
//     </div>
//   )
// }
// export default App;

// import {useState} from "react";

// import ChildA from "./ChildA"
// import ChildB from "./ChildB"

// const Parent=()=>{
//     const[count,setCount]=useState(0);
//     const increment=()=>{
//         setCount(c=>c+1);
    
//      const decrement=()=>{
//           setCount(c=>c-1);
    

//     }
//   }
//     return(
//         <div>
//             <ChildA/>
//             <ChildB count={count} increment={increment} decrement={decrement}/>
        
//         </div>

//     )
// }
// export   default  Parent;

// function App(){
//   const data="Hello I am Sainath"
//   return(
//   <div>
//     <User1 data={data}/>
//     <User2 data={data}/>
//     <User3 data={data}/>
//     <User4 data={data}/>
//     </div>
//     )

// }
// //user1 componenet
// function User1({data}){
//   return<User1: {data}/>

// }
// //user2 componenet
// function User2({data}){
//   return <h2> User3: data={data}</h2>
// }
// //user3 componenet
// function User3({data}){
//   return<User4 data={data}/>
// }
// //user4 componenet
// function User4({data}){
//   return<div data={data}></div>
// }

// export default App;
// function App() {
//   const data = "Hello I Am Saicharan";
//   return (
//     <div>
//       <User1 data={data} />
//       <User2 data={data} />
//       <User3 data={data} />
//       <User4 data={data} />
//     </div>
//   );
// }

// function User1({ data }) {
//   return <h2>User 1: {data}</h2>;
// }

// function User2({ data }) {
//   return <h2>User 2: {data}</h2>;
// }

// function User3({ data }) {
//   return <h2>User 3: {data}</h2>;
// }

// function User4({ data }) {
//   return <h2>User 4: {data}</h2>;
// }

// export default App;



// import React,{createContext, useContext}from 'react';
// const DataContext = createContext();

// function App(){
//   const data="Hello I am saicharan"
//   return(
//     <DataContext.Provider value={data}>
// <User1></User1>

//     </DataContext.Provider>
//   )
// }
// // user1 compomnent
// function User1({data}){
//   return<User2 />
// }
// function User2({data}){
//   return<User3/>
// }
// function User3({data}){
//   return<User4 />
// }
// function User4(){
//   const data=useContext(DataContext)
//   return<div>{data}</div>
// }
// export default App;

// import React from "react";

// function App() {
//   const data = {
//     name: "saicharan",
//     email: "charan@gmail.com"
//   };

//   return <User1 data={data} />;
// }

// function User1({ data}) {
//   return <User2 data={data} />;
// }

// function User2({ data }) {
//   return <User3 data={data} />;
// }

// function User3({ data }) {
//   return <Profile data={data} />;
// }

// function Profile({ data }) {
//   return (
//     <div>
//       <h2>  porfile  </h2>
//       <h2>Name: {data.name}</h2>
//       <h2>Email: {data.email}</h2>
//     </div>
//   );
// }

// export default App;


// import React, { createContext, useContext } from "react";


// const UserContext = createContext();

// function App() {
//   const user = {
//     name: "saicharan ",
//     email: "charan@gmail.com"
//   };

//   return (
//     <UserContext.Provider value={user}>
//       <User1 />
//     </UserContext.Provider>
//   );
// }

// function User1() {
//   return <User2 />;
// }

// function User2() {
//   return <User3 />;
// }

// function User3() {
//   return <Profile />;
// }


// function Profile() {
//   const user = useContext(UserContext);
  
//   return (
//     <div>
//      <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// }

// export default App;
// import React, { useReducer } from 'react';
// import './App.css';
// import appleImage from './apple.jpg';

// function appleReducer(state = 3, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'EAT_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 3);
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//       <h1>Apple Counter</h1>
//       <p>NUMBER OF APPLES: {state}</p>
//       <div>
//         {Array.from({ length: state }).map((_, index) => (
//           <img key={index} src={appleImage} alt='Apple' style={{ width: '50px', height: '50px', margin: '5px' }} />
//         ))}
//       </div>
//       <button className='a' onClick={() => dispatch({ type: 'ADD_APPLE' })}>ADD APPLE</button>
//       <button className='b' onClick={() => dispatch({ type: 'EAT_APPLE' })}>EAT APPLE</button>
//     </div>
//   );
// }

// export default App;


// import React, { useReducer } from 'react';
// import './App.css';
// import confetti from 'canvas-confetti';

// function appleReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'EAT_APPLE':
//       return state > 0 ? state - 1 : state;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 4);

//   const handleEatApple = () => {
//     if (state > 0) {
//       dispatch({ type: 'EAT_APPLE' });
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };
//   const handleAddApple = () => {
//     if (state > 0) {
//       confetti({
//         particleCount: 200,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };

//   return (
//     <div>
//       <center>
//       <h1>NUMBER OF APPLES: {state}</h1>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         {Array.from({ length: state }).map((_, index) => (
//           <img
//             key={index}
//             src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"
//             alt="Apple"
//             style={{ width: '150px', height: '200px', margin: '5px' }}
//           />
//         ))}
//       </div>
//       <a onClick={handleAddApple}>
//       <button className='a' onClick={() => dispatch({ type: 'ADD_APPLE' }) } >ADD APPLE</button>
//      </a>
//       {/* onClick={() => dispatch({ type: 'ADD_APPLE' }) }> */}
        
//       <button className='b' onClick={handleEatApple}>EAT APPLE</button>
//       </center>
//     </div>
//   );
// }

// export default App;


// function App(){
//   const handleClick=()=>{
//     alert("Button clicked")
//   };
//   return(
//     <button onClick={handleClick}>click me</button>
//   )
// }
// export default App;

// import React,{useState} from "react";

// function App(){
//   const[text,setText] = useState("")
  
//   const handleChange = (event) => {
//     setText(event.target.value)
//   }

//   return(
//     <div>
//       <input type="text" value={text} onChange={handleChange}/>
//       <p>Your Text:{text}</p>
//     </div>
    
//   )
// }
// export default App;


import React, { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovered ? 'lightgrey' : 'lightblue',
          color: isHovered ? 'black' : 'white',
        }}
      >Hover me</button>
    </div>
  );
}

export default App;





