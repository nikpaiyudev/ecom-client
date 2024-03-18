import Input from "@/components/Input";
import React from "react";
import Card from "@/components/Cards/Card";



const CheckoutShippingForm = () => {

    return (
        <Card title={'Shipping Address'}>
            <div className={'flex flex-col gap-10 w-full flex-1'}>
                <form className={'flex flex-1 flex-col w-full gap-5'}>
                    <Input className={'flex-1'} label={'First Name'} placeholder={''} type={'text'}/>
                    <Input className={'flex-1'} label={'Last Name'} placeholder={''} type={'text'}/>
                    <Input label={'Company'} placeholder={''} type={'text'}/>
                    <Input label={'Address'} placeholder={''} type={'text'}/>
                    <Input label={'Apartment , suite , etc'} placeholder={''} type={'text'}/>
                    <div className={'flex gap-5'}>
                        <Input label={'Country'} placeholder={''} type={'text'}/>
                        <Input label={'State'} placeholder={''} type={'text'}/>
                    </div>
                    <div className={'flex gap-5'}>
                        <Input label={'City'} placeholder={''} type={'text'}/>
                        <Input label={'Pin Code'} placeholder={''} type={'text'}/>
                    </div>
                </form>
            </div>
        </Card>

    );
};

export default CheckoutShippingForm;