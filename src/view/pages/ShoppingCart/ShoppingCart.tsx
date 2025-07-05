import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

export function ShoppingCart() {

    const {items} = useSelector((state: RootState) => state.cart);

    return (
        <div className="flex justify-center items-center px-4 py-8">
            <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-green-700 text-white sticky top-0">
                        <th className="text-sm font-semibold p-3 border-b border-green-600 text-left">ID</th>
                        <th className="text-sm font-semibold p-3 border-b border-green-600 text-left">Product Name</th>
                        <th className="text-sm font-semibold p-3 border-b border-green-600 text-left">Unit Price</th>
                        <th className="text-sm font-semibold p-3 border-b border-green-600 text-left">Quantity</th>
                        <th className="text-sm font-semibold p-3 border-b border-green-600 text-left">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="p-4 text-center text-gray-600 bg-green-100">
                                No items to display!
                            </td>
                        </tr>
                    ) : (
                        items.map((item, index) => (
                            <tr
                                key={item.product.id}
                                className={`${
                                    index % 2 === 0 ? "bg-green-50" : "bg-green-100"
                                } hover:bg-green-200 transition-colors duration-200`}
                            >
                                <td className="p-3 text-sm text-gray-800">{item.product.id}</td>
                                <td className="p-3 text-sm text-gray-800">{item.product.name}</td>
                                <td className="p-3 text-sm text-gray-800">
                                    {item.product.price.toFixed(2)} {item.product.currency}
                                </td>
                                <td className="p-3 text-sm text-gray-800">{item.itemCount}</td>
                                <td className="p-3 text-sm text-gray-800 font-medium">
                                    {(item.product.price * item.itemCount).toFixed(2)} {item.product.currency}
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
