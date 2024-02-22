import { ProductCardProps } from "@/components/Cards/ProductCard";

const products: ProductCardProps[] = [
    {
        id: "1",
        image: "product1.jpg",
        discount: "10%",
        title: "Product 1",
        rate: {
            discountedRate: "$90",
            actualRate: "$100"
        },
        rating: 4.5
    },
    {
        id: "2",
        image: "product2.jpg",
        discount: "20%",
        title: "Product 2",
        rate: {
            discountedRate: "$80",
            actualRate: "$100"
        },
        rating: 4.2
    },
    {
        id: "3",
        image: "product3.jpg",
        discount: "15%",
        title: "Product 3",
        rate: {
            discountedRate: "$85",
            actualRate: "$100"
        },
        rating: 4.7
    },
    {
        id: "4",
        image: "product4.jpg",
        discount: "25%",
        title: "Product 4",
        rate: {
            discountedRate: "$75",
            actualRate: "$100"
        },
        rating: 4.0
    },
    {
        id: "5",
        image: "product5.jpg",
        discount: "30%",
        title: "Product 5",
        rate: {
            discountedRate: "$70",
            actualRate: "$100"
        },
        rating: 4.9
    },
    {
        id: "6",
        image: "product6.jpg",
        discount: "5%",
        title: "Product 6",
        rate: {
            discountedRate: "$95",
            actualRate: "$100"
        },
        rating: 4.3
    },
    {
        id: "7",
        image: "product7.jpg",
        discount: "12%",
        title: "Product 7",
        rate: {
            discountedRate: "$88",
            actualRate: "$100"
        },
        rating: 4.6
    },
    {
        id: "8",
        image: "product8.jpg",
        discount: "18%",
        title: "Product 8",
        rate: {
            discountedRate: "$82",
            actualRate: "$100"
        },
        rating: 4.8
    },
    {
        id: "9",
        image: "product9.jpg",
        discount: "22%",
        title: "Product 9",
        rate: {
            discountedRate: "$78",
            actualRate: "$100"
        },
        rating: 4.1
    },
    {
        id: "10",
        image: "product10.jpg",
        discount: "8%",
        title: "Product 10",
        rate: {
            discountedRate: "$92",
            actualRate: "$100"
        },
        rating: 4.4
    }
];

export default products;