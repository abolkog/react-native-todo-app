import React, { Component } from 'react';
import { Text, StyleSheet, Switch, View } from 'react-native';
import { connect } from 'react-redux';

import { addTask } from './actions';
import { Button, Card, CardItem, Input, Spinner } from './common';

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    height: 40
  },
  label: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
});


class AddTask extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      done: false,
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.saved) {
      this.props.navigation.goBack();
    }
  }

  _onSaveTask() {
    const { name, done } = this.state;
    this.props.addTask({ name, done });

  }

  _renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this._onSaveTask.bind(this)}>Save Task</Button>
    );
  }

  render(){
    return (
      <Card>

        <CardItem>
          <Input
            label='Name'
            placeholder='Enter Task Name'
            secureTextEntry={false}
            onChangeText={(name) => this.setState({ name  }) }
          />
        </CardItem>

        <CardItem>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Task Status</Text>
            <Switch
              onValueChange={(done) => this.setState({ done })}
              value={this.state.done}
            />
          </View>
        </CardItem>

        <CardItem>
            { this._renderButton() }
        </CardItem>

        <Text style={styles.errorStyle}>{this.props.error}</Text>

      </Card>
    );
  }

}


const mapStateToProps = state => {
  return {
    error: state.saveTask.error,
    loading: state.saveTask.loading,
    saved: state.saveTask.saved
  }
}

export default connect(mapStateToProps, { addTask })(AddTask);
