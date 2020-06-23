interface FlatListDataItem {
  id: string;
  title: string;
  screenName: keyof RootStackParamList;
}

export const FlatListDataItems: FlatListDataItem[] = [
  {
    id: 'ThreeJs',
    title: 'Three.js',
    screenName: 'ThreeJs',
  },
  {
    id: 'ReactThreeFiber',
    title: 'React Three Fiber',
    screenName: 'ReactThreeFiber',
  },
];
