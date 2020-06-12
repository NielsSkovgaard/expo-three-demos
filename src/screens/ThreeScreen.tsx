import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeScreenView from '../components/ThreeScreen/ThreeScreenView';

export default function ThreeScreen() {
  return (
    <View style={styles.container}>
      <ThreeScreenView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
