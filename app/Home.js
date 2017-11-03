//Import needed libraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';

//Create Component
class Home extends Component {

  static navigationOptions = ({ navigation }) => {
      const logoutBtnStyle = { paddingRight: 10 };
      const { params = {} } = navigation.state;
      const headerRight = (
        <TouchableOpacity style={logoutBtnStyle} onPress={params.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

      );

      return { headerRight };
    };

  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout.bind(this) });
  }

  _logout() {
    AsyncStorage.removeItem('app_token');
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
