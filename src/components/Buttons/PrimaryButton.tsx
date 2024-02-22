import Button, { ButtonProps } from "./Button";



const PrimaryButton = ({ onClick, children }: ButtonProps) => {

    return <Button className="bg-red-500 border-none rounded py-4 px-16 text-white font-medium text-base" onClick={onClick}>{children}</Button>
};

export default PrimaryButton;