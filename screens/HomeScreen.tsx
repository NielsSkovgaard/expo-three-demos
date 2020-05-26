import React from 'react';
import { FlatList, GestureResponderEvent, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface FlatListDataItem {
  id: string;
  title: string;
  screenName: keyof RootStackParamList;
}

const FlatListDataItems: FlatListDataItem[] = [
  {
    id: 'Three',
    title: 'Three',
    screenName: 'Three',
  },
  {
    id: 'ReactThreeFiber',
    title: 'React Three Fiber',
    screenName: 'ReactThreeFiber',
  },
];

interface FlatListItemProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

function FlatListItem({ title, onPress }: FlatListItemProps) {
  return (
    <TouchableHighlight
      style={styles.flatListItem}
      activeOpacity={0.6}
      underlayColor="#ddd"
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
}

export default function HomeScreen({ navigation }: StackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <FlatList
      data={FlatListDataItems}
      renderItem={({ item }) =>
        <FlatListItem
          title={item.title}
          onPress={() => navigation.navigate(item.screenName)}
        />
      }
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  flatListItem: {
    marginTop: 5,
    padding: 20,
    backgroundColor: '#fff',
  },
});
