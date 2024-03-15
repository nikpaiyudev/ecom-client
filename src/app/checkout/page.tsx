"use client";

import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutProductDetails from "@/components/Checkout/CheckoutProductDetails";
import CheckoutDelivery from "@/components/Checkout/CheckoutDelivery";
import CheckoutContact from "@/components/Checkout/CheckoutContact";

const CheckoutPage = () => {
    return (
        <section className="flex flex-col ">
            <h1 className={'text-3xl text-bold mb-10'}>Checkout</h1>
            <div className={'flex gap-20'}>
                <div className={'flex flex-1 flex-col gap-5'}>
                    <CheckoutContact/>
                    <CheckoutForm/>
                    <CheckoutDelivery/>
                </div>
                <div className={'flex-1'}>
                    <CheckoutProductDetails/>
                </div>
            </div>

        </section>
    );
};

export default CheckoutPage;