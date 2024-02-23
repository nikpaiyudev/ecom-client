"use client";

import IconButton from "./Buttons/IconButton";
import SearchBarInput from "./SearchBarInput";
import { HeartIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingIconSolid, UserIcon as UserIconSolid } from '@heroicons/react/24/solid';
import Link from "next/link";

const Header = () => {
    return (
        <header className="h-20 flex fixed top-0 z-50 bg-white justify-between items-center w-full header-logo px-20 max-w-[1500px] m-auto border-b border-black-600">
            <div className="flex">
                <h1 className="text-2xl font-bold">Exclusive</h1>
            </div>
            <div className="flex">
                <ul className="flex gap-10 text-base items-center justify-center">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/about'>Categories</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex">
                    <SearchBarInput placeholder="What are you looking for ?" />
                </div>
                <div className="flex">
                    <ul className="flex list-none items-center gap-4">
                        <li>
                            <IconButton children={<HeartIcon className="h-6 w-6" />} hoverIcon={<HeartIconSolid className="h-6 w-6" />} onClick={() => { }} />
                        </li>
                        <li>
                            <IconButton children={<ShoppingCartIcon className="h-6 w-6" />} hoverIcon={<ShoppingIconSolid className="h-6 w-6" />} onClick={() => { }} />
                        </li>
                        <li>
                            <IconButton children={<UserIcon className="h-6 w-6" />} hoverIcon={<UserIconSolid className="h-6 w-6" />} onClick={() => { }} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;