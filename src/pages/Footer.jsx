import { useThemeHook } from "../components/ThemeProvider";

const Footer = () => {
  const [theme] = useThemeHook();
  return (
    <footer
      className={`${theme ? "bg-light-black" : "bg-light"} h-64 shadow-md`}
    >
      <div className="containerWrap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Gadgets Dome</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
              magna sit amet est tempus bibendum at id mi.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="text-sm">
              <li className="mb-2">Clothing</li>
              <li className="mb-2">Electronics</li>
              <li className="mb-2">Accessories</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              123 Street, City
              <br />
              Country, ZIP Code
              <br />
              +1 234 567890
              <br />
              info@gadgetsdome.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
