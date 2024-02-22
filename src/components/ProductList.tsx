import ProductCard, { ProductCardProps } from "./Cards/ProductCard";

interface ProductListProps {
    productList: ProductCardProps[];
}

const ProductList = ({ productList }: ProductListProps) => {

    return (
        <div className="flex gap-8 overflow-auto w-[2000px]">
            {
                productList.map(product => <ProductCard key={product.id}  {...product} />)
            }
        </div>
    );
};

export default ProductList;