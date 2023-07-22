import { useState, createContext } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('8.8.8.8')

  return (
  <SearchContext.Provider value={{ searchTerm, setSearchTerm}}>
    {children}
  </SearchContext.Provider>
  )
}