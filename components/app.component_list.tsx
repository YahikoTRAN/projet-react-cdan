// import { useReducer, useRef } from "react";

// import React, { useRef, useState } from 'react'
// import { View, Text, Button } from 'react-native'
// const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;
// export function CompteurV2() {

//     let [counter, setCounter] = useState(0);
//     let updateCounter = useRef(0);
  
//     return (
//       <>
//         <View>
//           <Button
//             title="+"
//             onPress={() => {
//               updateCounter.current++;
//               setCounter(counter++);
//             }}
//           ></Button>
//           <Button
//             title="-"
//             onPress={() => {
//               updateCounter.current--;
//               setCounter(counter--);
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




















// function ShoppingList() {
//     const inputRef = useRef();
//     const [items, dispatch] = useReducer((state:any, action:any) => {
//       switch (action.type) {
//         case 'add': return state.push(action.payload);
//         case 'remove': // keep every item except the one we want to remove
//           return state.filter((_:any, index:any) => index != action.index);
//         default:
//           return state;
//       }
//     }, []);
  
//     function handleSubmit(e:any) { /*...*/ }
  
//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <input ref={inputRef} />
//         </form>
//         <ul> {items.map((item:any, index:any) => (
//           <li key={item.id}>
//             {item.name} <button onClick={() => dispatch({ type: 'remove', index })}>X</button>
//           </li> ))}
//         </ul>
//       </> );
      
//   }
  

import { View, Text } from "react-native";
import { useReducer } from "react";

const DATA = [
    {
        id: 1,
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        id: 2,
        tot: 'tt',
        title: "Sides",
        data: ["French fries", "Onion rings", "Fried shrimps"]
    },
    {
        id: 3,
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        id: 4,
        title: "Desserts",
        data: ["Cheese cake", "Ice cream"]
    }
]

export const MyList = () => {

    const [items, dispatch] = useReducer((state:any, action:any) => {
        switch(action.type){
            case "Ajouter": return state.push({id:DATA.length+1,title:"New",data:["New"]});
            case "Supprimer": return  state.filter((_: any, index: any) => index !== action.index);
            default: return state;
        }
    }, []);
    return(
        <View>
            {DATA.map((value:any) => (
                <>
                <Text key={value.id}>
                     text={value.title} : {value.data.map((datas:any) => (datas + " - "))}</Text>
                    <MYButton title="Supprimer" sayHello={() => dispatch({type: "Supprimer", index: value.id})} color="red"></MYButton>
                </>
            ))}
            <br />
            <MYButton title="Ajouter" sayHello={() => dispatch({type: "Ajouter"})} color="red"></MYButton>
        </View>
    );
  }