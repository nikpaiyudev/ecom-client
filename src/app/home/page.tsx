import products from "@/assets/productlist";
import PhotoCard from "@/components/Cards/PhotoCard";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import FlashSaleSection from "@/components/Sections/Section";
import BestSellingSection from "@/components/Sections/Section";
import CategorySection from "@/components/Sections/Section";
import ExploreOurSection from "@/components/Sections/Section";
import NewArrivalSection from "@/components/Sections/Section";
import Service from "@/components/Service";
import { PhoneIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const HomePage = () => {

    return (
        <>
            <FlashSaleSection title="Flash Sales" heading="Todays" isButtonRequired={true} isNextPreviousRequired={true}>
                <ProductList productList={products} />
            </FlashSaleSection>
            <CategorySection title="Browse By Category" heading="Categories" isButtonRequired={false} isNextPreviousRequired={false}>
                <CategoryList />
            </CategorySection>
            <BestSellingSection title="Best Selling Products" heading="This Month" isButtonRequired={true} isNextPreviousRequired={true}>
                <ProductList productList={products} />
            </BestSellingSection>
            <ExploreOurSection title="Explore Our Products" heading="Our Products" isButtonRequired={false} isNextPreviousRequired={false}>
                <ProductList productList={products} isGrid={true} />
            </ExploreOurSection>
            <NewArrivalSection isBorderRequired={false} title="New Arrival" heading="Featured" isButtonRequired={false} isNextPreviousRequired={false}>
                <div className="flex w-full gap-5">
                    <div className="flex-1 flex w-full">
                        <PhotoCard navigationLink="" classNames="bg-[url('/img/playstation.svg')]" title="Playstation 5" description="Black and White version of the PS5 Coming out on sale" />
                    </div>
                    <div className="flex-1 flex w-full flex-col gap-5">
                        <div className="flex">
                            <PhotoCard navigationLink="" classNames="bg-[url('/img/playstation.svg')]" title="Playstation 5" description="Black and White version of the PS5 Coming out on sale" />
                        </div>
                        <div className="flex gap-5">
                            <div className="flex flex-1">
                                <PhotoCard navigationLink="" classNames="bg-[url('/img/playstation.svg')]" title="Playstation 5" description="Black and White version of the PS5 Coming out on sale" />
                            </div>
                            <div className="flex flex-1">
                                <PhotoCard navigationLink="" classNames="bg-[url('/img/playstation.svg')]" title="Playstation 5" description="Black and White version of the PS5 Coming out on sale" />
                            </div>
                        </div>
                    </div>
                </div>
            </NewArrivalSection>
            <section className="flex justify-center items-center gap-24 mb-20">
                <Service title="Free and Fast Delivery" description="Free delivery for all orders over $100" icon={<TruckIcon className="h-7 w-7 text-white" />} />
                <Service title="24/7 Customer Service" description="Free delivery for all orders over $100" icon={<PhoneIcon className="h-7 w-7 text-white" />} />
                <Service title="Money Back Guarante" description="Free delivery for all orders over $100" icon={<ShieldCheckIcon className="h-7 w-7 text-white" />} />
            </section>
        </>

    );
};

export default HomePage;