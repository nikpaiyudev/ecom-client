"use client";

import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon, TrashIcon as TrashSolidIcon } from "@heroicons/react/24/solid";
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
    isDeleteIcon?: boolean;
    isWishlistIcon?: boolean;
}

const ProductCard = ({ id, image, discount, title, rate, rating, isDeleteIcon = false, isWishlistIcon = true }: ProductCardProps) => {

    const [isAddToCart, setAddToCart] = useState(false);

    const IconBg = ({ children }: { children: JSX.Element }) => {
        return (
            <div className="bg-white rounded-full h-9 w-9 flex justify-center items-center ">
                {children}
            </div>
        );
    }

    const WishlistIcon = () => {
        return (<IconBg >
            <IconButton children={<HeartIcon className='h-6 w-6' />} hoverIcon={<HeartSolidIcon className='h-6 w-6 text-red-500' />} onClick={() => { }} />
        </IconBg>
        )
    };

    const DeleteIcon = () => {
        return (
            <IconBg >
                <IconButton children={<TrashIcon className='h-6 w-6' />} hoverIcon={<TrashSolidIcon className='h-6 w-6 text-black' />} onClick={() => { }} />
            </IconBg>
        );
    }

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
                    <div className="flex gap-3">
                        <RenderIf isTrue={isWishlistIcon}>
                            <WishlistIcon />
                        </RenderIf>
                        <RenderIf isTrue={isDeleteIcon}>
                            <DeleteIcon />
                        </RenderIf>
                    </div>
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
                    <Rating value={rating} />
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