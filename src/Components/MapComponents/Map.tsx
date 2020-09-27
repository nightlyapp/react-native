import React, { useState, useEffect, FC } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import MapStyle from "./MapStyle.json";
import { Map } from "./IMap";

const MapComponent = ({ region }: Map) => (
  <View style={styles.container}>
    <MapView
      style={styles.mapStyle}
      provider={PROVIDER_GOOGLE}
      initialRegion={region}
      showsUserLocation={true}
      showsBuildings={false}
      showsPointsOfInterest={false}
      showsTraffic={false}
      showsIndoors={false}
      customMapStyle={MapStyle}
    ></MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapComponent;
