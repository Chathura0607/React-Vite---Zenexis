import {ModifyCart} from "../modifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: number,
//     currency: string,
//     image: string
// }

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);
    // console.log(`../../../assets/products/${data.image}`);

    const image: string = images[`../../../assets/products/${data.image}`];

    const dispatch = useDispatch<AppDispatch>();

    // const [isActive, setIsActive] = useState(false);
    const item = useSelector((state: RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.id));

    const addToCart = () => {
        dispatch(addItemToCart(data))
        // setIsActive(true);
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 hover:rotate-2">
            <div className="w-36 h-auto p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-center">
                <img className="h-24 w-24 mx-auto mb-2" src={image} alt="CR 80 Square Ruled"/>

                <h3 className="text-green-600 text-xs font-medium">{data.name}</h3>

                <div className="bg-yellow-300 inline-block px-2 py-[2px] mt-1 rounded-md">
                    <h3 className="text-xs font-semibold">{data.price}
                        <small className="text-[9px]">{data.currency}</small>
                    </h3>
                </div>
                {
                    item ? (
                        <ModifyCart data={{
                            product: data
                        }}/>
                    ) : (
                        <button
                            className="w-full mt-3 py-1 bg-green-700 hover:bg-green-800 text-white text-[10px] rounded-md transition duration-200"
                            onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}