import { useDispatch, useSelector } from "react-redux";
import { changePath } from "../store/StoreInterface";
import { changeRendredPostId } from "../store/Slices/ConfigSlice";

function useGenPostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const items = posts.map((post) => {
    return {
      id: post.id,
      onChange: (event) => {
        dispatch(changeRendredPostId(post.id));
        dispatch(changePath("/company/post"));
      },
      content: (
        <div>
          <div>{post.position}</div>
          <div>{post.description}</div>
        </div>
      ),
    };
  });
  return items;
}
export default useGenPostsList;
