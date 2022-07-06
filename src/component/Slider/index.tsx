import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

function Slider() {
  const itemHeight = 40;
  return (
    <View style={{height: 50}}>
      <ScrollView
        decelerationRate="fast"
        contentContainerStyle={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <View key={item + index}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Slider;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 50,
    backgroundColor: 'red',
  },
});
