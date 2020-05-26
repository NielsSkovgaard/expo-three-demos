﻿﻿import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactThreeFiberCanvas from '../components/ReactThreeFiberCanvas';

import '../utils/System';

// TODO: It appears that when a <Canvas> is wrapped in a <View>, then the <Canvas> becomes hidden. How to fix this?
export default function ReactThreeFiberScreen() {
  return (
    <>
      <ReactThreeFiberCanvas />
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>Show information about the active element in the 3D scene here.</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: '25%',
    padding: 8,
    backgroundColor: '#485b9a',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
