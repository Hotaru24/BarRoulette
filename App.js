import React, { Fragment } from 'react';
import Map from './components/Map'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



const App = () => {
	return (
    <Fragment>
        
      <Map/>
   
    </Fragment>
	);
}

export default App;
