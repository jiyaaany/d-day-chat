import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
          />
          <TextInput />
        </View>
        <Text style={ styles.loadingText }>
          Now Loading..
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
  },
  loadingText: {
    fontSize: 45,
  }
});