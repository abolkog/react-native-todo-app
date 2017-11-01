//Import needed libraries
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loginUser } from './actions';

import { Button, Card, CardItem, Input, Spinner } from './common';

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  _onLoginPressed() {
    const { username, password } = this.state;
    this.props.loginUser({ username, password });
  }

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this._onLoginPressed.bind(this)}>Login</Button>
    );
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
            { this._renderButton() }
        </CardItem>

      </Card>
    );
  }

}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { loginUser })(LoginForm);
