import React, { Component } from 'react';
import { View } from 'react-native';
import actions from './actions';

export class App extends Component {
  async componentDidMount() {
    console.log('In CDM');
    await actions.funcOne();
    await actions.funcTwo();
    console.log('Finished CDM');
  }

  render() {
    return <View />;
  }
}
