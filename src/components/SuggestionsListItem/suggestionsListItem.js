import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const SuggestionsListItem = ({
  username,
  imgURL,
  profileURL,
  focus,
  setFocus,
  index,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (focus && e.key === "Enter") ref?.current?.focus();
    });
  }, [focus]);

  const handleSelect = useCallback(() => {
    window.open(profileURL, "_blank");
    // setting focus to that element when it is selected
    setFocus(index);
  }, [profileURL, index, setFocus]);

  return (
    <ListItem
      role="button"
      tabIndex={focus ? 0 : -1}
      ref={ref}
      focus={focus}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      <img src={imgURL} alt={`avatar of ${username}`} />
      <p>{username}</p>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  background-color: ${({ focus }) => (focus ? "#5f72a5" : "none")};
  color: ${({ focus }) => (focus ? "#fff" : "none")};

  &:focus {
    outline: none;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  p {
    margin: 0;
  }
`;

export default SuggestionsListItem;
