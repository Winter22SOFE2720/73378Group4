import * as React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import NavBar from "../components/NavBar";
import { IRootReducerState } from "../store/reducers/rootReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import ErrorAlert from "../components/Error";
import Loader from "../components/Loader";
import SuccessModal from "../components/SuccessModal";
import { emptyCart } from "../store/actions/cartAction";
import { useDispatch } from "react-redux";

const Checkout: React.FunctionComponent = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: IRootReducerState) => state.cart
  );

  const dispatch = useDispatch();

  const [firstName, setFirsName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postCode, setPostCode] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
    setLoading(true);

    if (!elements && !stripe) {
      return;
    }

    if (stripe && elements) {
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });
        if (!error) {
          try {
            const { id } = paymentMethod;
            const response = await axios.post(
              "https://e-cormmerce.herokuapp.com/payment",
              {
                amount: totalPrice * 100,
                id,
              }
            );

            if (!response.data.success) {
              setError(true);
            }

            dispatch(emptyCart());
            setLoading(false);
            setSuccess(true);
          } catch (error) {
            setLoading(false);
            setError(true);
          }
        } else {
          setLoading(false);
          setError(true);
        }
      }
    }
  };

  return (
    <main className="bg-gray-100 w-full font-Roboto">
      {success && <SuccessModal />}
      <NavBar />
      <div className="mt-4 w-full">
        <h1 className="flex items-center justify-center font-bold text-gray-900 text-md lg:text-3xl">
          Checkout
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error && <ErrorAlert />}
          <div className="flex gap-10 w-full p-10">
            <div className="flex flex-col md:w-full  flex-grow">
              <h2 className="mb-4 font-bold md:text-xl text-heading ">
                Shipping Address
              </h2>
              <div className="justify-center w-full mx-auto">
                <div className="">
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirsName(e.target.value)}
                        className="shadow-sm w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="firstName"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        Last Name
                      </label>
                      <input
                        name="Last Name"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="shadow-sm w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="Email"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        Email
                      </label>
                      <input
                        name="Last Name"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow-sm w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="w-full">
                      <label
                        htmlFor="Address"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        Address
                      </label>
                      <input
                        className="shadow-sm w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="Address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="city"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        City
                      </label>
                      <input
                        name="city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="shadow-sm w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                      <label
                        htmlFor="postcode"
                        className="block mb-3 text-sm font-semibold text-gray-800"
                      >
                        Postcode
                      </label>
                      <input
                        name="postcode"
                        type="text"
                        placeholder="Post Code"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                        className="shadow-sm w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="pt-3 xl:pt-6">
                    <label
                      htmlFor="note"
                      className="block mb-3 text-sm font-semibold text-gray-800"
                    >
                      Notes (Optional)
                    </label>
                    <textarea
                      name="note"
                      className="shadow-sm flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Notes for delivery"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 flex-grow">
              <h2 className="text-xl font-bold font-Roboto">Order Summary</h2>
              <div className="shadow-xl p-4 rounded-md bg-white">
                <div className="flex flex-col gap-4">
                  {cartItems.map((item) => {
                    return (
                      <CheckoutItem
                        id={item.id}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        ItemQuantity={item.quantity}
                        productName={item.productName}
                        key={item.id}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                  <p> Total</p>
                  <p className="">{`$${totalPrice.toFixed(2)}`}</p>
                </div>
                <div>
                  <p className="text-center text-xl my-4 font-bold text-gray-900">
                    Card details
                  </p>
                  <CardElement className="my-4 shadow-sm px-4 py-5 border border-gray-800 rounded-lg" />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full flex justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg"
                >
                  {loading ? <Loader /> : "Confirm Order"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
