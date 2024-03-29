"use client";

import sideMenuListItems from "@/assets/constants/side-menu";
import { FireIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SideMenuPanel from "../SideMenuPanel";
import Card from "@/components/Cards/Card";

const HeroSection = () => {

    return (
        <Card title={''} className={'p-0'}>
            <section className="flex flex-row h-full justify-center items-center">
                <SideMenuPanel listItems={sideMenuListItems}/>
                <div className="h-full   flex flex-grow p-10">
                    <div className="bg-black w-[100%] justify-center items-center  rounded p-10 h-full flex text-white">
                        <div className="flex flex-1 flex-col gap-10">
                            <div className="flex gap-3 items-center">
                                <FireIcon className="h-10 w-10"/>
                                <h1 className="text-base font-normal">Iphone 15 Series</h1>
                            </div>
                            <p className="text-5xl leading-tight font-medium">Up to 10%<br/>off Voucher</p>
                            <Link href={'/'} className='text-sm underline flex gap-3 items-center'> Shop
                                Now <ArrowRightIcon className="h-6 w-6"/></Link>
                        </div>
                        <div className="flex flex-1 h-full rounded">
                            <Image src={'assets/img/iphone.svg'} className={'rounded'} width={498} height={396} alt='IphoneLogo'/>
                        </div>
                    </div>
                </div>
            </section>
        </Card>

    );
};

export default HeroSection;