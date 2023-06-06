import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";
import { InputTypeOne } from "../../components/Ui/InputTypeOne";

import "./Login.css";

export function Login() {
  const { toggleAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    try {
      const response = await fetch("/api/auth/login", {
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        method: "POST",
      });
      console.log(response);
      const { encodedToken } = await response.json();
      if (response.status === 200) {
        localStorage.setItem("storeToken", JSON.stringify(encodedToken));
        console.log(encodedToken);
        toggleAuth();
        navigate(location?.state?.from?.pathname);
      }
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  };

  return (
    <main>
      <div className="center">
        <form onSubmit={loginHandler} className="form flex" method="get">
          <h2 className="h3">Login</h2>
          
          <InputTypeOne
          wrapperClassName="form__item form__email form__input_box"
            htmlFor="email"
            labelClassName="label"
            labelText="Email Address"
            type="email"
            className="input_box"
            placeholder="yours@mail.com"
            name="email"
            defaultValue="gautham0647@gmail.com"
          />
          

          <InputTypeOne
          wrapperClassName="form__item form__password form__input_box"
            htmlFor="password"
            labelClassName="label"
            labelText="Password"
            
            className="input_box"
            placeholder="********"
            name="password"
            defaultValue="myweb@0647"
          />
          
          <button className="login-btn">Login</button>

          <Link 
          className="form_signup"
          to="/signup">
          
          
          New here? Create New Account</Link>
        </form>
      </div>
    </main>
  );
}
