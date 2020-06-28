import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ReactThreeFiberCanvas from '../components/ReactThreeFiberScreen/ReactThreeFiberCanvas';
import SystemUtils from '../utils/SystemUtils';

SystemUtils.configurePerformance();

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
      <View style={styles.canvasContainer}>
        <ReactThreeFiberCanvas setCardText={applyCardText} />
      </View>
      <View style={styles.cardContainer}>
        <ScrollView ref={scrollViewRef} style={styles.card}>
          <Text style={{ display: cardTexts.length === 0 ? 'flex' : 'none' }}>
            Touch or click on an element to see its events.
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
    backgroundColor: '#485b9a',
  },
  canvasContainer: {
    flex: 6,
  },
  cardContainer: {
    flex: 4,
    margin: '2%',
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: 'lightgray',
  },
  card: {
    flex: 1,
    margin: '5%',
  },
});
