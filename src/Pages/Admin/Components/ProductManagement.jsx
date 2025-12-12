import React, { useState, useEffect } from 'react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    category: '',
    new_price: '',
    old_price: '',
  });

  useEffect(() => {
    // In a real application, you would fetch products from an API here.
    // For now, we'll use dummy data.
    setProducts([
      { id: 1, name: 'Dummy Product 1', image: 'placeholder.png', category: 'Electronics', new_price: 100, old_price: 120 },
      { id: 2, name: 'Dummy Product 2', image: 'placeholder.png', category: 'Clothing', new_price: 50, old_price: 60 },
    ]);
  }, []);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    // In a real application, you would send newProduct to an API.
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({
      name: '',
      image: '',
      category: '',
      new_price: '',
      old_price: '',
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-3">Add New Product</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newProduct.category}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="new_price"
            placeholder="New Price"
            value={newProduct.new_price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="old_price"
            placeholder="Old Price"
            value={newProduct.old_price}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddProduct}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-3">Existing Products</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">New Price</th>
                <th className="py-2 px-4 border-b">Old Price</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.id}</td>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={product.image} alt={product.name} className="h-12 w-12 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">${product.new_price}</td>
                  <td className="py-2 px-4 border-b">${product.old_price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
