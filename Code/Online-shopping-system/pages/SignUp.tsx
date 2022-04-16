import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const SignUp: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userDetails = { firstName, lastName, phoneNumber, email, password };
    const user = localStorage.getItem("user");
    setLoading(true);
    if (user) {
      if (email === JSON.parse(user).email) {
        setTimeout(() => {
          setError(true);
          setLoading(false);
        }, 3000);
      } else {
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(userDetails));
          localStorage.setItem("isLoggedIn", JSON.stringify({ login: true }));
          setLoading(false);
          navigate("/");
        }, 3000);
      }
    } else {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(userDetails));
        localStorage.setItem("isLoggedIn", JSON.stringify({ login: true }));
        setLoading(false);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <main className=" font-Roboto bg-gray-100 min-h-screen  flex flex-col items-center justify-center text-gray-700">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl text-center font-semibold capitalize">
          Create an account
        </h1>
      </div>
      {error && (
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4 bg-red-200 py-2 px-4">
          <h1 className="text-md font-semibold text-red-900 text-center">
            Account already exist. Please login
          </h1>
        </div>
      )}
      <form
        className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="mb-4 p-2 appearance-none block w-full bg-white placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-white placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="mb-4 p-2 appearance-none block w-full bg-white placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
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
          {loading ? <Loader /> : "Register"}
        </button>
      </form>

      <div className="flex gap-2 items-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <p>Already have an account? </p>
        <Link
          to="/login"
          className="text-sm font-bold text-teal-500 hover:underline cursor-pointer"
        >
          Login
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
