import products from "@/assets/productlist";
import PhotoCard from "@/components/Cards/PhotoCard";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import HeroSection from "@/components/Sections/HeroSection";
import FlashSaleSection from "@/components/Sections/Section";
import BestSellingSection from "@/components/Sections/Section";
import CategorySection from "@/components/Sections/Section";
import ExploreOurSection from "@/components/Sections/Section";
import NewArrivalSection from "@/components/Sections/Section";

const HomePage = () => {

    return (
        <>
            <Header></Header>
            <div className="max-w-[1500px] m-auto mt-20">
                <HeroSection />
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
                <NewArrivalSection title="New Arrival" heading="Featured" isButtonRequired={false} isNextPreviousRequired={false}>
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
            </div>
        </>

    );
};

export default HomePage;