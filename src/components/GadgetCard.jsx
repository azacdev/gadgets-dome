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
      } relative flex md:flex-col justify-evenly rounded-md w-96 sm:w-80 md:w-60 shadow-xl overflow-hidden mb-4`}
    >
      <div className="flex items-center bg-white justify-center py-2 md:py-4 h-48 overflow-hidden">
        <Link to={id && `/gadget/${id}`}>
          <img
            src={img}
            alt={title}
            className="w-full md:w-36 object-cover duration-200 hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-evenly gap-5 sm:gap-3 flex-grow w-1/2 md:w-full p-4">
        <Link to={id && `/gadget/${id}`}>
          <h2 className="text-xl capitalize truncate">
            {title}
          </h2>
          <p>${price}</p>
        </Link>
        <div className="card-actions justify-center">
          <button className="btn" onClick={addToCart}>
            Add To Cart
            <FaCartArrowDown className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
