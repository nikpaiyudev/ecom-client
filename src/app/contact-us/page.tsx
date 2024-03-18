"use client";

import Card from '@/components/Cards/Card';
import {PhoneIcon , EnvelopeIcon} from "@heroicons/react/24/outline";
import Input from "@/components/Input";
import {Textarea} from "@material-tailwind/react";
import Button from "@/components/Buttons/Button";

interface RoundedIconProps {

}

const ContactUsPage = () => {

    const RoundedIcon = ({icon,title}:{icon:any , title: string}) => {
        return (
            <div className={'flex items-center w-full gap-3'}>
                    <div className={'h-10 w-10 bg-red-400 rounded-full flex justify-center items-center'}>{icon}</div>
                    <span>{title}</span>
            </div>
        );
    }



    return (
                <Card title={'Contact and Support'}>
                    <div className={'flex w-full  items-start mt-10'}>
                        <div className={'flex flex-col flex-1 gap-10'}>
                            <div className={'flex flex-col gap-5 '}>
                                <RoundedIcon icon={<PhoneIcon className={'text-white h-6 w-6'}/>} title={'Call Us'}/>
                                <div className={'flex flex-col gap-2'}>
                                    <p>We are available 24/7, 7 Days a week</p>
                                    <p>Phone: +8801532323</p>
                                </div>

                            </div>
                            <div className={'flex flex-col gap-5 '}>
                                <RoundedIcon icon={<EnvelopeIcon className={'text-white h-6 w-6'}/>}
                                             title={'Write to Us'}/>
                                <div className={'flex flex-col gap-2'}>
                                    <p>Emails : customer.exclusive@gmail.com</p>
                                    <p>Fax : 12321312321</p>
                                </div>

                            </div>
                        </div>
                        <div className={'flex flex-col gap-5 border-l border-gray-200 pl-20 w-full flex-1'}>
                            <h1 className={'text-base mb-5'}>Fill out out form and <br/> we will contact you within
                                <span className={'font-bold'}> 24 hours </span>.</h1>
                            <div className={'flex gap-5'}>
                                <Input label={'Your Name'} placeholder={''} type={'text'}/>
                                <Input label={'Your Email'} placeholder={''} type={'text'}/>
                                <Input label={'Your Phone'} placeholder={''} type={'text'}/>
                            </div>
                            <div className={'flex flex-col gap-5'}>
                                <Textarea  label={'Your Message'}/>
                                <div className={'flex justify-end'}>
                                    <Button onClick={() => {}} buttonType={'Primary'} size={'md'}>Send Message</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Card>
    );
};

export default ContactUsPage;