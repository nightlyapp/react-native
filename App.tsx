import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Header from './src/Components/HeaderComponent/Header';
import { StyleSheet,View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapStyle from './src/Components/MapComponents/MapStyle'
export default function App() {

  const [Currentlocation, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function getCurrentLocation() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A persmissão de acesso foi negada!')
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      setLocation({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

      })
      console.log(Currentlocation)

    }
    getCurrentLocation();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={Currentlocation}
        showsUserLocation={true}
        showsBuildings={false}
        showsPointsOfInterest={false}
        showsTraffic={false}
        showsIndoors={false}
        customMapStyle={MapStyle}
        >
        <Header/>
      </MapView>
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
