import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { userloginDetails } from "../store/actions/Login";

const Login: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const user = localStorage.getItem("user");
    if (user) {
      if (
        email !== JSON.parse(user).email ||
        password !== JSON.parse(user).password
      ) {
        setTimeout(() => {
          setError(true);
          setLoading(false);
        }, 3000);
      } else {
        setTimeout(() => {
          setLoading(false);
          localStorage.setItem("isLoggedIn", JSON.stringify({ login: true }));
          dispatch(userloginDetails(JSON.parse(user)));
          navigate("/");
        }, 3000);
      }
    } else {
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <main className=" font-Roboto bg-gray-100 min-h-screen  flex flex-col items-center justify-center text-gray-700">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl font-semibold ">Welcome back.</h1>
      </div>
      {error && (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4 bg-red-200 py-2 px-4">
          <h1 className="text-md font-semibold text-red-900 text-center">
            Invalid username/password
          </h1>
        </div>
      )}
      <form
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="mb-4 p-2 appearance-none block w-full bg-white placeholder-gray-900 rounded border focus:border-teal-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-white placeholder-gray-900 rounded border focus:border-teal-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-[#c7ab62] text-white p-2 rounded font-semibold hover:bg-yellow-600 flex items-center justify-center"
          type="submit"
        >
          {loading ? <Loader /> : "Logn In"}
        </button>
      </form>
      <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer">
          Forgot your password?
        </a>
      </div>
      <div className="flex gap-2 items-center justify-center w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <p>Don&apos;t have an account? </p>
        <Link
          to="/register"
          className="text-sm font-bold text-teal-500 hover:underline cursor-pointer"
        >
          Register
        </Link>
      </div>
    </main>
  );
};

export default Login;
