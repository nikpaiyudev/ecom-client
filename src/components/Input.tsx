import { Input as MaterialInput } from "@material-tailwind/react/components/Input";
import { size } from "@material-tailwind/react/types/components/input";
import { HTMLInputTypeAttribute } from "react";

interface InputProps {
    label: string;
    placeholder: string;
    value?: any;
    type: HTMLInputTypeAttribute;
    size?: size;
}

const Input = ({ label, placeholder, value, type, size = 'md' }: InputProps) => {
    return <MaterialInput size={size} label={label} placeholder={placeholder} crossOrigin value={value} type={type} />
};

export default Input;