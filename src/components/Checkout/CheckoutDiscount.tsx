import Card from "@/components/Cards/Card";
import Input from "@/components/Input";
import Button from "@/components/Buttons/Button";

const CheckoutDiscount = () => {

    return (
      <Card title={'Discount Code'}>
              <Input label={'Discount Code'} placeholder={'discount code'} type={'text'} />
              <Button variant={'outlined'} size={'sm'} className={'mt-5'}><>Apply Discount Code</></Button>
      </Card>
    );
};

export default CheckoutDiscount;