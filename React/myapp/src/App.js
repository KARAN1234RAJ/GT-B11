// import { useState } from "react";
// import Counter from "./Counter";
// import Dashboard from "./Dashboard";
// import Home from "./Home";
// import data from "./data.json";
// import { Aboutme, AboutNishi } from "./About";
// import { HomePage, Login } from "./LoginLogout";

import Comp1 from "./cssModule/Comp1";

// import Parent from "./Parent";
import Comp2 from "./cssModule/Comp2";
import Form from "./Form/Form";
import ScroleImage from "./Form/ScroleImage";
import MoviesList from "./moviesList/MoviesList";
import Counter from "./useEffect/Counter";
import Example1 from "./useEffect/Example1";
import Example2 from "./useEffect/Example2";

function App() {
  // const [isLogin, setIsLogin] = useState(true);
  // console.log(isLogin);
  // const [isLoggedIn, setIsLoggedIn] = useState(!false);

  return (
    <div>
      {/* <Counter /> */}
      {/* <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      {isLogin ? <Home data = {data} /> : <Dashboard />} */}
      {/* <Aboutme text ="About Me Page" />
      <AboutNishi text ="About Nishi Page"/> */}

      {/* {isLoggedIn ? <Login /> : <HomePage />}
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{ isLoggedIn?"login":"Logout"}</button> */}

      {/* <Parent/> */}
      {/* <Comp1/>
      <Comp2/> */}
      {/* <MoviesList /> */}
      {/* <Form/> */}
      {/* <ScroleImage/> */}
      {/* <Counter/> */}
      {/* <Example1/> */}
      <Example2 />
    </div>
  );
}

export default App;
