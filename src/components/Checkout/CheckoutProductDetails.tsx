import Card from "@/components/Cards/Card";


interface CheckoutProductItemProps {
    title: string;
    count : string;
    price: string;
    imgSrc: string;
}

const CheckoutProductDetails = (): JSX.Element => {

    const CheckoutProductItem = ({title,count , price , imgSrc}:CheckoutProductItemProps) => {

        return (
            <div className={'flex items-start justify-between pb-5 last:pb-0 last:pt-5 border-b last:border-none'}>
                <div className={'flex gap-5 items-start'}>
                    <img alt={''} className={'h-20 w-20 border border-gray-300 '} src={imgSrc}/>
                    <div className={'flex flex-col'}>
                        <span className={'text-base text-black font-normal'}>{title}</span>
                        <span className={'text-xs text-gray-600 font-normal'}>Count : {count}</span>
                    </div>

                </div>
                <span className={'text-base text-black'}>Rs {price}</span>
            </div>
        );
    };

    return (
        <Card title={'Product Details'}>
        <div className={'flex flex-col'}>
                    <CheckoutProductItem title={'Laptop'} count={'1'} price={'10000.0'} imgSrc={'https://media.istockphoto.com/id/479520746/photo/laptop-with-blank-screen-on-white.jpg?s=612x612&w=0&k=20&c=V5dj0ayS8He0BP4x15WR5t5NKYzWTKv7VdWvD2SAVAM='} />
                    <CheckoutProductItem title={'Phone'} count={'1'} price={'12000.0'} imgSrc={'https://img.freepik.com/free-vector/new-modern-realistic-front-view-black-iphone-mockup-isolated-white-mobile-template-vector_90220-957.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais'}/>
                </div>
        </Card>
    );
};

export default CheckoutProductDetails;