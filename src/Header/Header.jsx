import Search from '../components/Search/Search'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>IP Address Tracker</h1>
      <Search />
    </div>
  )
}

export default Header