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
    <div className="containerWrap p-2 m-4">
      <h1 className=" text-3xl my-5 text-start">
        {isEmpty ? "Your Cart is Empty" : "Cart"}
      </h1>

      {items.map((item, idx) => (
        <div
          className={`flex items-center gap-2 p-2 mb-2 border-2 border-gray-400 rounded-md`}
          key={idx}
        >
          <div className="bg-white overflow-hidden flex-grow sm:flex-grow-0 flex justify-center items-center w-20 sm:w-32 rounded-md">
            <img
              src={item.img}
              className="w-full h-full object-cover"
              alt={item.title}
            />
          </div>

          <div className="flex-grow sm:flex-auto flex justify-between text-center flex-col sm:flex-row items-center">
            <div className="sm:flex-grow flex flex-col sm:flex-row">
              <h6 className="w-20 text-xl capitalize overflow-hidden whitespace-nowrap text-ellipsis sm:flex-grow sm:whitespace-normal">
                {item.title}
              </h6>
              <p className="text-lg">${item.price}</p>
            </div>
            <div className="flex flex-1 flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-2">
              <div className="flex items-center gap-1">
                <button
                  className="btn btn-md"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <p className="text-xl sm:text-xl">{item.quantity}</p>
                <button
                  className="btn btn-md"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-sm sm:btn-md btn-error"
                onClick={() => removeItem(item.id)}
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      ))}

      {!isEmpty && (
        <div
          className={`fixed left-0 bottom-0 w-full p-2 shadow-lg ${
            theme ? "bg-light-black text-light" : "bg-light text-black"
          }`}
        >
          <div className="containerWrap flex justify-between items-center">
            <h4 className="text-base md:text-xl font-bold">
              Total Price: ${cartTotal}
            </h4>
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
