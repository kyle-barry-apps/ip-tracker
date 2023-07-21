import { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './search.css'
import { BiChevronRight } from 'react-icons/bi'

const Search = () => { 

  const { setSearchTerm } = useContext(SearchContext)

  return (
    <div className='search'>  
      <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for any IP address or domain'></input>
      <div className="search__btn">
        <BiChevronRight size={20} color='white'/>
      </div>
    </div>
  )
}

export default Search