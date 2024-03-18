import Card from "@/components/Cards/Card";
import Tabs from "@/components/Tabs";

const tabContents = [{

}];

const CheckoutPayment = () => {

    const CheckoutPaymentForm = () => {

    }


    return (
        <Card title={'Payment Details'}>
            <Tabs tabContents={[
                {
                id :  1,
                title : 'Credit Card',
                value : 'creditCard',
                content : <span>Credit Card</span>
            },
                {
                    id :  2,
                    title : 'UPI',
                    value : 'upi',
                    content : <span>UPI</span>
                }

            ]}  />
        </Card>
    );
};

export default CheckoutPayment;