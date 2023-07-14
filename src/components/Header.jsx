/* eslint-disable react/display-name */
import { Link } from "react-router-dom";
import { useThemeHook } from "./ThemeProvider";
import { useCart } from "react-use-cart";
import { FaCartArrowDown } from "react-icons/fa";
import { memo } from "react";

const Header = memo(({ displayProduct }) => {
  const [theme] = useThemeHook();


  let id, title, description, img;
  if (displayProduct) {
    ({ id, title, description, img } = displayProduct);
  }
  const { addItem } = useCart();
  const addToCart = () => {
    addItem(displayProduct);
  };

  return (
    <div className={`${theme ? "bg-light-black" : "bg-light"} p-0 md:p-8`}>
      <div className="containerWrap p-4 py-12 md:p-8 flex flex-col justify-center items-center md:flex-row">
        <div className="flex-1 text-left">
          <div className="">
            <h1 className="text-2xl md:text-4xl text-center md:text-left">
              {title}
            </h1>
            <p className="mt-4">{description}</p>
          </div>
          <div className="card-actions justify-center md:justify-start my-7">
            <Link to={id ? `/gadget/${id}` : ""}>
              <button className="btn btn-outline">Read More</button>
            </Link>
            <button className="btn" onClick={addToCart}>
              Add To Cart
              <FaCartArrowDown className="ml-1" />
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <img src={img} className="w-64 rounded-md" alt="apple-macbook-pro" />
        </div>
      </div>
    </div>
  );
});

export default Header;
