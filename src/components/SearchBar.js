import { useState } from "react";

function SearchBar() {
  const [searchContent, setSearchContent] = useState("");
  function handleOnChange(event) {
    setSearchContent(event.target.value);
  }
  return (
    <input
      type="text"
      onChange={handleOnChange}
      value={searchContent}
      placeholder="Search companies"
    />
  );
}
export default SearchBar;
