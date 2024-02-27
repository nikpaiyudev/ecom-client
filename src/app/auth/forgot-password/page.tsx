"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Input from "@/components/Input";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
    return (
        <section className="flex w-full mt-20">
            <div className="flex-1 flex">
                <Image src={'/assets/img/signup.png'} width={805} height={781} alt={'signup'} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10 w-full">
                <div className="w-[350px] flex flex-col gap-10">
                    <div className="flex w-full flex-col gap-3">
                        <h1 className="text-3xl font-medium">Forgot Password</h1>
                        <span className="text-sm">Enter your email address below</span>
                    </div>
                    <form>
                        <div className="flex flex-col gap-5">
                            <Input size={'lg'} label="Email" placeholder="Enter Email" type={'email'} />
                        </div>
                        <div className="flex mt-5 gap-3">
                            <Input size={'lg'} label="Enter 4 digit Otp" placeholder="Enter Otp" type={'number'} max={4} />
                        </div>
                        <PrimaryButton className="mt-5 w-full " onClick={() => { }}><>Get Otp</></PrimaryButton>
                        <PrimaryButton className="mt-5 w-full " onClick={() => { }}><>Confirm Otp</></PrimaryButton>
                        <div className="mt-5 w-full justify-between flex items-center gap-2">
                            <div className="flex gap-1">
                                <span className="font-light">Resend Otp in</span><span className="font-extrabold">45s</span>
                            </div>
                            <div className="flex">
                                <span className="underline font-bold">Resend Otp</span>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default ForgotPasswordPage;