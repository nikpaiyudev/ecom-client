import Button, { ButtonProps } from "./Button";



const PrimaryButton = ({ onClick, children, className }: ButtonProps) => {
    return <Button className={`bg-red-500 ${className}`} onClick={onClick}><>{children}</></Button>
};

export default PrimaryButton;