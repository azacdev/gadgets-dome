import { Link } from "react-router-dom";
import { useThemeHook } from "../ThemeProvider";
import { footerContent } from "./footerContent";

const Footer = () => {
  const [theme] = useThemeHook();
  return (
    <footer
      className={`${theme ? "bg-light-black" : "bg-light"} h-64 shadow-md`}
    >
      <div className="containerWrap flex justify-between flex-wrap flex-grow min-width-[800px] ">
        {footerContent.map((item) => {
          return (
            <div className="mt-6 md:mt-0" key={item.title}>
              <h2 className="capitalize text-md rtl:border-r-4 ltr:border-l-4 border-palette-primary px-2">
                {item.title}
              </h2>
              <div className="flex flex-col mt-2">
                {item.subtitles.map((subItem) => {
                  return (
                    <Link href={subItem.href} key={subItem.text}>
                      <a className="capitalize text-sm text-palette-base/90 px-4 py-2 hover:text-palette-base/100">
                        {subItem.text}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
