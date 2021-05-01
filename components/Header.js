import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>WATER REMINDER</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#0080fe',
    borderWidth:10,
    borderColor:'#0f52ba'
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
});