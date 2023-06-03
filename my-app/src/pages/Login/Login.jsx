import { Link } from "react-router-dom";

export function Login() {
  return (
    <main>
      <div className="center">
        <form>
          <h2 className="h3">Login</h2>
          <input
            htmlFor="email"
            labelClassName="label"
            labelText="Email Address"
            type="email"
            className="input_box"
            placeholder="yours@mail.com"
            name="email"
          />

          <input
            htmlFor="password"
            labelClassName="label"
            labelText="Password"
            className="input_box"
            placeholder="********"
            name="password"
          />
          <section>
            <button>Forgot your Password?</button>
          </section>
          <button>Login</button>
          <Link to="/singup">New here? Create New Account</Link>
        </form>
      </div>
    </main>
  );
}
