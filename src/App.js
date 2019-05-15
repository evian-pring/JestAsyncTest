import React, { Component } from 'react';
import { View } from 'react-native';
import actions from './actions';

export class App extends Component {
  async componentDidMount() {
    console.log('In CDM');
    await actions.asyncOne();
    await actions.asyncTwo();
    console.log('Finished async');
  }

  render() {
    return <View />;
  }
}
