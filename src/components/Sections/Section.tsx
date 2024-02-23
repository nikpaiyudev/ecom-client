"use client";

import { MouseEventHandler } from "react";
import PreviousNextButton from "../Buttons/PreviousNextButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import RenderIf from "../RenderIf";

interface SectionProps {
    children: JSX.Element;
    heading: string;
    title: string;
    isButtonRequired: boolean;
    buttonText?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isNextPreviousRequired?: boolean;
}

const Section = ({ children, heading, title, isButtonRequired = false, onClick, isNextPreviousRequired = false }: SectionProps) => {

    return (
        <section className="flex m-20 flex-col border-b pb-20">
            <div className="flex gap-4 items-center">
                <div className="h-10 w-5 bg-red-500 rounded"></div>
                <h6 className="text-red-500 font-medium text-base">{heading}</h6>
            </div>
            <div className="mt-10 flex justify-between items-center">
                <h1 className="text-3xl text-black font-semibold">{title}</h1>
                <RenderIf isTrue={isNextPreviousRequired}>
                    <PreviousNextButton onClickLeft={() => { }} onClickRight={() => { }} />
                </RenderIf>
            </div>
            <div className="mt-10 flex">
                {children}
            </div>
            <RenderIf isTrue={isButtonRequired}>
                <div className="w-full flex justify-center items-center mt-16">
                    <PrimaryButton onClick={onClick}><>View All Products</></PrimaryButton>
                </div>
            </RenderIf>
        </section>
    );
};

export default Section;