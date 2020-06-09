import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactThreeFiberCanvas from '../components/ReactThreeFiberCanvas';

import '../utils/System';

export default function ReactThreeFiberScreen() {
  return (
    <View style={styles.container}>
      <ReactThreeFiberCanvas />
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>
            Show information about the active element in the 3D scene here.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
