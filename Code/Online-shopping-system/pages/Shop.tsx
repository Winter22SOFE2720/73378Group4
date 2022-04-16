import * as React from "react";
import { useSelector } from "react-redux";
import AlertBar from "../components/AlertBar";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductItem from "../components/ProductItem";
import { allProducts } from "../models/products";
import { IRootReducerState } from "../store/reducers/rootReducer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IShopProps {}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
  const showAlertBar = useSelector(
    (state: IRootReducerState) => state.alert.showAlertBar
  );

  return (
    <main className="min-h-screen font-Roboto bg-gray-100">
      {showAlertBar && <AlertBar />}
      <NavBar />

      <section className="px-8 flex justify-center mt-12">
        <div className="w-full max-w-6xl">
          <h1 className="font-JoseFin text-4xl font-bold mb-6">All Products</h1>
          <div className="w-full  my-8 grid grid-cols-products gap-8">
            {/**product Card */}
            {allProducts.map((item) => {
              return <ProductItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Shop;
