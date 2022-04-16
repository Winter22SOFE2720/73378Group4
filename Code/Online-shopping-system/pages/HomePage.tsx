import * as React from "react";
import { useSelector } from "react-redux";
import AlertBar from "../components/AlertBar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductItem from "../components/ProductItem";
import {
  bestSellerProducts,
  newArrivalProducts,
  topRatedProducts,
} from "../models/products";
import { IRootReducerState } from "../store/reducers/rootReducer";

const Home: React.FunctionComponent = () => {
  const showAlertBar = useSelector(
    (state: IRootReducerState) => state.alert.showAlertBar
  );

  return (
    <main className="min-h-screen font-Roboto bg-gray-100">
      {showAlertBar && <AlertBar />}
      <NavBar />
      <section className="bg-gray-300 h-screen py-4 px-10 ">
        <div className="h-7 w-full"></div>
        <div className="grid grid-cols-2 items-center ml-auto mr-auto gap-10">
          <div className="flex-grow flex flex-col gap-8">
            <p className="uppercase">Spring Sales</p>
            <p className="text-5xl">Get 30% off</p>
            <p className="max-w-xl text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              blanditiis distinctio unde quaerat reprehenderit ducimus deleniti
              repellat quod dolore ad veniam, autem quas voluptatum totam
              explicabo animi necessitatibus in perferendis.
            </p>
            <button className="rounded-md shadow-md text-white bg-yellow-700 hover:bg-yellow-800  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
          <div className="flex-grow">
            <img
              className="w-full h-full"
              src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/banner-1024x836.png"
              alt="shoe"
            />
          </div>
        </div>
      </section>

      <section className="pt-[8rem] pb-[4rem] flex justify-center px-8">
        <div className="flex gap-6 min-h-[32rem] w-full max-w-6xl">
          <div className="bg-fashion relative bg-cover  h-full flex-1 flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold bg-center text-white">
              Fashion
            </h2>
            <button className="rounded-md shadow-md text-white border-2 border-yellow-800 hover:border-yellow-600  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
          <div className="bg-gadgets relative bg-cover bg-center  h-full flex-1 flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold text-white">Fashion</h2>
            <button className="rounded-md shadow-md text-white border-2 border-yellow-800 hover:border-yellow-600  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
          <div className="bg-accessories relative bg-cover bg-center h-full flex-1 flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold text-white">Fashion</h2>
            <button className="rounded-md shadow-md text-white border-2 border-yellow-800 hover:border-yellow-600  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
        </div>
      </section>
      <section className="px-8 flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="font-JoseFin text-4xl font-bold mb-6">New Arrival</h1>
          <div className="w-full  my-8 grid grid-cols-products gap-8">
            {/**product Card */}
            {newArrivalProducts.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="pt-[8rem] pb-[4rem] flex justify-center px-8">
        <div className="flex gap-6 min-h-[32rem] w-full max-w-6xl">
          <div className="bg-fashionClothes relative bg-cover  h-full flex-1 flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold bg-center text-white">
              Fashionable Clothes
            </h2>
            <p className="text-center mx-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              natus? Illum perferendis exercitationem ipsam distinctio quos
              consequatur inventore impedit harum. Dolorum error, maxime eaque
              aspernatur quisquam cupiditate repellendus aperiam eveniet.
            </p>
            <p className="text-center mx-8 text-white text-2xl font-bold">
              $300.00
            </p>
            <button className="rounded-md shadow-md text-white border-2 border-yellow-800 hover:border-yellow-600  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
          <div className="bg-printedClothes relative bg-cover bg-center  h-full flex-1 flex flex-col items-center justify-center gap-8">
            <h2 className="text-2xl font-semibold bg-center text-white">
              Printable T-shirt
            </h2>
            <p className="text-center mx-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              natus? Illum perferendis exercitationem ipsam distinctio quos
              consequatur inventore impedit harum. Dolorum error, maxime eaque
              aspernatur quisquam cupiditate repellendus aperiam eveniet.
            </p>
            <p className="text-center mx-8 text-white text-2xl font-bold">
              $40.00
            </p>
            <button className="rounded-md shadow-md text-white border-2 border-yellow-800 hover:border-yellow-600  w-max py-4 px-8 capitalize text-xl font-bold">
              shop now
            </button>
          </div>
        </div>
      </section>
      <section className="px-8 flex justify-center mt-12">
        <div className="w-full max-w-6xl">
          <h1 className="font-JoseFin text-4xl font-bold mb-6">Top Rated</h1>
          <div className="w-full  my-8 grid grid-cols-products gap-8">
            {/**product Card */}
            {topRatedProducts.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <section className="px-8 my-12 flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="font-JoseFin text-4xl font-bold mb-6">Best Seller</h1>
          <div className="w-full  my-8 grid grid-cols-products gap-8">
            {/**product Card */}
            {bestSellerProducts.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
