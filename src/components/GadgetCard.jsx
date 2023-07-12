/* eslint-disable react/prop-types */
import { useThemeHook } from "./ThemeProvider";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { FaCartArrowDown } from "react-icons/fa";

const GadgetCard = ({ data }) => {
  const [theme] = useThemeHook();
  const { addItem } = useCart();

  // Converts Price from strings to integers
  const updatedPrice = parseInt(data.price);
  data.price = updatedPrice;

  const { id, img, price, title } = data;

  const addToCart = () => {
    addItem(data);
  };

  return (
    <div
      className={`${
        theme ? "bg-light-black" : "bg-light"
      } card w-60 shadow-xl p-0 overflow-hidden mx-auto mb-4 pb-4 duration-200 hover:scale-105`}
    >
      <Link to={id ? `/gadget/${id}` : ""}>
        <figure className="flex bg-white justify-center pt-2 h-48 overflow-hidden">
          <img src={img} alt={title} className="w-36" />
        </figure>
        <div className="card-body p-4 ">
          <h2 className="text-xl capitalize text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h2>
          <p>${price}</p>
        </div>
      </Link>
      <div className="card-actions justify-center">
        <button className="btn" onClick={addToCart}>
          Add To Cart
          <FaCartArrowDown className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default GadgetCard;
