import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { changePath } from "../store/StoreInterface";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const { rendredPostId } = useSelector((state) => state.config);
  const [rendredPost] = posts.filter((post) => post.id === rendredPostId);
  const { isLoggedIn } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  function handleApply(event) {
    if (!isLoggedIn) dispatch(changePath("/login"));
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Job Offer: {rendredPost.position}</h2>
      <div className="mb-4">
        <span className="font-bold">Job Description: </span>
        <span>{rendredPost.content}</span>
      </div>
      <div>
        <Button onChange={handleApply} value="Apply" className="bg-blue-900 text-white py-2 px-4 rounded cursor-pointer" />
      </div>
    </div>
  );
}

export default Posts;
