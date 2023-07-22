import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import Header from './components/Header/Header';
import 'leaflet/dist/leaflet.css'

function App() {

  return (
    <> 
      <Header />
      <MapContainer center={[48.8566, 2.3522]} zoom={20}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </>
  );
}

export default App;
