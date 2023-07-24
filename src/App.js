import { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { CoordinatesContext } from './contexts/CoordinatesContext';
import Header from './components/Header/Header';
import MarkerPosition from './components/MarkerPosition';
import icon from './icon'
import 'leaflet/dist/leaflet.css'
import './App.css';

function App() {

  const { coordinates } = useContext(CoordinatesContext)

  return (
    <> 
      <Header />
      {coordinates.length>0 && 
      <>
        <MapContainer center={coordinates} zoom={15} scrollWheelZoom={false}>
          <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
          />
          <MarkerPosition />
        </MapContainer>
      </>}
    </>
  );
}

export default App;
