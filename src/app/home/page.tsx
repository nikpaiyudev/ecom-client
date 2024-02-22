import products from "@/assets/productlist";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import ProductSection from "@/components/Sections/Section";
import HeroSection from "@/components/Sections/HeroSection";

const HomePage = () => {


    return (
        <>
            <Header></Header>
            <div className="max-w-[1500px] m-auto">
                <HeroSection />
                <ProductSection title="Flash Sales" heading="Todays" isButtonRequired={true} isNextPreviousRequired={true}>
                    <ProductList productList={products} />
                </ProductSection>
                <ProductSection title="Best Selling Products" heading="This Month" isButtonRequired={false} isNextPreviousRequired={true}>
                    <ProductList productList={products} />
                </ProductSection>
            </div>
        </>
    );
};

export default HomePage;