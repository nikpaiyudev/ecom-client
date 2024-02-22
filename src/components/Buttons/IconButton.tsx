

import { MouseEventHandler, SyntheticEvent, useCallback, useState } from "react";
import RenderIf from "../RenderIf";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLSpanElement>,
    children: JSX.Element;
    hoverIcon: JSX.Element;
}


const IconButton = ({ children, onClick, hoverIcon }: IconButtonProps) => {

    const [ishoverState, setHoverState] = useState(false);

    const handleMouseEnter = useCallback((event: SyntheticEvent) => {
        setHoverState(true);
    }, []);

    const handleMouseLeave = useCallback((event: SyntheticEvent) => {
        setHoverState(false);
    }, [])

    return <>
        <RenderIf isTrue={ishoverState}>
            <span className="cursor-pointer" onMouseLeave={handleMouseLeave} onClick={onClick}>{hoverIcon}</span>
        </RenderIf>
        <RenderIf isTrue={!ishoverState}>
            <span className="cursor-pointer" onMouseEnter={handleMouseEnter}>{children}</span>
        </RenderIf>
    </>
};

export default IconButton;