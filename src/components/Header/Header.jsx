import Search from '../Search/Search'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { CoordinatesContext } from '../../contexts/CoordinatesContext';
import './header.css'

const Header = () => {

  const [ipData, setIPData] = useState()
  const { searchTerm } = useContext(SearchContext)
  const { coordinates, setCoordinates } = useContext(CoordinatesContext)
  const initialURL = 'http://localhost:3001'
  const ipURL = 'http://localhost:3001/ip?ip=' + searchTerm.trim()



  useEffect(() => {
    fetch(initialURL, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setIPData(data);
      setCoordinates([data.location.lat, data.location.lng])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  useEffect(() => {
    fetch(ipURL, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setIPData(data);
      setCoordinates([data.location.lat, data.location.lng])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [searchTerm]);  


  return (
    <>
    {
      coordinates.length > 0 &&
      <div className='header'>
      <h1>IP Address Tracker</h1>
      <Search />
      <div className="header__data">
        <div className="header__ip">
          <h2>IP Address</h2>
          <span>{ipData.ip}</span>
        </div>
        <div className="header__location">
          <h2>Location</h2>
          <span>{ipData.location.city + ', ' + ipData.location.region}</span>
        </div>
        <div className="header__timezone">
          <h2>Timezone</h2>
          <span>UTC {ipData.location.timezone}</span>
        </div>
        <div className="header__isp">
          <h2>ISP</h2>
          <span>{ipData.isp}</span>
        </div>
      </div>
    </div>   
    }
    </>
    
  )
}

export default Header