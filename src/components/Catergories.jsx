import { categories } from "./CategoriesContent";
import { useThemeHook } from "./ThemeProvider";

const Catergories = ({products, setFilterProducts, setCategory}) => {
  const [theme] = useThemeHook();

  return (
    <div className="containerWrap p-2">
      <h1 className="capitalize text-left text-2xl md:text-3xl">Categories</h1>
      <div className="flex sm:justify-start gap-4 my-10 overflow-auto lg:overflow-hidden">
        <div className="flex gap-4">
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
    </div>
  );
};

export default Catergories;
