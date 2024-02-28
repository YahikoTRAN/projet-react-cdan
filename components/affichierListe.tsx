import React from 'react';
import { Text, View, SectionList } from 'react-native';


const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const ExportListe = () => (
    <>
      <SectionList sections={DATA} keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
          )}
      renderSectionHeader={({section: {title}}) => (
          <Text>{title}</Text>
          )} />
    </>
  );
export default ExportListe;
  