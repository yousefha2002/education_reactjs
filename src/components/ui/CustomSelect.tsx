import { CustomSelectProps } from "../../types/forms/CustomeSelectProps";

const CustomSelect: React.FC<CustomSelectProps> = ({
    name,
    register,
    options,
    defaultValue,
    rules,
    getDisplayValue,
    getValue
    }) => {
        return (
        <select
            defaultValue={defaultValue}
            {...register(name, { ...rules, required: true })}
            className="bg-gray-50 border max-h-[100px] border-Border text-gray-900 text-md duration-300 rounded-[2px] outline-none focus:ring-Primary focus:border-Primary block w-full p-2"
        >
            {options.map((item) => (
            <option className="capitalize" key={item} value={getValue(item)}>
                {getDisplayValue(item)} {/* Use the getDisplayValue function */}
            </option>
            ))}
        </select>
        );
    };
  
export default CustomSelect;