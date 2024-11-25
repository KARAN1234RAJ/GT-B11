let user = {
  isAuthenticated: false,
  username: "",
};

user.username = user.isAuthenticated || "guest";

console.log("Username:", user.username);
