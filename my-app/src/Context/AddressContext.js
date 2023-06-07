import { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth } from "./AuthContext";

const AddressContext = createContext();

const addressReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESSES": {
      return { ...state, addresses: action.payload };
    }
    case "SELECT_ADDRESS": {
      console.log(action.payload);
      console.log({ state });
      const newState = { ...state, selectedAddress: action.payload };
      console.log({ newState });
      return { ...state, selectedAddress: action.payload };
    }
    default:
      return state;
  }
};

const initialAddressState = {
  addresses: [],
  selectedAddress: {},
};

export function AddressProvider({ children }) {
  const { token } = useAuth();
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );

  const getAddresses = async () => {
    try {
      const response = await fetch("/api/user/addresses", {
        headers: {
          authorization: token,
        },
      });
      console.log(response);
      const { addresses } = await response.json();
      if (response.status === 200) {
        addressDispatch({
          type: "SET_ADDRESSES",
          payload: addresses,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAddresses();
  }, );

  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);
