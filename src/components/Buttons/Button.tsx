import { MouseEventHandler } from "react";

export interface ButtonProps {
    children: JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
    return <button className={className} onClick={onClick}>{children}</button>
};

export default Button;