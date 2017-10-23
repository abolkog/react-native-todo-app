//Import needed libraries
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import Header from './app/Header';

//Create Component
const Todo = () => {
  return(
    <View>
      <Header></Header>
      <Text>Hello World</Text>
    </View>
  );
}

//Rendering on the device
//Must register at least 1 component
AppRegistry.registerComponent('ReactTodoApp', ()=> Todo);
