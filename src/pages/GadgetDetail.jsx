import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useThemeHook } from "../components/ThemeProvider";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "react-use-cart";

const GadgetDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [theme] = useThemeHook();
  const [gadgetDetails, setGadgetDetails] = useState([]);

  const updatedPrice = parseInt(gadgetDetails.price);
  gadgetDetails.price = updatedPrice;

  const fetchProductsDataById = async () => {
    try {
      const res = await fetch(`https://itproducts.onrender.com/products/${id}`);
      if (!res.ok) throw new Error("Oops! An error has occured");
      const data = await res.json();
      console.log(data);
      setGadgetDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsDataById();
  }, []);

  const { img, title, price, brand, description, category, rating } =
    gadgetDetails;

  const addToCart = () => {
    addItem(gadgetDetails);
  };

  return (
    // <div className={`${theme ? "bg-light-black" : "bg-light"}`}>
    //   <div className="containerWrap flex flex-col gap-5 lg:flex-row p-24">
    //     <div
    //       className={`${
    //         theme ? "bg-light-black" : "bg-light"
    //       } grid flex-grow max-w-lg p-4 items-center rounded-lg`}
    //     >
    //       <img src={img} className="w-full max-w-full rounded-md" alt={title} />
    //     </div>

    //     <div
    //       className={`${
    //         theme ? "bg-light-black" : "bg-light"
    //       } grid flex-grow gap-3 max-w-lg p-6 rounded-lg`}
    //     >
    //       <div>
    //         <h1 className="text-4xl">{title}</h1>
    //         <h4 className="text-xl">
    //           Price: $<span className="text-2xl">{price}</span>
    //         </h4>
    //         <h4 className="text-xl">
    //           Brand: <span className="text-2xl">{brand}</span>
    //         </h4>
    //       </div>

    //       <div>
    //         <h4 className="text-2xl">Features</h4>
    //         <h4 className="text-base">{description}</h4>
    //       </div>

    //       <div className="flex flex-wrap justify-between">
    //         <h4 className="text-xl capitalize">
    //           Category: <span className="text-2xl">{category}</span>
    //         </h4>
    //         <h4 className="text-xl">
    //           Rating: <span className="text-2xl">{rating}</span>
    //         </h4>
    //       </div>
    //       <div>
    //         <button className="btn" onClick={addToCart}>
    //           Add To Cart
    //           <FaCartArrowDown className="ml-1" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className={`bg-${theme ? "light-black" : "light"}`}>
      <div className="containerWrap flex flex-col lg:flex-row p-8 lg:p-24 gap-8">
        <div
          className={`bg-${
            theme ? "light-black" : "light"
          } max-w-lg rounded-lg overflow-hidden`}
        >
          <img src={img} className="w-full rounded-md" alt={title} />
        </div>

        <div
          className={`bg-${
            theme ? "light-black" : "light"
          } flex flex-col gap-4 max-w-lg p-2 rounded-lg`}
        >
          <div>
            <h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1>
            <h4 className="text-lg lg:text-xl mt-2">
              Price: $<span className="text-xl lg:text-2xl">{price}</span>
            </h4>
            <h4 className="text-lg lg:text-xl mt-2">
              Brand: <span className="text-xl lg:text-2xl">{brand}</span>
            </h4>
          </div>

          <div>
            <h4 className="text-xl">Features</h4>
            <p className="text-base lg:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap justify-between">
            <h4 className="text-lg lg:text-xl capitalize">
              Category: <span className="text-xl lg:text-2xl">{category}</span>
            </h4>
            <h4 className="text-lg lg:text-xl">
              Rating: <span className="text-xl lg:text-2xl">{rating}</span>
            </h4>
          </div>

          <div>
            <button className="btn flex items-center" onClick={addToCart}>
              Add To Cart <FaCartArrowDown className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
