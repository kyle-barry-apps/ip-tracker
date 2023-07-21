import Search from '../components/Search/Search'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>IP Address Tracker</h1>
      <Search />
      <div className="header__data">
        <div className="header__ip">
          <h2>IP Address</h2>
          <span>192.212.329.123</span>
        </div>
        <div className="header__location">
          <h2>Location</h2>
          <span>Brooklyn, NY 10001</span>
        </div>
        <div className="header__timezone">
          <h2>Timezone</h2>
          <span>UTC - 4:00</span>
        </div>
        <div className="header__isp">
          <h2>ISP</h2>
          <span>SpaceX Starlink</span>
        </div>
      </div>
    </div>
  )
}

export default Header