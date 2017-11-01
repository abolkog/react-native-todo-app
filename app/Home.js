//Import needed libraries
import React, { Component } from 'react';
import { View } from 'react-native';

import Button from './common/Button';

//Create Component
class Home extends Component {

  _onLoginPressed() {
    this.props.navigation.navigate('Login');
  }

  render(){
    return (
      <View>
        <Button
          onPress={ this._onLoginPressed.bind(this) }
          >
            Login
          </Button>
      </View>
    );
  }
}

//Export the component to be aviable for other components in the apps
export default Home;
