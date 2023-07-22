import Search from '../Search/Search'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './header.css'

const Header = () => {

  const [ipData, setIPData] = useState({ip: '8.8.8.8', location: {country: 'US', region: 'NC', timezone: '4:00'}, isp: 'Google'})
  const { searchTerm } = useContext(SearchContext)
  const ipURL = 'http://localhost:3001/?ip=' + searchTerm

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
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [searchTerm]);

  console.log(ipData)

  return (
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
          <span>{ipData.location.region + ', ' + ipData.location.country}</span>
        </div>
        <div className="header__timezone">
          <h2>Timezone</h2>
          <span>{ipData.location.timezone}</span>
        </div>
        <div className="header__isp">
          <h2>ISP</h2>
          <span>{ipData.isp}</span>
        </div>
      </div>
    </div>
  )
}

export default Header