"use client";

import CheckoutForm from "@/components/Checkout/CheckoutShippingForm";
import CheckoutProductDetails from "@/components/Checkout/CheckoutProductDetails";
import CheckoutDelivery from "@/components/Checkout/CheckoutDelivery";
import CheckoutContact from "@/components/Checkout/CheckoutContact";
import CheckoutPayment from "@/components/Checkout/CheckoutPayment";
import CheckoutDiscount from "@/components/Checkout/CheckoutDiscount";
import CheckoutShippingForm from "@/components/Checkout/CheckoutShippingForm";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CheckoutOrderSummary from "@/components/Checkout/CheckoutOrderSummary";
import Button from "@/components/Buttons/Button";

const CheckoutPage = () => {
    return (
        <section className="flex flex-col ">
            <h1 className={'text-3xl text-bold mb-10'}>Checkout</h1>
            <div className={'flex gap-20'}>
                <div className={'flex flex-1 flex-col justify-between gap-5'}>
                    <CheckoutContact/>
                    <CheckoutShippingForm/>
                    <CheckoutDelivery/>
                </div>
                <div className={'flex-1 flex flex-col justify-between gap-5'}>
                    <CheckoutDiscount/>
                    <CheckoutProductDetails/>
                    <CheckoutOrderSummary/>
                    <div className={'flex w-full justify-end gap-2'}>
                        <Button size={'sm'} variant={'outlined'} onClick={() => {
                        }}>Cancel Payment</Button>
                        <PrimaryButton size={'sm'} variant={'filled'} onClick={() => {
                        }}>Proceed to Payment</PrimaryButton>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default CheckoutPage;