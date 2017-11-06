import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    flex: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  textStyle: {
    alignSelf: 'flex-start',
    fontSize: 16
  },
  statusText: {
    alignSelf: 'flex-end',
    fontSize: 15
  },
  done: {
    color: 'green'
  },
  pending: {
    color: 'red'
  }
});

const ListItem = (props) => {
  const statusStyle = props.status ? styles.done : styles.pending
  return(
    <View style={styles.listItem}>
      <Text style={styles.textStyle} >{ props.name }</Text>
      <Text style={[styles.statusText, statusStyle]}>{props.status ? 'Done' : 'Pending'}</Text>
    </View>
  );
};


export { ListItem };
