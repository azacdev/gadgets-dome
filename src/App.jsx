import { useThemeHook } from "./components/ThemeProvider";
import "./App.css";
import Navbar from "./components/Navbar";
import { SearchProvider } from "./components/SearchTermProvider";
import { Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import GadgetDetail from "./pages/GadgetDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [theme] = useThemeHook();
  return (
    <div
      className={`${theme ? "bg-black" : "bg-light-2"}
    overflow-y-auto h-screen`}
    >
      <SearchProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gadget/:id" element={<GadgetDetail />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
