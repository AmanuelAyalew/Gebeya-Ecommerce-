import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiStar, FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../../Context/Shopcontext";

const Product = (props) => {
  const { addtocart } = useContext(ShopContext);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden bg-gray-50">
        <Link to={`/display/${props.id}`}>
          <img
            className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            src={props.src}
            alt={props.name}
          />
        </Link>
        {/* Hover Action */}
        <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addtocart(props.id, 1)}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-gray-800 font-medium text-lg truncate mb-1">{props.name}</h3>
        <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <FiStar fill="currentColor" />
          <span className="text-gray-400 ml-1 text-xs">(120)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-xl">${props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
