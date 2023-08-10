import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSearchHook } from "../components/SearchTermProvider";
import Header from "../components/Header";
import Catergories from "../components/Catergories";
import Footer from "../components/Footer";
import GadgetCard from "../components/GadgetCard";

const Home = () => {
  // State for storing all products and filtered products
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  // State for current category selection and search term
  const [category, setCategory] = useState("All Categories");
  const [searchTerm] = useSearchHook();

  // Effect to fetch products data from the API
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://itproducts.onrender.com/products",
          { cancelToken: cancelToken.token }
        );
        setProducts(data);
        setFilterProducts(data);
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
  }, []);

  // Use useMemo to filter products based on search term
  const filteredProductsList = useMemo(() => {
    return filterProducts.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  }, [filterProducts, searchTerm]);

  // Return loading animation if no filtered products yet
  if (filterProducts.length === 0)
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

  // Display product at index 5
  const displayProduct = products[5];

  return (
    <div className="text-center">
      {/* Display header if no search term */}
      {!searchTerm && <Header displayProduct={displayProduct} />}

      {/* Display categories if no search term */}
      {!searchTerm && (
        <Catergories
          products={products}
          setFilterProducts={setFilterProducts}
          setCategory={setCategory}
        />
      )}

      {/* Display filtered products */}
      <div className="containerWrap p-2 mt-4">
        <h1 className="capitalize text-left text-2xl md:text-3xl">
          {/* Display selected category */}
          {!searchTerm && category}
        </h1>
        <div className="flex flex-wrap justify-center gap-1 sm:gap-3 my-6">
          {filteredProductsList.length === 0 ? (
            // Display no products message
            <h1 className="text-3xl h-screen">No products match your search</h1>
          ) : (
            // Display filtered product cards
            filteredProductsList.map((result) => (
              <GadgetCard data={result} key={result.id} />
            ))
          )}
        </div>
      </div>
      {/* Display footer */}
      <Footer />
    </div>
  );
};

export default Home;
