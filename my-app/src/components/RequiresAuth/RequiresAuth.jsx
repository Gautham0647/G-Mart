import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


export function RequiresAuth({ children }) {
  const location = useLocation();
  const { isAuth } = useAuth();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
