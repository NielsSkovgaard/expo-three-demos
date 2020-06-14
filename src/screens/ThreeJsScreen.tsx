import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThreeJsScreenView from '../components/ThreeJsScreen/ThreeJsScreenView';

export default function ThreeJsScreen() {
  return (
    <View style={styles.container}>
      <ThreeJsScreenView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
