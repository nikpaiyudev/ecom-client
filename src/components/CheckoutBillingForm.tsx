import Input from "./Input";

const CheckoutBillingForm = () => {
    return (
        <form className="flex flex-col flex-1 gap-5">
            <Input label="Email Id" placeholder="Enter Full Name" disabled value={'nikhilpops@gmail.com'} type={'text'} />
            <Input className="flex-1" label="Phone Number" placeholder="Enter Phone Number" type={'text'} />
            <hr />
            <Input label="Full Name" placeholder="Enter Full Name" type={'text'} />
            <Input label="Apartment,Floor No." placeholder="Enter Apartment No." type={'text'} />
            <Input label="Street Address" placeholder="Enter Street Address" type={'text'} />
            <div className="flex gap-3">
                <Input label="Town/City" placeholder="Enter Town/City" type={'text'} />
                <Input className="flex-1" label="Pin Code" placeholder="Enter Pin Code" type={'text'} />
            </div>
        </form>
    );
};

export default CheckoutBillingForm;