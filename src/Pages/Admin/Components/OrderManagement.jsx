import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch('http://localhost:5000/orders');
    const data = await response.json();
    setOrders(data);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    const orderToUpdate = orders.find((order) => order.id === id);
    if (orderToUpdate) {
      const updatedOrder = { ...orderToUpdate, status: newStatus };
      await fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedOrder),
      });
      setOrders(orders.map((order) => (order.id === id ? updatedOrder : order)));
    }
  };

  const handleDeleteOrder = async (id) => {
    await fetch(`http://localhost:5000/orders/${id}`, {
      method: 'DELETE',
    });
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleEditClick = (order) => {
    setEditingOrder(order);
  };

  const handleEditChange = (e) => {
    setEditingOrder({ ...editingOrder, [e.target.name]: e.target.value });
  };

  const handleUpdateOrder = async () => {
    await fetch(`http://localhost:5000/orders/${editingOrder.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingOrder),
    });
    setOrders(
      orders.map((order) => (order.id === editingOrder.id ? editingOrder : order))
    );
    setEditingOrder(null);
  };

  const handleCancelEdit = () => {
    setEditingOrder(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Management</h2>

      {editingOrder && (
        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-3">Edit Order</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={editingOrder.userId}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="total"
              placeholder="Total Amount"
              value={editingOrder.total}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
            <select
              name="status"
              value={editingOrder.status}
              onChange={handleEditChange}
              className="border p-2 rounded"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <input
              type="date"
              name="date"
              placeholder="Order Date"
              value={editingOrder.date}
              onChange={handleEditChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdateOrder}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
            >
              Update Order
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
        <h3 className="text-xl font-semibold mb-3">Existing Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">User ID</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.userId}</td>
                  <td className="py-2 px-4 border-b">${order.total}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      value={order.status}
                      onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                      className="border p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-2 px-4 border-b">{order.date}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleEditClick(order)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
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

export default OrderManagement;
