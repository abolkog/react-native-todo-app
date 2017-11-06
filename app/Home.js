//Import needed libraries
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Spinner } from './common';

import { fetchTasks } from './actions';

//Create Component
class Home extends Component {

  static navigationOptions = ({ navigation }) => {
      const logoutBtnStyle = { paddingLeft: 10 };
      const { params = {} } = navigation.state;
      const headerLeft = (
        <TouchableOpacity style={logoutBtnStyle} onPress={params.logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

      );

      return { headerLeft };
    };

  componentDidMount() {
    this.props.navigation.setParams({ logout: this._logout.bind(this) });
    this.props.fetchTasks();
  }

  _logout() {
    AsyncStorage.removeItem('app_token');
    this.props.navigation.navigate('Login');
  }

  _renderListItem = ({ item }) => {
    return <ListItem name={item.name} status={item.done} />
  }

  render(){
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.tasks}
          renderItem={this._renderListItem}
          keyExtractor={item => item._id }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.taskList.error,
    loading: state.taskList.loading,
    tasks: state.taskList.tasks
  }

}

export default connect(mapStateToProps, { fetchTasks })(Home);
