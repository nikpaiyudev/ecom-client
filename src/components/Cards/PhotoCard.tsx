"use client";

import React from "react";

interface PhotoCardProps {
    classNames: string;
    title: string;
    description: string;
    navigationLink:  string;
}


const PhotoCard = ({classNames , title , description , navigationLink} : PhotoCardProps) => {



    return (
                <div
                    className={`flex flex-col w-full gap-2 justify-end items-start bg-black text-white p-10  ${classNames}`}>
                    <span className="text-lg font-bold">{title}</span>
                    <span className="text-sm font-normal max-w-[250px] text-wrap">{description}</span>
                    <span className="underline text-xs mt-5">Shop Now</span>
                </div>
    );
};

export default PhotoCard;