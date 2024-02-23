import ProductCard, { ProductCardProps } from "./Cards/ProductCard";

interface ProductListProps {
    productList: ProductCardProps[];
    isGrid?: boolean;
}

const ProductList = ({ productList,isGrid = false }: ProductListProps) => {

    const classNames = isGrid ? 'grid grid-cols-4 w-full gap-8' : 'flex gap-8 overflow-auto w-[2000px]';

    return (
        <div className={classNames}>
            {
                productList.map(product => <ProductCard key={product.id}  {...product} />)
            }
        </div>
    );
};

export default ProductList;