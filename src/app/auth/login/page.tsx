"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Input from "@/components/Input";
import {Button, CardBody ,Card} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <section className="flex w-full ">
            <div className="flex-1 flex rounded">
                <Image src={'/assets/img/signup.png'} className={'rounded'} width={805} height={781} alt={'signup'} />
            </div>
            <div className="flex-1 flex flex-col pt-40 pb-20 justify-center items-center gap-10 w-full">
                <Card placeholder={''}>
                    <CardBody placeholder={''}>
                        <div className="w-[350px] flex flex-col gap-10">
                            <div className="flex w-full flex-col gap-3">
                                <h1 className="text-3xl font-medium text-black">Login into Exclusive</h1>
                                <span className="text-sm">Enter your details below</span>
                            </div>
                            <form>
                                <div className="flex flex-col gap-5">
                                    <Input size={'lg'} label="Email" placeholder="Enter Email" type={'email'}/>
                                    <Input size={'lg'} label="Password" placeholder="Enter Password" type={'password'}/>
                                </div>
                                <div className="flex w-full justify-end items-center mt-5">
                                    <Link href={'/auth/forgot-password'}><span className="text-red-400">Forgot Password ?</span></Link>
                                </div>

                                <PrimaryButton className="mt-5 w-full " onClick={() => {
                                }}><>Login</>
                                </PrimaryButton>
                                <Button
                                    placeholder={'Google'}
                                    size="lg"
                                    variant="outlined"
                                    color="blue-gray"
                                    className="flex items-center text-gray-600 font-medium gap-3 w-full mt-5 justify-center"
                                >
                                    <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask"
                                         className="h-6 w-6"/>
                                    Sign in with Google
                                </Button>
                                <div className="flex gap-3 w-full justify-center items-center mt-10">
                                    <span className="text-gray-600">Dont Have an Account ? </span>
                                    <Link href="/auth/login"><span
                                        className="underline text-black">Sign Up</span></Link>
                                </div>
                            </form>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </section>
    );
}

export default LoginPage;