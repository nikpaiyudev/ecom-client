"use client";

import { useState } from "react";
import RenderIf from "../RenderIf";

export interface CategoryButtonProps {
    title: string;
    icon: JSX.Element;
    hoverIcon: JSX.Element;
}

const CategoryButton = ({ title, icon, hoverIcon }: CategoryButtonProps) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={` bg-white flex justify-center flex-col rounded cursor-pointer gap-4 items-center  h-[140px] hover:bg-red-500`}>
            <RenderIf isTrue={isHovered}>
                {hoverIcon}
            </RenderIf>
            <RenderIf isTrue={!isHovered}>
                {icon}
            </RenderIf>
            <span className={`text-base font-medium ${isHovered ? 'text-white' : ''} `}>{title}</span>
        </div>
    );
};

export default CategoryButton;