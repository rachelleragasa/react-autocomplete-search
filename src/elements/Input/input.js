import React from "react";
import styled from "styled-components";

const Input = ({ id, type, name, onChange, value, label, placeholder }) => (
  <>
    <Label htmlFor={id}>{label}</Label>
    <InputField
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      autoComplete="off"
    />
  </>
);

const InputField = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 0;
  border: 3px solid #fff;
  background: transparent;
  color: #fff;

  &::placeholder {
    color: #fff;
  }
`;

const Label = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Input;
