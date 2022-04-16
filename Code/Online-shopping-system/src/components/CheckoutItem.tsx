import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart, updateCart } from "../store/actions/cartAction";

interface ICheckoutItemProps {
  id: string;
  productName: string;
  price: number;
  imageUrl: string;
  ItemQuantity: number;
}

const CheckoutItem: React.FunctionComponent<ICheckoutItemProps> = ({
  id,
  productName,
  price,
  imageUrl,
  ItemQuantity,
}) => {
  const [quantity, setQuantity] = React.useState(ItemQuantity);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between border-b border-gray-400 pb-4">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div className="w-20 h-20">
            <img
              src={imageUrl}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl text-gray-900 font-bold">{productName}</h3>
            <p className="text-gray-900">
              {quantity} x {`$${price}`}
            </p>
            <p className="text-[#c7ab62]">{`$${quantity * price}`}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-end h-full">
          <span
            className="material-icons self-end text-gray-600 cursor-pointer"
            onClick={() => dispatch(deleteFromCart(id))}
          >
            delete
          </span>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              setQuantity(parseInt(e.target.value));
              dispatch(updateCart(id, parseInt(e.target.value)));
            }}
            className="w-13 text-center py-2 h-8 border border-gray-500 rounded mt-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
