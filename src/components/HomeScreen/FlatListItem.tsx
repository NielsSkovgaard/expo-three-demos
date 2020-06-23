import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

interface FlatListItemProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function FlatListItem(props: FlatListItemProps) {
  let { title, onPress } = props;
  return (
    <TouchableHighlight
      style={styles.flatListItem}
      activeOpacity={0.6}
      underlayColor="#ddd"
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  flatListItem: {
    marginTop: 5,
    padding: 20,
    backgroundColor: '#fff',
  },
});
