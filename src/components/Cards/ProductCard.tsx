"use client";

import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon, TrashIcon as TrashSolidIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import Rating from "../Rating";
import RenderIf from "../RenderIf";
import {useCallback} from "react";
import {Card, CardBody} from "@material-tailwind/react";

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
    cardWidth?:string;
}

const ProductCard = ({ id, image,cardWidth, discount, title, rate, rating, isDeleteIcon = false, isWishlistIcon = true }: ProductCardProps) => {

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

    return (
        <Card placeholder={''} className={`w-full ${cardWidth}`}>
            <CardBody placeholder={''} >
                <div className="flex flex-col">
                    <div
                         className={`flex flex-col cursor-pointer bg-white rounded `}>
                        <div className="flex justify-between w-full ">
                            <div
                                className="flex bg-red-500 h-7 w-14 rounded justify-center items-center text-white text-sm font-medium">{discount}</div>
                            <div className="flex gap-3">
                                <RenderIf isTrue={isWishlistIcon}>
                                    <WishlistIcon/>
                                </RenderIf>
                                <RenderIf isTrue={isDeleteIcon}>
                                    <DeleteIcon/>
                                </RenderIf>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <Image src={'/assets/img/game.png'} alt={'gamer'} height={180} width={190}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 py-5">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">{title}</span>
                            <Rating value={rating}/>
                        </div>
                        <div className="flex gap-3 ">
                            <span className="text-red-500 font-medium">{rate?.discountedRate}</span>
                            <span className="line-through">{rate?.actualRate}</span>
                        </div>
                    </div>
                </div>
                    <div className={'flex'}>
                        <Button onClick={() => {
                        }} className="bg-red-500 text-white h-10 w-full text-center rounded"><>Add to Cart</>
                        </Button>
                    </div>
            </CardBody>
        </Card>

    );
};

export default ProductCard;