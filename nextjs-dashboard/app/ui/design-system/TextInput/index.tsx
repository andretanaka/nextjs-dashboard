import * as t from "./types";
import * as s from "./styles";
import { ChangeEvent } from "react";

export default function TextInput({
  label,
  value,
  placeholder,
  setStateHandler,
}: t.TextInputProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setStateHandler(targetValue);
  };

  return (
    <s.Wrapper>
      <s.Label>{label}</s.Label>
      <input
        placeholder={placeholder || label}
        value={value}
        onChange={onChangeHandler}
      />
    </s.Wrapper>
  );
}
