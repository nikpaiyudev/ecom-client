"use client";

import CheckoutBillingForm from "@/components/CheckoutBillingForm";
import CheckoutProductDetails from "@/components/CheckoutProductDetails";

const CheckoutPage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl mb-10">Billing Details</h1>
            <div className="flex">
                <CheckoutBillingForm />
                <CheckoutProductDetails />
            </div>
        </div>
    );
};

export default CheckoutPage;