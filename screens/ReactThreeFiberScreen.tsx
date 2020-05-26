﻿﻿import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReactThreeFiberScreen() {
  return (
    <View style={styles.container}>
      <Text>React Three Fiber Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
