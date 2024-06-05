import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/product/${4}`)}
        className="productCard w-[15rem] m-3 transition-all cursor-pointer"
      >
        <div className="h-[20rem]">
          <img
            className="h-full w-full object-cover object-left-top"
            src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
            alt="Product"
          />
        </div>

        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">Universaloutfit</p>
            <p>Casual Puff Sleeves Solid Women White Top</p>
          </div>

          <div className="flex   items-center space-x-2">
            <p className="font-semibold">₹199</p>
            <p className="line-through opacity-50">₹299</p>
            <p className="text-green-600 font-semibold">70% off</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
