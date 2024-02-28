import React, { useRef, useState } from 'react'
import { View, Text, Button } from 'react-native'
const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;
export function CompteurV2() {

    let [counter, setCounter] = useState(0);
    let updateCounter = useRef(0);
  
    return (
      <>
        <View>


        <Button
            title="Retour"
            onPress={() => {
              moveTo.tab;
              setCounter(counter++);
            }}
          ></Button>














          <Button
            title="+"
            onPress={() => {
              updateCounter.current++;
              setCounter(counter++);
            }}
          ></Button>









          <Button
            title="-"
            onPress={() => {
              updateCounter.current--;
              setCounter(counter--);
            }}
          ></Button>
          <Button
            title="Mettre à jour"
            onPress={() => {
              setCounter(updateCounter.current);
            }}
          ></Button>
          <Button
            title="Reset"
            onPress={() => {
              updateCounter.current = 0;
              setCounter(0);
            }}
          ></Button>
          <Text>{counter}</Text>
        </View>
      </>
    );
    
  }