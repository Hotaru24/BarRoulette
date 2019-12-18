import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Oh my Beer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
