import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Signin from "../Screens/Signin";

export const screensNavigation = [
  { name: "Login", component: Login, protected: false },
  { name: "Signin", component: Signin, protected: false },
  { name: "Home", component: Home, protected: true },
];
