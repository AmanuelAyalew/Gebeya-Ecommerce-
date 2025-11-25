import React from "react";
import items from "../../data/index";
import Product from "../Product/Product";

const NewCollections = () => {
  return (
    <div className="container py-12 px-20">
      <div className="grid grid-cols-12 gap-6">
        {items.map((item, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <Product
              id={item.id}
              src={item.src}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
