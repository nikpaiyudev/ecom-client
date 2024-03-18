import {Card as MaterialCard, CardBody} from '@material-tailwind/react';
import React from "react";
interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({title , children , className}:CardProps) => {
    return (
        <MaterialCard className={'w-full'} placeholder={title}>
            <CardBody className={className} placeholder={title}>
                <h1 className={'text-black text-xl font-bold mb-5'}>{title}</h1>
                {children}
            </CardBody>
        </MaterialCard>
    );
};

export default Card;