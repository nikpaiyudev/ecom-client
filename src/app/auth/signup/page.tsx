"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Input from "@/components/Input";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const SignupPage = () => {
    return (
        <section className="flex w-full mt-20">
            <div className="flex-1 flex">
                <Image src={'/assets/img/signup.png'} width={805} height={781} alt={'signup'} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-10 w-full">
                <div className="w-[350px] flex flex-col gap-10">
                    <div className="flex w-full flex-col gap-3">
                        <h1 className="text-3xl font-medium">Create Your Account</h1>
                        <span className="text-sm">Enter your details below</span>
                    </div>
                    <form>
                        <div className="flex flex-col gap-5">
                            <Input size={'lg'} label="Full Name" placeholder="Enter Name" type={'text'} />
                            <Input size={'lg'} label="Email" placeholder="Enter Email" type={'email'} />
                            <Input size={'lg'} label="Phone Number" placeholder="Enter Phone Number" type={'number'} />
                            <Input size={'lg'} label="Password" placeholder="Enter Phone Number" type={'password'} />
                            <Input size={'lg'} label="Confirm Password" placeholder="Enter Phone Number" type={'password'} />
                        </div>
                        <PrimaryButton className="mt-5 w-full " onClick={() => { }}><>Create Account</></PrimaryButton>
                        <Button
                            placeholder={'Google'}
                            size="lg"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center text-gray-600 font-medium gap-3 w-full mt-5 justify-center"
                        >
                            <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
                            Sign up with Google
                        </Button>
                        <div className="flex gap-3 w-full justify-center items-center mt-10">
                            <span className="text-gray-600">Already have account ? </span>
                            <Link href="/auth/login"><span className="underline text-black">Log In</span></Link>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
}

export default SignupPage;