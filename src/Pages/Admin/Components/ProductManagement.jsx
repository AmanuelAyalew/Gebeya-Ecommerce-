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
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    setProducts(data);
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    const response = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    setProducts([...products, data]);
    setNewProduct({
      name: '',
      image: '',
      category: '',
      new_price: '',
      old_price: '',
    });
  };

  const handleDeleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleEditChange = (e) => {
    setEditingProduct({ ...editingProduct, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async () => {
    await fetch(`http://localhost:5000/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingProduct),
    });
    setProducts(
      products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      )
    );
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
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

      {editingProduct && (
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3">Edit Product</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={editingProduct.name}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={editingProduct.image}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={editingProduct.category}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="new_price"
              placeholder="New Price"
              value={editingProduct.new_price}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="old_price"
              placeholder="Old Price"
              value={editingProduct.old_price}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdateProduct}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
            >
              Update Product
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">${product.new_price}</td>
                  <td className="py-2 px-4 border-b">${product.old_price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
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
