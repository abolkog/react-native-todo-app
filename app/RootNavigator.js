/**
* Root Navigator : Zay al router keda
* We define all our routes here
*/
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import LoginForm from './LoginForm';
import Splash from './Splash';
import AddTask from './AddTask';

const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: false
    }
  },

  Login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
      headerLeft: false
    }
  },
  Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
  },
  AddTask: {
      screen: AddTask,
      navigationOptions: {
        title: 'Add New Task'
      }
  }

});

export default RootNavigator;
