import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useThemeHook } from "../components/ThemeProvider";
import { useSearchHook } from "../components/SearchTermProvider";
import GadgetCard from "../components/GadgetCard";
import { useCart } from "react-use-cart";
import { FaCartArrowDown } from "react-icons/fa";
import { categories } from "../components/Categories";
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("All Categories");
  const [theme] = useThemeHook();
  const [searchTerm] = useSearchHook();
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const { addItem } = useCart();

  const fetchProductsData = async () => {
    try {
      const res = await fetch("https://itproducts.onrender.com/products");
      if (!res.ok) throw new Error("Oops! An error has occured");
      const data = await res.json();
      setProducts(data);
      setFilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

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

  const { id, title, description, img } = products[5];
  const addToCart = () => {
    addItem(products[5]);
  };

  return (
    <div className="text-center pb-3.5">
      {searchTerm ? (
        ""
      ) : (
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
              <img
                src={img}
                className="w-64 rounded-md"
                alt="apple-macbook-pro"
              />
            </div>
          </div>
        </div>
      )}

      {searchTerm ? (
        ""
      ) : (
        <div className="containerWrap p-4">
          <h1 className="capitalize text-left text-2xl md:text-3xl">Categories</h1>
          <div className="flex justify-center sm:justify-start gap-4 my-10 ">
            {categories.map((cat, id) => (
              <div
                className={`${
                  theme ? "bg-light-black" : "bg-light"
                } w-32 h-32 cursor-pointer relative rounded-md duration-200 hover:scale-105`}
                onClick={() => {
                  const filters = products.filter(
                    (product) => product.category === cat.name
                  );
                  cat.name === "all categories"
                    ? setFilterProducts(products)
                    : setFilterProducts(filters);
                  setCategory(cat.name);
                }}
                key={id}
              >
                <img
                  src={cat.image}
                  className="w-full h-full rounded-md object-cover"
                  alt="category-image"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white font-medium capitalize text-xs md:text-base">
                    {cat.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="containerWrap p-4">
        <h1 className="capitalize text-left text-2xl md:text-3xl">{category}</h1>
        <div className="flex flex-wrap gap-4 my-6">
          {filterProducts
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((result) => (
              <GadgetCard data={result} key={result.id} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
