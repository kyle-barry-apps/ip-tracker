import { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './search.css'
import { BiChevronRight } from 'react-icons/bi'

const Search = () => { 
  const [search, setSearch] = useState('')
  const { setSearchTerm } = useContext(SearchContext)

  const handleSearch = () => {
    setSearchTerm(search)
    setSearch('')
  }

  return (
    <div className='search'>  
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for any IP address or domain'></input>
      <div onClick={() => handleSearch()} className="search__btn">
        <BiChevronRight size={20} color='white'/>
      </div>
    </div>
  )
}

export default Search