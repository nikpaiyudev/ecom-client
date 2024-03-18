import Card from "@/components/Cards/Card";

const CheckoutOrderSummary = () => {

    const liClass = 'flex justify-between items-center'

    return (
        <Card title={'Order Summary'}>
            <ul className={'flex flex-col gap-2'}>
                <li className={liClass}>
                    <span>Subtotal</span>
                    <span>$22000.0</span>
                </li>
                <li className={liClass}>
                    <span>Delivery</span>
                    <span>$22000.0</span>
                </li>
                <li className={liClass}>
                    <span>Taxes</span>
                    <span>$22000.0</span>
                </li>
                <li className={`${liClass} border-t pt-5`}>
                    <span className={'font-bold text-black'}>Total</span>
                    <span className={'font-bold text-black'}>$22000.0</span>
                </li>
            </ul>
        </Card>
    );
};

export default CheckoutOrderSummary;