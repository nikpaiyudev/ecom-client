import {CardBody , Card} from "@material-tailwind/react";
import Input from "@/components/Input";
import React from "react";

const CheckoutContact = () => {
    return (
        <Card placeholder={''} title={'Contact Information'} >
            <CardBody placeholder={''}>
                <h1 className={'text-black text-xl font-bold mb-10'}>Contact Information</h1>
                <div className={'flex gap-5'}>
                    <Input label={'Email Id'} placeholder={''} type={'text'}/>
                    <Input label={'Phone Number'} placeholder={''} type={'number'}/>
                </div>

            </CardBody>
        </Card>
    );
};

export default CheckoutContact;