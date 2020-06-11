import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ReactThreeFiberCanvas from '../components/ReactThreeFiberCanvas';

import '../utils/System';

interface CardText {
  text: string;
  color: string;
}

export default function ReactThreeFiberScreen() {
  const [cardTexts, setCardTexts] = useState<CardText[]>([]);
  const scrollViewRef = useRef<any>();

  const applyCardText = (text: string, color?: string): void => {
    setCardTexts([...cardTexts, { text, color: color ?? '#000' }]);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  };

  const groupCardTextsByColor = (
    previousValue: CardText[],
    currentValue: CardText,
    currentIndex: number,
    array: CardText[]
  ): CardText[] => {
    if (
      previousValue.length > 0 &&
      previousValue[previousValue.length - 1].color === currentValue.color
    ) {
      previousValue[previousValue.length - 1].text += ` - ${currentValue.text}`;
    } else {
      previousValue.push({
        text: currentValue.text,
        color: currentValue.color,
      });
    }
    return previousValue;
  };

  return (
    <View style={styles.container}>
      <ReactThreeFiberCanvas setCardText={applyCardText} />
      <View style={styles.cardContainer}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.card}
          contentContainerStyle={styles.cardContentContainer}
        >
          <Text style={{ display: cardTexts.length === 0 ? 'flex' : 'none' }}>
            Click on an element for more info.
          </Text>
          {cardTexts
            .reduce(groupCardTextsByColor, [] as CardText[])
            .map((cardText, index) => (
              <Text key={index} style={{ color: cardText.color }}>
                {cardText.text}
              </Text>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    height: '40%',
    padding: 8,
    backgroundColor: '#485b9a',
  },
  card: {
    flex: 1,
    paddingHorizontal: '10%',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardContentContainer: {
    alignItems: 'baseline',
    justifyContent: 'center',
  },
});
