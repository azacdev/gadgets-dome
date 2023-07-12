import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearchHook = () => {
  const { searchTerm } = useContext(SearchContext);
  return [searchTerm];
};

export { SearchProvider, SearchContext, useSearchHook };
