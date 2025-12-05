import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("authUser");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("authUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [currentUser]);

  const signup = ({ name, email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setCurrentUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      throw new Error("Invalid credentials");
    }
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
