import './search.css'
import { BiChevronRight } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='search'>  
      <input placeholder='Search for any IP address or domain'></input>
      <div className="search__btn">
        <BiChevronRight size={20} color='white'/>
      </div>
    </div>
  )
}

export default Search