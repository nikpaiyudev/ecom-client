import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon as ArrowLeftSolidIcon, ArrowRightIcon as ArrowRightSolidIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler } from "react";
import IconButton from "./IconButton";

interface NextContainerProps {
    children: JSX.Element;

}

interface PreviousNextButtonProps {
    onClickLeft: MouseEventHandler<SVGSVGElement>,
    onClickRight: MouseEventHandler<SVGSVGElement>
}

const PreviousNextButton = ({ onClickLeft, onClickRight }: PreviousNextButtonProps) => {

    const NextContainer = ({ children }: NextContainerProps) => {
        return (<div className="h-12 w-12 bg-slate-100 cursor-pointer  flex justify-center items-center rounded-full ">
            {children}
        </div>);
    }

    return (
        <div className="flex gap-3">
            <NextContainer ><IconButton children={<ArrowLeftSolidIcon className="h-6 w-6" />} hoverIcon={<ArrowLeftIcon onClick={onClickLeft} className="h-6 w-6" />}  /></NextContainer>
            <NextContainer><IconButton children={<ArrowRightSolidIcon className="h-6 w-6" />} hoverIcon={<ArrowRightIcon onClick={onClickRight} className="h-6 w-6" />}  /></NextContainer>

        </div>
    );
};

export default PreviousNextButton;