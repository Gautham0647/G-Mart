import { createContext, useContext, useEffect, useReducer } from "react";

import { initialState, dataReducer } from "../Reducer/DataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);

  const getData = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();

      if (response.status === 200) {
        dataDispatch({
          type: "SET_CATEGORIES",
          payload: categories,
        });
      }

      const productResponse = await fetch("/api/products");
      const { products } = await productResponse.json();

      if (productResponse.status === 200) {
        dataDispatch({
          type: "SET_PRODUCTS",
          payload: products,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        products: dataState.products,
        categories: dataState.categories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
