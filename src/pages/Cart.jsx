/* eslint-disable no-unused-vars */
import Footer from "../components/footer/Footer";
import { useCart } from "react-use-cart";
import { useThemeHook } from "../components/ThemeProvider";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal,
  } = useCart();

  return (
    <div className="containerWrap py-16 m-4">
      <h1
        className={`${
          theme ? "text-light" : "text-light-primary"
        } text-3xl my-5 text-center`}
      >
        {isEmpty ? "Your Cart is Empty" : "Cart"}
      </h1>

      {items.map((item, idx) => (
        <div
          className={` ${
            theme ? "bg-light-black" : "bg-light"
          } flex items-center gap-2 p-2 `}
          key={idx}
        >
          <div className="bg-white overflow-hidden flex justify-center items-center p-2 w-20 sm:w-32">
            <img
              src={item.img}
              className="w-8 h-12 sm:w-16 sm:h-24"
              alt={item.title}
            />
          </div>

          <div className="flex flex-1 justify-evenly gap-2">
            <h6 className="w-20 text-sm sm:text-xl capitalize text-ellipsis overflow-hidden whitespace-nowrap">
              {item.title}
            </h6>
            <p className="text-sm sm:text-xl">${item.price}</p>
            <p className="text-sm sm:text-xl">{item.quantity}</p>
          </div>

          <div className="flex flex-wrap sm:flex-row gap-1 justify-center">
            <button
              className="btn btn-sm sm:btn-md"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              className="btn btn-sm sm:btn-md"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              className="btn btn-xs sm:btn-md btn-error"
              onClick={() => removeItem(item.id)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
      {!isEmpty && (
        <div
          className={`cart-summary fixed left-0 bottom-0 flex justify-between w-full items-center p-2 shadow-lg ${
            theme ? "bg-light-black text-light" : "bg-light text-black"
          }`}
        >
          <h4 className="text-base md:text-xl font-bold">
            Total Price: ${cartTotal}
          </h4>
          <div>
            <button className="btn m-2" onClick={() => emptyCart()}>
              <BsCartX className="text-base mr-1" /> Clear Cart
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
