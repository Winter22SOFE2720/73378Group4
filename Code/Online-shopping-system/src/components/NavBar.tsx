import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducerState } from "../store/reducers/rootReducer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { deleteFromCart } from "../store/actions/cartAction";
import { userloginDetails } from "../store/actions/Login";
import logo from "../images/logo.png";

const NavBar: React.FunctionComponent = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: IRootReducerState) => state.cart
  );

  const navigate = useNavigate();

  const { user } = useSelector((state: IRootReducerState) => state.login);

  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    const loginState = localStorage.getItem("isLoggedIn");

    // check if the user is logged in
    if (user && loginState) {
      dispatch(userloginDetails(JSON.parse(user)));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-gray-200">
      <nav className="flex justify-between items-center p-4">
        <div className="w-10 h-10">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <ul className="flex gap-5">
          <li className="px-5 font-medium py-2 cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-5 font-medium py-2 cursor-pointer">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="px-5 font-medium py-2 cursor-pointer">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-black"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-5 items-center">
          <div className="account cursor-pointer">
            {isLoggedIn ? (
              <div className="flex gap-4 items-center relative group">
                <span className="material-icons">person_outline</span>
                <div className="">
                  <p className="text-[0.6rem]  text-gray-900 text-center capitalize">
                    Welcome
                  </p>
                  <p className="text-[0.6rem] text-center text-yellow-500 font-bold capitalize">
                    {user.firstName}
                  </p>
                </div>
                <div className=" hidden py-4 px-4 group-hover:flex flex-col  absolute w-[15rem] border bg-white rounded-md shadow-lg z-20 top-8 border-white right-0">
                  <button
                    className=" w-full text-white text-sm bg-[#c7ab62]  py-2 px-4 capitalize  font-semiBold"
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className=" flex-1 text-white text-sm bg-[#c7ab62]  py-2 px-10 shadow-lg capitalize  font-semiBold">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="cart flex gap-7 cursor-pointer relative py-2 group">
            <span className="material-icons">shopping_cart</span>
            {/**banner */}
            <div className="shadow-lg absolute left-[1rem] top-[-0.4rem] w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <p className=" bg-yellow-800 w-5 h-5 text-white font-base text-[0.8rem] rounded-full flex items-center justify-center">
                {cartItems.length}
              </p>
            </div>
            <p className="font-bold  text-lg text-[#c7ab62]   font-Jost">
              {`$ ${totalPrice.toFixed(2)}`}
            </p>
            <div className=" hidden  group-hover:flex flex-col  absolute w-[30rem] border bg-white rounded-md shadow-lg z-20 top-8 border-white right-0">
              {/**cart item */}
              {cartItems.length === 0 ? (
                <p className="mx-8 my-4 text-gray-900">
                  No products in cart...
                </p>
              ) : (
                cartItems.map((item) => {
                  return (
                    <div key={item.id} className="py-4">
                      <div className="flex gap-4 items-center px-8 ">
                        <span
                          className="material-icons"
                          onClick={() => dispatch(deleteFromCart(item.id))}
                        >
                          highlight_off
                        </span>
                        <div className="flex gap-4 items-center">
                          <div className="w-20 h-20 ">
                            <img
                              className="w-full h-full"
                              src={item.imageUrl}
                              alt={item.productName}
                            />
                          </div>
                          <p className="font-bold text-xl text-gray-900 hover:text-[#c7ab62]  font-Jost">
                            {item.productName}
                          </p>
                        </div>
                        <p className="ml-auto text-[#c7ab62]  font-bold ">
                          {item.quantity} x {`$${item.price}`}
                        </p>
                      </div>
                      <hr className="mt-4" />
                    </div>
                  );
                })
              )}
              {cartItems.length > 0 && (
                <div>
                  <div className="flex w-full mb-4 px-4 justify-between">
                    <p className="font-bold text-xl text-gray-900">Total</p>
                    <p className="font-bold  text-lg text-[#c7ab62]   font-Jost">
                      {`$ ${totalPrice.toFixed(2)}`}
                    </p>
                  </div>

                  <div className=" w-full mb-4 px-4">
                    <Link to="/checkout">
                      <button className=" w-full text-white text-sm bg-[#c7ab62]  py-2 px-4 capitalize  font-semiBold">
                        checkout
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
