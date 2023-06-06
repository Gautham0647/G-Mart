import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { InputTypeOne } from "../../components/Ui/InputTypeOne";
import "./Signup.css"


export function Signup() {
  const { toggleAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
        }),
        method: "POST",
      });
      console.log(response);
      const { encodedToken } = await response.json();
      if (response.status === 201) {
        localStorage.setItem("storeToken", JSON.stringify(encodedToken));
        console.log(encodedToken);
        toggleAuth();
        navigate(location?.state?.from?.pathname);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <div className="center">
        <form  className="form"   onSubmit={signupHandler}>
          <h2 className="h3">Login</h2>
          <InputTypeOne
          wrapperClassName="form__item form__first_name form__input_box"
            htmlFor="first_name"
            labelClassName="label"
            labelText="First Name"
            type="text"
            className="input_box"
            placeholder="John"
            name="firstName"
            defaultValue="Gautham2"
          />
          <InputTypeOne
          wrapperClassName="form__item form__last_name form__input_box"
            htmlFor="last_name"
            labelClassName="label"
            labelText="LastName Name"
            type="text"
            className="input_box"
            placeholder="Doe"
            name="lastName"
            defaultValue="Bairi"
          />
          <InputTypeOne
          wrapperClassName="form__item form__email form__input_box"
            htmlFor="email"
            labelClassName="label"
            labelText="Email Address"
            type="email"
            className="input_box"
            placeholder="yours@mail.com"
            name="email"
            defaultValue="gautham@gmail.com"
          />

          <InputTypeOne
          wrapperClassName="form__item form__password form__input_box"
            htmlFor="password"
            labelClassName="label"
            labelText="Password"
            className="input_box"
            placeholder="********"
            name="password"
            defaultValue="goto"
          />
          <button  
          className="signup-btn"
          >Signup</button>
          <Link 
          className="form_login"
          to="/login">Already have an account? Go to Login</Link>
        </form>
      </div>
    </main>
  );
};