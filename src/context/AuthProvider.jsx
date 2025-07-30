import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import checkLs from "../utils/checkLs";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => checkLs());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Failed to parse user data", error);
        localStorage.removeItem("userInfo");
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const updateUserInfo = (userData) => {
    try {
      setUser(userData);
      if (userData) {
        localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
        localStorage.removeItem("userInfo");
      }
    } catch (error) {
      console.error("Failed to update user info", error);
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  const contextValue = {
    user,
    isLoading,
    login,
    logout,
    updateUserInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
