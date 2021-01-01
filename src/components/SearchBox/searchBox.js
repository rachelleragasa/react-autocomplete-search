import React from "react";
import styled from "styled-components";

import { above } from "../../styles";
import Input from "../../elements/Input/input";
import SuggestionsList from "../../components/SuggestionsList/suggestionsList";

const SearchBox = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  value,
  results,
}) => (
  <SearchBoxWrapper>
    <Input
      type="text"
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {results.length > 0 && <SuggestionsList suggestions={results} />}
  </SearchBoxWrapper>
);

const SearchBoxWrapper = styled.div`
  width: calc(100vw - 30px);
  position: relative;

  ${above.tablet`
    width: calc(100vw - 300px);
  `}
`;

export default SearchBox;
