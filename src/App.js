import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

import SearchBox from "./components/SearchBox/searchBox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const search = async (username) => {
    try {
      const url = `https://api.github.com/search/users?q=${username}&per_page=5`;
      const data = await axios.get(url);
      if (data.status === 200) setResults(data.data.items);
    } catch (error) {
      console.log(`error: ${error}`);
      setResults([]);
    }
  };

  const debouncedSearch = debounce((value) => search(value), 1000);

  const handleChange = (value) => {
    setSearchTerm(value);

    document
      .querySelector("#user-search")
      .addEventListener("keydown", debouncedSearch(value));
  };

  return (
    <SearchBox
      id="user-search"
      name="user-search"
      label="Search for user..."
      placeholder="Search for user..."
      onChange={(event) => handleChange(event.target.value)}
      value={searchTerm}
      results={results}
    />
  );
};

export default App;
