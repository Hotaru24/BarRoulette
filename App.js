import React, { Fragment } from 'react';
import Map from './components/Map';
// import FindBar from './components/FindBar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import FormUser from './components/FormUser';



const App = () => {
	return (
    <Fragment>
      {/* <FormUser/> */}
      <Map/>
      {/* <FindBar /> */}
    </Fragment>
	);
}

export default App;
