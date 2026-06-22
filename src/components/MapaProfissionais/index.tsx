import MapView, { Marker } from "react-native-maps";
import { profissionaisMock } from "../../data/coordenadasMock";
import { View } from "react-native";
export function MapaProfissionais() {
  return (
    <MapView
      style={{ height: 300, borderRadius: 10 }}
      initialRegion={{
        latitude: -14.235,
        longitude: -51.9253,
        latitudeDelta: 35,
        longitudeDelta: 35,
      }}
    >
      {profissionaisMock.map((prof) => {
        if (!prof.latitude || !prof.longitude) return null;

        return (
          <Marker
            key={prof.id}
            coordinate={{
              latitude: prof.latitude,
              longitude: prof.longitude,
            }}
            title={prof.nome}
          />
        );
      })}
    </MapView>
  );
}
