import { Dispatch, SetStateAction } from "react";

export interface TextInputProps {
  label: string;
  value: string;
  placeholder?: string;
  setStateHandler: Dispatch<SetStateAction<string>>;
}
