//Import needed libraries
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './common/Button';

//Create Component
class Home extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Title from state'
    };
  }

  _onLoginPressed() {
      this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <View>
        <Button
          onPress={this._onLoginPressed.bind(this)}
          >
            Login
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#efefef',
      height: 80,
      alignItems: 'center', //Horizontal Alignment
      justifyContent: 'center', //Vertical Alignments
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold'
    }
});

//Export the component to be aviable for other components in the apps
export default Home;
