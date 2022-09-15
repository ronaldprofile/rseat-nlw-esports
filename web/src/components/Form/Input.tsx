import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 rounded text-sm py-3 px-4 placeholder:text-zinc-500"
    />
  );
}
