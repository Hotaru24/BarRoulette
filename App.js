import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormUser from './Components/FormUser';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Oh my Beer</Text>
      <FormUser/>
    </View>
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

export default App;