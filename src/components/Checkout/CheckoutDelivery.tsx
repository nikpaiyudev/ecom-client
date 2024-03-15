import React from "react";
import {Checkbox, Card, CardBody} from "@material-tailwind/react";

const CheckoutDelivery = () => {


    return (
        <Card placeholder={'card'}>
            <CardBody placeholder={'cardBody'}>
                <div className={'flex flex-col'}>
                    <h1 className={'text-black text-xl font-bold mb-5'}>Delivery Method</h1>
                    <Checkbox className={'p-0'} placeholder={''} name={'ship'} value={''}  crossOrigin={undefined}
                              label={'Ship'}/>
                    <Checkbox placeholder={''} value={''}  name={'ship'} crossOrigin={undefined} label={'Pick Up'}/>
                </div>
            </CardBody>

        </Card>

    );
};

export default CheckoutDelivery;