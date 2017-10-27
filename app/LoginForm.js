//Import needed libraries
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  _onLoginPressed() {
    console.log(`User Name is : ${this.state.username} and Password is ${this.state.password}`)
  }

  render(){
    return (
      <Card>

        <CardItem>
          <Input
            label='Email'
            placeholder='Enter your email'
            secureTextEntry={false}
            onChangeText={(username) => this.setState({ username  }) }
          />
        </CardItem>

        <CardItem>
          <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password }) }
          />
        </CardItem>

        <CardItem>
          <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
        </CardItem>

      </Card>
    );
  }

}


export default LoginForm;
