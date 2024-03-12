const CheckoutProductPrice = () => {

    return (
        <div className="flex w-full">
            <ul className="flex flex-col w-full">
                <li className="flex justify-between items-center border-b py-3">
                    <span>Subtotal</span>
                    <span>$1750</span>
                </li>
                <li className="flex justify-between items-center border-b py-3">
                    <span>Shipping:</span>
                    <span>Free</span>
                </li>
                <li className="flex justify-between items-center  py-3">
                    <span>Total:</span>
                    <span>$1750</span>
                </li>
            </ul>
        </div>
    );
};

export default CheckoutProductPrice;