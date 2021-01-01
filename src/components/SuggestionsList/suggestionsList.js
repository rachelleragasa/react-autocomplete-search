import React from "react";
import styled from "styled-components";

import useRoveFocus from "../../hooks/useRoveFocus";
import SuggestionsListItem from "../SuggestionsListItem/suggestionsListItem";

const SuggestionsList = ({ suggestions }) => {
  const [focus, setFocus] = useRoveFocus(suggestions.length);

  return (
    <SuggestionsListWrapper>
      <li key={0}>Github Users</li>
      {suggestions.map(({ id, login, avatar_url, html_url }, index) => (
        <SuggestionsListItem
          key={id}
          index={index}
          setFocus={setFocus}
          focus={focus === index}
          id={id}
          username={login}
          imgURL={avatar_url}
          profileURL={html_url}
        />
      ))}
    </SuggestionsListWrapper>
  );
};

const SuggestionsListWrapper = styled.ul`
  list-style: none;
  background-color: #fff;
  padding: 0;
  position: absolute;
  top: calc(100% - 20px);
  width: 100%;

  li {
    &:first-of-type {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      background-color: #fff;
      text-transform: uppercase;
      font-size: 16px;
      color: #414143;
      font-weight: bold;
    }
  }

  a {
    display: flex;
    width: 100%;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
`;

export default SuggestionsList;
