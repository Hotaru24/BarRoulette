import React, { Component, Fragment } from 'react';
import Map from './components/Map'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default
class App extends React.Component {
	render() {
		return (
      <Fragment>
        
        <Map/>
   
      </Fragment>
			
		);
	}
}
