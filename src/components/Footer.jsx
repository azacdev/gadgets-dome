import { useThemeHook } from "./ThemeProvider";

const Footer = () => {
  const [theme] = useThemeHook();
  return (
    <footer
      className={`${theme ? "bg-light-black" : "bg-light"} py-8 text-center`}
    >
      <div className="containerWrap mx-auto px-4">
        <h1 className="capitalize text-2xl font-bold mb-4">gadgets dome</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4">
            <h2 className=" text-lg font-semibold mb-2">
              Categories
            </h2>
            <ul className="list-none">
              <li>
                <a href="#">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#">
                  Phones
                </a>
              </li>
              <li>
                <a href="#">
                  Graphics Card &amp; Keyboard 
                </a>
              </li>
              {/* Add more categories */}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4">
            <h2 className=" text-lg font-semibold mb-2">About</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4">
            <h2 className=" text-lg font-semibold mb-2">Contact</h2>
            <p className="text-gray-400">123 Main Street, City, Country</p>
            <p className="text-gray-400">info@gadgets-dome.com</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4">
            <h2 className=" text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram-square text-2xl"></i>
              </a>
              {/* Add more social media links */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
