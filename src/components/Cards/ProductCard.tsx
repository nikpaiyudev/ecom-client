"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import Rating from "../Rating";
import RenderIf from "../RenderIf";

export interface ProductCardProps {
    id: string;
    image: string;
    discount: string;
    title: string;
    rate: {
        discountedRate: string;
        actualRate: string;
    }
    rating: number;
}

const ProductCard = ({ id, image, discount, title, rate, rating }: ProductCardProps) => {

    const [isAddToCart, setAddToCart] = useState(false);

    const WishlistIcon = () => {
        return (<div className="bg-white rounded-full h-9 w-9 flex justify-center items-center ">
            <IconButton children={<HeartIcon className='h-6 w-6' />} hoverIcon={<HeartSolidIcon className='h-6 w-6 text-red-500' />} onClick={() => { }} />
        </div>)
    };

    const handleMouseEnter = () => {
        setAddToCart(true);
    }

    const handleMouseLeave = () => {
        setAddToCart(false);
    }

    return (
        <div className="flex flex-col">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`bg-gray-100 flex flex-col cursor-pointer  bg-slate-200 rounded min-w-[300px] min-h-[300px]  ${isAddToCart ? 'justify-between' : 'justify-start'}`}>
                <div className="flex justify-between w-full p-3 ">
                    <div className="flex bg-red-500 h-7 w-14 rounded justify-center items-center text-white text-sm font-medium">{discount}</div>
                    <WishlistIcon />
                </div>
                <div className="w-full flex justify-center items-center">
                    <Image src={'/assets/img/game.png'} alt={'gamer'} height={180} width={190} />
                </div>
                <RenderIf isTrue={isAddToCart}>
                    <Button onClick={() => { }} className="bg-black h-10 text-white w-full text-center"><>Add to Cart</></Button>
                </RenderIf>
            </div>
            <div className="flex flex-col gap-2 py-5">
                <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{title}</span>
                <Rating />
                </div>
                <div className="flex gap-3 ">
                    <span className="text-red-500 font-medium">{rate?.discountedRate}</span>
                    <span className="line-through">{rate?.actualRate}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;