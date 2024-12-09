const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <>
        <label>Username:</label>
        <input type="text" name="username" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
      </>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to our website</h1>
      <p>This is your home page</p>
    </div>
  );
};

export { HomePage, Login };
