import { MouseEventHandler } from "react";
import {Button as MaterialButton , ButtonProps as MasterialButtonProps} from '@material-tailwind/react';
export interface ButtonProps extends MasterialButtonProps{
    children: any;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    buttonType?: 'Primary';
}

const Button = (props: ButtonProps) => {
    return <MaterialButton className={`${props.buttonType === 'Primary' ? 'bg-red-400' : ''}`} placeholder={''} {...props}>{props.children}</MaterialButton>
};

export default Button;