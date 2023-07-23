import { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import './search.css'
import { BiChevronRight } from 'react-icons/bi'

const Search = () => { 
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const { setSearchTerm } = useContext(SearchContext)

  console.log(error)

  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi

  const handleSearch = () => {
    if (checkIpAddress.test(search)) {
      setSearchTerm(search)
      setSearch('')
      setError('')
    } else {
      setError('Please enter a valid IP address')
    }
  }

  return (
    <>
    <div className='search'>  
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for any IP address'></input> 
      <div onClick={() => handleSearch()} className="search__btn">
        <BiChevronRight size={20} color='white'/>
      </div>
    </div>
   <div className={error ? 'search__error active' : 'search_error'}>{error}</div>
    </>
  )
}

export default Search