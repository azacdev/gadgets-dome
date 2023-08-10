import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "react-use-cart";
import Footer from "../components/Footer";

const GadgetDetail = () => {
  // Extracting 'id' parameter from the URL
  const { id } = useParams();

  // Access cart functions from 'useCart' hook
  const { addItem } = useCart();

  // State to store gadget details fetched from the API
  const [gadgetDetails, setGadgetDetails] = useState([]);

  // Convert price to integer
  const updatedPrice = parseInt(gadgetDetails.price);
  gadgetDetails.price = updatedPrice;

  // Effect to fetch gadget details based on 'id' parameter
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://itproducts.onrender.com/products/${id}`,
          { cancelToken: cancelToken.token }
        );
        setGadgetDetails(data);
      } catch (error) {
        console.error(
          `Error fetching data: ${error.response?.status} - ${error.response?.statusText}`
        );
      }
    };

    fetchData();

    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  // Destructuring gadget details
  const { img, title, price, brand, description, category, rating } =
    gadgetDetails;

  // Function to add the gadget to the cart
  const addToCart = () => {
    addItem(gadgetDetails);
  };

  // Render loading animation if gadget details are not yet fetched
  if (gadgetDetails.length === 0)
    return (
      <svg
        className="svg-animate"
        version="1.1"
        id="L6"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <rect
          fill="none"
          stroke="#666666"
          strokeWidth="4"
          x="25"
          y="25"
          width="50"
          height="50"
        >
          <animateTransform
            attributeName="transform"
            dur="0.5s"
            from="0 50 50"
            to="180 50 50"
            type="rotate"
            id="strokeBox"
            attributeType="XML"
            begin="rectBox.end"
          />
        </rect>
        <rect x="27" y="27" fill="#666666" width="46" height="50">
          <animate
            attributeName="height"
            dur="1.3s"
            attributeType="XML"
            from="50"
            to="0"
            id="rectBox"
            fill="freeze"
            begin="0s;strokeBox.end"
          />
        </rect>
      </svg>
    );

  return (
    <div className="h-screen">
      <div className="containerWrap flex flex-col lg:flex-row p-4 md:p-16 gap-8">
        {/* Display gadget image */}
        <div className="max-w-lg rounded-lg overflow-hidden">
          <img src={img} className="w-full rounded-md" alt={title} />
        </div>

        {/* Display gadget details */}
        <div className="flex flex-col gap-4 max-w-lg p-2 rounded-lg">
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
            {/* Display gadget description */}
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
            {/* Button to add gadget to cart */}
            <button className="btn flex items-center" onClick={addToCart}>
              Add To Cart <FaCartArrowDown className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Display footer */}
      <Footer />
    </div>
  );
};

export default GadgetDetail;
