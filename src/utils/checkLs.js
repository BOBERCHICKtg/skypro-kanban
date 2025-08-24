const checkLs = () => {
  const storedUser = localStorage.getItem("userInfo");
  return storedUser ? JSON.parse(storedUser) : null;
};

export default checkLs;
