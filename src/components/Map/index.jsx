import React from "react";
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Background,
} from "./styles";

function MapPedido() {
  return (
    <>
      <Background>
        <Map
          center={[-1.4378121, -48.4668829]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker position={[-1.4378121, -48.4668829]}>
            <Popup>
              A pretty CSS3 popup.
              {' '}
              <br />
              {' '}
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Background>
    </>
  );
}

export default MapPedido;
