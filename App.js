import React from 'react';
import {View} from 'react-native';
import { AppRegistry } from 'react-native';
import AppContainer from './Navigator';



export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer />
      </View>
  )

  }
}
AppRegistry.registerComponent('todo', () => App);





