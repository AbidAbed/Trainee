import { useSelector } from "react-redux";
import useGenCompList from "./useGenCompList";
import useGenStuList from "./useGenStuList";
import useGenPostsList from "./useGenPostsList";
function useGenList() {
  const { isLoggedIn, logginType } = useSelector((state) => state.config);
  if (isLoggedIn) {
    switch (logginType) {
      case "student":
        return useGenCompList;
      case "company":
        return useGenPostsList;
      case "admin":
        return useGenStuList;
      default:
        return useGenCompList;
    }
  } else {
    return useGenCompList;
  }
}
export default useGenList;
