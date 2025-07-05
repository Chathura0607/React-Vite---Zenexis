import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";

interface ModifyCartProps {
    data: any
}

export function ModifyCart({data}: ModifyCartProps) {
    const dipatch = useDispatch<AppDispatch>();

     // const [itemCount, setItemCount] = useState(1);

    /*    useEffect(() => {
            const existingItem = itemsList.find(item => item.product.id === data.product.id);

            if (existingItem) {
                existingItem.itemCount = itemCount;
            } else {
                itemsList.push({
                    product: data.product,
                    itemCount: itemCount
                });
            }
            console.log("itemsList", itemsList);

        }, [itemCount, data]);*/
    const item = useSelector((state: RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.product.id));

    const decreaseItemCount = () => {
        // alert('Minus button clicked');
        /*setItemCount(prevValue => prevValue > 1 ? prevValue - 1 : (alert("Item count cannot be less than 1"), prevValue));*/
        if (item && item.itemCount > 1) {
            // setItemCount((prev) => prev - 1);
            dipatch(decreaseQuantity(data.product.id));
        } else {
            alert("Item Count can't be less than 1")
        }
    }

    const increaseItemCount = () => {
        // alert('Plus button clicked');
        // setItemCount(prev => prev + 1);
        dipatch(increaseQuantity(data.product.id))
    }

    return (
        <div className="w-full mt-1 p-[6px] text-[12px] text-center">
            <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={decreaseItemCount}>-
            </button>
            <small className="text-[12px]">{item?.itemCount}</small>
            <button className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={increaseItemCount}>+
            </button>
        </div>
    );
}