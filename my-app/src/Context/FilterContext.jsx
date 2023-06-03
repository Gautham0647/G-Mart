import { createContext, useContext, useReducer } from "react";
import { useData } from "./DataContext";
import { filterReducer, initialFilter } from "../Reducer/FilterReducer";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const { products } = useData();
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
