import React from 'react';
import { View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  cardItem: {
    padding: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});

const CardItem = (props) => {
  return(
    <View style={styles.cardItem}>
      { props.children }
    </View>
  );
};


export { CardItem };
