import ProductCard from "@/components/Cards/ProductCard";

const WishlistPage = () => {
    return (
        <section className="flex flex-col gap-16">
            <div className="flex justify-start items-center gap-4">
                <span className="text-3xl">Wishlist</span>
                <span>(4)</span>
            </div>
            <ul className="grid grid-cols-4 gap-4">
                <ProductCard isWishlistIcon={false} isDeleteIcon={true} id="1" discount={'-35%'} rate={{ discountedRate: '$200', actualRate: '$500' }} title={'Gucci'} rating={5} image={""} />
                <ProductCard isWishlistIcon={false} isDeleteIcon={true} id="1" discount={'-35%'} rate={{ discountedRate: '$233', actualRate: '$1000' }} title={'Gucci'} rating={4} image={""} />
                <ProductCard isWishlistIcon={false} isDeleteIcon={true} id="1" discount={'-35%'} rate={{ discountedRate: '$123', actualRate: '$1000' }} title={'Gucci'} rating={3} image={""} />
                <ProductCard isWishlistIcon={false} isDeleteIcon={true} id="1" discount={'-35%'} rate={{ discountedRate: '$233', actualRate: '$1000' }} title={'Gucci'} rating={2} image={""} />
            </ul>
        </section>);
};

export default WishlistPage;