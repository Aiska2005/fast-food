import { Route, Routes } from "react-router-dom";
import Layouts from "../components/Layout/Layout";
import Home from "../components/home/Home";
import Menus from "../components/menus/Menus";
import Restorans from "../pages/restorans/Restorans";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Rules from "../pages/ruls/Rules";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/restorans" element={<Restorans />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
