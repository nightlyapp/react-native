import { useState, useEffect } from "react";
import * as Location from "expo-location";

function myCurrentLocation() {
  const [Currentlocation, setLocation] = useState<any>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setLocation({ error: "A persmissão de acesso foi negada!" });
      }

      const location = await Location.getCurrentPositionAsync();

      setLocation(location.coords);
    }
    getCurrentLocation();
  },[Currentlocation]);

  return Currentlocation;
}

export { myCurrentLocation };
