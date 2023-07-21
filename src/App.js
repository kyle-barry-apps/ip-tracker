import './App.css';
import { SearchProvider } from './contexts/SearchContext';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Header from './Header/Header';

function App() {
  return (
    <SearchProvider>
      <Header />
      <MapContainer center={[48.8566, 2.3522]} zoom={20}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </SearchProvider>
  );
}

export default App;
