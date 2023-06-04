import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

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
        <form onSubmit={signupHandler}>
          <h2 className="h3">Login</h2>
          <input
            htmlFor="first_name"
            labelClassName="label"
            labelText="First Name"
            type="text"
            className="input_box"
            placeholder="John"
            name="firstName"
            defaultValue="Gautham2"
          />
          <input
            htmlFor="last_name"
            labelClassName="label"
            labelText="lastName Name"
            type="text"
            className="input_box"
            placeholder="Doe"
            name="lastName"
            defaultValue="Bairi"
          />
          <input
            htmlFor="email"
            labelClassName="label"
            labelText="Email Address"
            type="email"
            className="input_box"
            placeholder="yours@mail.com"
            name="email"
            defaultValue="gautham@gmail.com"
          />

          <input
            htmlFor="password"
            labelClassName="label"
            labelText="Password"
            className="input_box"
            placeholder="********"
            name="password"
            defaultValue="goto"
          />
          <button>Signup</button>
          <Link to="/login">Already have an account? Go to Login</Link>
        </form>
      </div>
    </main>
  );
};