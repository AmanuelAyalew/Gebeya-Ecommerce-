import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProductManagement from './Components/ProductManagement';
import UserManagement from './Components/UserManagement';
import OrderManagement from './Components/OrderManagement';

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 px-2 py-4">
          <Link
            to="/admin/products"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Product Management
          </Link>
          <Link
            to="/admin/users"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            User Management
          </Link>
          <Link
            to="/admin/orders"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Order Management
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white border-b-4 border-indigo-600">
          <div className="text-xl font-semibold">Dashboard Overview</div>
          <div>
            {/* Admin specific header elements */}
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <Routes>
            <Route path="products" element={<ProductManagement />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route index element={<div>Welcome to the Admin Dashboard!</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
