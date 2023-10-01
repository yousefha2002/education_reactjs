import { RegisterOptions, UseFormRegister } from "react-hook-form";

export type CustomSelectProps =  {
  name: string;
  register: UseFormRegister<any>;
  options: any[]; // Change the type of options to accept any array
  defaultValue: string | string[];
  rules?: RegisterOptions;
  getDisplayValue: (item: any) => string;
  getValue: (item: any) => string;
}