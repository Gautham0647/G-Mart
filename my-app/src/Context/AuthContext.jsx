import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("storeToken");
    const [isAuth, setIsAuth] = useState(!!token);

    const toggleAuth = () => {
        setIsAuth((auth) => !auth);
    };

    const value = {
        isAuth,
        toggleAuth,
        token,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};