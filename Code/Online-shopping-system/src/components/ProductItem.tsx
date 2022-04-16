import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAlertBar } from "../store/actions/alertBar";
import { addToCart } from "../store/actions/cartAction";

export interface Product {
  id: string;
  productName: string;
  price: number;
  imageUrl: string;
}

interface IProductItemProps {
  item: Product;
}

const ProductItem: React.FunctionComponent<IProductItemProps> = ({ item }) => {
  const [addItem, setAddItem] = React.useState(true);
  const dispatch = useDispatch();

  const handleAddToCart = (item: Product) => {
    {
      dispatch(addToCart(item));
      dispatch(toggleAlertBar(true));
      setAddItem(false);
      setTimeout(() => {
        dispatch(toggleAlertBar(false));
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2 cursor-pointer mb-4">
      <div className="w-full h-40 ">
        <img
          className="w-full h-full object-cover"
          src={item.imageUrl}
          alt={item.productName}
        />
      </div>
      <p className="text-gray-900 text-lg font-bold font-Jost capitalize">
        {item.productName}
      </p>
      <p className="text-[#c7ab62]  font-bold font-Jost">{`$${item.price.toFixed(
        2
      )}`}</p>
      {addItem ? (
        <button
          className=" text-white text-sm bg-[#c7ab62]  py-2 px-4 capitalize  font-semiBold"
          onClick={() => handleAddToCart(item)}
        >
          Add to cart
        </button>
      ) : (
        <Link to="/checkout">
          <button className=" text-white text-sm w-full bg-[#c7ab62]  py-2 px-4 capitalize  font-semiBold">
            Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProductItem;
