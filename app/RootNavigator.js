/**
* Root Navigator : Zay al router keda
* We define all our routes here
*/
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import LoginForm from './LoginForm';

const RootNavigator = StackNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
  },
  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login'
    }
  }
});

export default RootNavigator;
