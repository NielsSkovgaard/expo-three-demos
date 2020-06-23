import React from 'react';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { FlatListDataItems } from '../components/HomeScreen/FlatListDataItems';
import FlatListItem from '../components/HomeScreen/FlatListItem';

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <FlatList
      data={FlatListDataItems}
      renderItem={({ item }) => (
        <FlatListItem
          title={item.title}
          onPress={() => navigation.navigate(item.screenName)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
}
