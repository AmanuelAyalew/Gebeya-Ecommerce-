import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./Context/Shopcontext.jsx";
import AuthProvider from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ShopContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShopContextProvider>
  </AuthProvider>
);
