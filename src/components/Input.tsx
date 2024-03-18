import { Input as MaterialInput, InputProps } from "@material-tailwind/react/components/Input";
import { size } from "@material-tailwind/react/types/components/input";
import { HTMLInputTypeAttribute } from "react";

interface MaterialInputProps extends InputProps {
    label: string;
    placeholder: string;
    value?: any;
    type: HTMLInputTypeAttribute;
    size?: size;
    disabled?: boolean
}

const Input = ({ label, placeholder, value, type, size = 'md', disabled , className }: MaterialInputProps) => {
    return <MaterialInput className={className} disabled={disabled} size={size} label={label} placeholder={placeholder} crossOrigin value={value} type={type} />
};

export default Input;