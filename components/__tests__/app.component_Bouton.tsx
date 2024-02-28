// import React, { useState, useEffect, useRef } from 'react'
// import { Button, View, Text } from 'react-native'

// const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;
// export function CompteurV3() {

//     let [counter, setCounter] = useState(Boolean);
//     let updateCounter = useRef(0);
  
//     return (
//       <>
//         <View>
//           <Button
//             title="+"
//             onPress={() => {
//               updateCounter.current++;
//               setCounter(true);
//             }}
//           ></Button>
//           <Button
//             title="-"
//             onPress={() => {
//               updateCounter.current--;
//               setCounter(false);
//             }}
//           ></Button>
//           <Button
//             title="Mettre à jour"
//             onPress={() => {
//               setCounter(updateCounter.current);
//             }}
//           ></Button>
//           <Button
//             title="Reset"
//             onPress={() => {
//               updateCounter.current = 0;
//               setCounter(0);
//             }}
//           ></Button>
//           <Text>{counter}</Text>
//         </View>
//       </>
//     );
    
//   }

// export default function App() {
//   const [count, setCount] = useState(0)
//   const countEvery3 = Math.floor(count / 3)
//   useEffect(() => {
//     console.log(countEvery3)
//   }, [countEvery3])
//   return (
//     <Button title={`Increment ${count}`} onPress={() => {
// 	setCount(count + 1)
// 	}}
//     />
//   )
// }
