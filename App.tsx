import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Calculator from './screens/Calculator';

const App: React.FC = props => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Calculator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
