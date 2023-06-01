import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Profile from "../pages/Profile";
import Button from "../components/Button";
import { changePath } from "../store/StoreInterface";

function useGenCompoUser() {
  const { isLoggedIn, logginType } = useSelector((state) => state.config);
  const { posts, companies } = useSelector((state) => {
    return {
      posts: state.posts,
      companies: state.companies,
    };
  });
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(changePath("/login"));
  }
  function handleSignup() {
    dispatch(changePath("/signup"));
  }
  if (isLoggedIn) {
    switch (logginType) {
      case "student":
        return (
          <div className="flex items-center justify-between p-4">
            <SearchBar items={companies} className="w-1/2" />
            <Profile />
          </div>
        );
      case "company":
        return (
          <div className="flex items-center justify-between p-4">
            <SearchBar items={posts} className="w-1/2" />
            <Profile />
          </div>
        );
      case "admin":
        return (
          <div className="flex items-center justify-between p-4">
            {/* buttons for switching between students and companies */}
            <Profile />
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-between p-4">
            <SearchBar items={companies} className="w-1/2" />
            <div>
              <Button value="Login" onChange={handleLogin} className="mr-2" />
              <Button value="Signup" onChange={handleSignup} />
            </div>
          </div>
        );
    }
  } else {
    return (
      <div className="flex items-center justify-between p-4">
        <SearchBar items={companies} className="w-1/2" />
        <div>
          <Button value="Login" onChange={handleLogin} className="mr-2" />
          <Button value="Signup" onChange={handleSignup} />
        </div>
      </div>
    );
  }
}

export default useGenCompoUser;
