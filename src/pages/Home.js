import List from "../components/List";
import useGenList from "../hooks/useGenList";

function Home({ children }) {
  const useGenhomeList = useGenList();
  const list = <List items={useGenhomeList()}></List>;
  return (
    <div>
      <div>{children}</div>
      <div>{list}</div>
    </div>
  );
}
export default Home;
