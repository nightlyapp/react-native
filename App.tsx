import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Region } from "react-native-maps";
import Map from "./src/Components/MapComponents/Map";
import { myCurrentLocation } from "./src/Components/MapComponents/MyCurrentLocation";

export default function App() {
  const [getRegion, setRegion] = useState<Region | undefined>(undefined);

  useEffect(() => {
    const { latitude, longitude } = myCurrentLocation();

    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Map region={getRegion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
