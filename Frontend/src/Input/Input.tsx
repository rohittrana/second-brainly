import { RefObject } from "react";

interface InputProps {
  ref?: RefObject<HTMLInputElement>;
  placeholder: string;
}

export function Input({ ref, placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-4 py-2 rounded border m-2"
      ref={ref}
    />
  );
}