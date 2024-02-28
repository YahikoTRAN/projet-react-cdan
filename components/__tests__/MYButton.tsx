import React from 'react';
import { Text } from './Themed';
import { TouchableHighlight } from 'react-native';

export function MYButton({title, sayHello, color, show = true} : {title:string, sayHello: any, color:string, show?:boolean}) {
  return (
    <>
      { show && (<TouchableHighlight style={{backgroundColor: color, borderRadius: 15, width: 150, height: 30 }} onPress={sayHello}>
        <Text style={{textAlign: "center", marginTop: 5}}>{title}</Text>
      </TouchableHighlight>
      )}
    </>
  );
}
