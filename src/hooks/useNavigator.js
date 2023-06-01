import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Company from "../pages/Company";
import Student from "../pages/Student";
import Lgoin from "../pages/Login";
import Signup from "../pages/Signup";
import useGenCompoUser from "./useGenCompoUser";

function useNavigator() {
  const { path } = useSelector((state) => state.config);
  const child = useGenCompoUser();
  switch (path) {
    case "/home":
      return <Home>{child}</Home>;
    case "/company":
      return <Company>{child}</Company>;
    case "/company/post":
      return <Posts>{child}</Posts>;
    case "/student":
      return <Student>{child}</Student>;
    case "/posts":
      return <Home>{child}</Home>;
    case "/posts/student":
      return <Student>{child}</Student>;
    case "/login":
      return <Lgoin>{child}</Lgoin>;
    case "/signup":
      return <Signup>{child}</Signup>;
    default:
      return <Home>{child}</Home>;
  }
}
export default useNavigator;
