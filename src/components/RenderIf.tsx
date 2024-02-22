interface RenderIfProps {
    children: JSX.Element;
    isTrue: boolean;
}

const RenderIf = ({ children, isTrue }: RenderIfProps) => {
    return isTrue ? children : null;
};

export default RenderIf;