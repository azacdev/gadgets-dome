import { useEffect, useMemo, useState } from "react";
import axios from "axios"
import { useSearchHook } from "../components/SearchTermProvider";
import Header from "../components/Header";
import Catergories from "../components/Catergories";
import Footer from "../components/Footer";
import GadgetCard from "../components/GadgetCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState("All Categories");
  const [searchTerm] = useSearchHook();

  // const fetchProductsData = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://itproducts.onrender.com/products");
  //     if (!res.ok) {
  //       throw new Error("Oops! An error has occured");
  //     }
  //     const data = await res.json();
  //     setProducts(data);
  //     setFilterProducts(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchProductsData();
  // }, [fetchProductsData]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://itproducts.onrender.com/products");
        setProducts(res.data);
        setFilterProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProductsList = useMemo(() => {
    return filterProducts.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    });
  }, [filterProducts, searchTerm]);

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

  const displayProduct = products[5];

  return (
    <div className="text-center">
      {!searchTerm && <Header displayProduct={displayProduct} />}

      {!searchTerm && (
        <Catergories
          products={products}
          setFilterProducts={setFilterProducts}
          setCategory={setCategory}
        />
      )}

      <div className="containerWrap p-2 mt-4">
        <h1 className="capitalize text-left text-2xl md:text-3xl">
          {!searchTerm && category}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 my-6">
          {filteredProductsList.length === 0 ? (
            <h1 className="text-3xl h-screen">No products match your search</h1>
          ) : (
            filteredProductsList.map((result) => (
              <GadgetCard data={result} key={result.id} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
