"use client";

import IconButton from "@/components/Buttons/IconButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { TrashIcon } from "@heroicons/react/24/outline";
import { TrashIcon as TrashSolidIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Card from "@/components/Cards/Card";

const cartHeaders = ['Action', 'Product', 'Price', 'Quantity', , 'Subtotal'];

const CartPage = () => {

    const router = useRouter();
    const tableDataclasses = 'p-4 border-b border-blue-gray-50 w-auto';
    const tableHeaderClasses = 'border-b border-blue-gray-100 bg-blue-gray-50 p-4';

    const navigateToCheckout = useCallback(() => {
        router.push('/checkout');
    }, []);

    return (
        <Card title={'Your Cart (2)'}>
            <div className="flex flex-col">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {
                            cartHeaders.map((header, index) => <th key={index}
                                                                   className={tableHeaderClasses}>{header}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={`${tableDataclasses}`}>
                            <IconButton children={<TrashIcon className="h-6 w-6"/>}
                                        hoverIcon={<TrashSolidIcon className="h-6 w-6 text-red-400"/>}/>
                        </td>
                        <td className={`${tableDataclasses}`}>LCD Monitor</td>
                        <td className={`${tableDataclasses}`}>$650</td>
                        <td className={`${tableDataclasses}`}>

                        </td>
                        <td className={`${tableDataclasses}`}>$650</td>
                    </tr>
                    <tr className="bg-gray-100 ">
                        <td className={`${tableDataclasses} font-bold`} colSpan={4}>SUB TOTAL</td>
                        <td className={`${tableDataclasses} subtotal-total font-bold`}>1200</td>
                    </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mt-10">
                    <PrimaryButton onClick={navigateToCheckout}><>Proceed To Checkout</>
                    </PrimaryButton>
                </div>
            </div>
        </Card>

    );
};

export default CartPage;