import { useState, createContext } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('192.212.329.123')

  return (
  <SearchContext.Provider value={{ searchTerm, setSearchTerm}}>
    {children}
  </SearchContext.Provider>
  )
}