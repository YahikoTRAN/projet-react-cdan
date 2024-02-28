import React from 'react'
import { View, Text } from 'react-native'
const data = [
    { id: 'a', name: 'Devin' },
    { id: 'b', name: 'Gabe' },
    { id: 'c', name: 'Kim' },
  ]
export default function AffichierListeTemplate() {
  return (
    <View>
      {data.map((item, index) => (
        <Text key={index.toString()}>{item.name}</Text>
      ))}
    </View>
  )
}

