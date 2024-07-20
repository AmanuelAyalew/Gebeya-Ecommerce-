import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Shopcontext";
import Detail from "../Components/Detail/Detail";

const Display = () => {
  const { productid } = useParams();
  const { items } = useContext(ShopContext);
  const allproducts = items.find((e) => e.id === Number(productid));
  return (
    <div>
      <Detail allproducts={allproducts} />
    </div>
  );
};

export default Display;
