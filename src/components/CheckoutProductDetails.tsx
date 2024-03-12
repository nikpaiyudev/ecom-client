import CheckoutProductPrice from "./CheckoutProductPrice";

const CheckoutProductDetails = () => {
    return (
        <>
            <div className="flex flex-col flex-1 px-40">
                <ul className="flex flex-col">
                    <li className="flex justify-between items-center">
                        <div className="flex items-center gap-5 justify-start">
                            <img src="" />
                            <span>LCD Monitor</span>
                        </div>
                        <span>$650</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="flex items-center gap-5 justify-start">
                            <img src="" />
                            <span>LCD Monitor</span>
                        </div>
                        <span>$650</span>
                    </li>
                </ul>
                <CheckoutProductPrice />
            </div>

        </>

    );
};

export default CheckoutProductDetails;