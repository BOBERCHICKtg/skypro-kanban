import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  updateUserInfo: () => {},
  getToken: () => null,
});

export default AuthContext;
