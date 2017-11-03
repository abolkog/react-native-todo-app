//Import needed libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Create Component
class Home extends Component {

  _onLoginPressed() {
    this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

//Export the component to be aviable for other components in the apps
export default Home;
