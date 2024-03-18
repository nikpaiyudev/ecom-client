import React from "react";
import {Checkbox} from "@material-tailwind/react";
import Card from "@/components/Cards/Card";

const CheckoutDelivery = () => {


    return (
        <Card title={'Delivery'}>
                <div className={'flex flex-col'}>
                    <Checkbox className={'p-0'} placeholder={''} name={'ship'} value={''}  crossOrigin={undefined}
                              label={'Ship'}/>
                    <Checkbox placeholder={''} value={''}  name={'ship'} crossOrigin={undefined} label={'Pick Up'}/>
                </div>
        </Card>

    );
};

export default CheckoutDelivery;