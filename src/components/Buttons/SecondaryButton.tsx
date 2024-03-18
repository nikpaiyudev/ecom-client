import Button, { ButtonProps } from "./Button";




const SecondaryButton = (props: ButtonProps) => {
    return (
    <Button {...props} >{props.children}</Button>
    );
};

export default SecondaryButton;