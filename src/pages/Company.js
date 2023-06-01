import { useSelector } from "react-redux";
import List from "../components/List";
import useGenPostsList from "../hooks/useGenPostsList";

function Company() {
  const { rendredCompanyId } = useSelector((state) => state.config);
  const [company] = useSelector((state) => {
    return state.companies.filter((comp) => comp.id === rendredCompanyId);
  });
  //todo fetch posts from server for a specific company by company id
  const posts = useSelector((state) => {
    return state.posts;
  });
  const postsList = <List items={useGenPostsList()} />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
      <div className="mb-4">
        <span className="font-bold">Description: </span>
        <span>{company.description}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">Email: </span>
        <span>{company.email}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">Phone Number: </span>
        <span>{company.phoneNumber}</span>
      </div>
      <div className="mb-4">
        <span className="font-bold">Location: </span>
        <span>{company.location}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">Available Positions:</h3>
      <div>{postsList}</div>
    </div>
  );
}

export default Company;
