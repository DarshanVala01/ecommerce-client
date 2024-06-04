import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";

const CustomerRouters = () => {
  return (
    <>
      <div>
        <div></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};
export default CustomerRouters;
