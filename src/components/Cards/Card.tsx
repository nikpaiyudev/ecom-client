import {Card as MaterialCard, CardBody} from '@material-tailwind/react';
import React from "react";
interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({title , children , className}:CardProps) => {
    return (
        <MaterialCard  placeholder={title}>
            <CardBody className={className} placeholder={title}>
                {children}
            </CardBody>
        </MaterialCard>
    );
};

export default Card;