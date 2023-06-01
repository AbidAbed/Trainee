import { useDispatch, useSelector } from "react-redux";
import { changePath, changeRendredCompanyId } from "../store/StoreInterface";

function useGenCompList() {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies);
  const items = companies.map((company) => {
    return {
      id: company.id,
      onChange: (event) => {
        dispatch(changeRendredCompanyId(company.id));
        dispatch(changePath("/company"));
      },
      content: (
        <div className="p-3 mb-2 bg-blue-900 text-white rounded cursor-pointer shadow-md">
          <div className="font-bold">company : {company.name}</div>
          <div className="text-sm">description : {company.description}</div>
          <div>location : {company.location}</div>
        </div>
      ),
    };
  });
  return items;
}

export default useGenCompList;
