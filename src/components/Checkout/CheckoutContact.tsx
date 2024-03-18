
import Input from "@/components/Input";
import React from "react";
import Card from "@/components/Cards/Card";

const CheckoutContact = () => {
    return (
        <Card title={'Contact Information'} >
                <div className={'flex gap-5'}>
                    <Input label={'Email Id'} placeholder={''} type={'text'}/>
                    <Input label={'Phone Number'} placeholder={''} type={'number'}/>
                </div>
        </Card>
    );
};

export default CheckoutContact;