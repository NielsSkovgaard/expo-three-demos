import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeScene from '../components/ThreeJsWithoutOrbitControlsScreen/ThreeScene';

export default function ThreeJsWithoutOrbitControlsScreen() {
  return (
    <View style={styles.container}>
      <ThreeScene />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
