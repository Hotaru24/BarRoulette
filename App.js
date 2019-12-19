import React, { Fragment } from 'react';
import Map from './components/Map';
import FindBar from './components/FindBar'
import HomePage from './components/HomePage';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const App = () => {
	return (
    <Fragment>
      <HomePage />
      {/* <Map /> */}
      {/* <FindBar /> */}
    </Fragment>
	);
}

export default App;