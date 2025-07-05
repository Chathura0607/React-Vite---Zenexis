import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";

// type ProductData = {
//     id: number,
//     name: string,
//     price: string,
//     currency: string,
//     image: string
// };

export function Home() {
    // const [products, setProducts] = useState<ProductData[]>([])
    const dispatch = useDispatch<AppDispatch>();

    const {list} = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getAllProducts())
        // Get All Products

        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('./product-data.json');
        //         const jsonData = await response.json();
        //         // console.log(jsonData);
        //         setProducts(jsonData)
        //         console.log(products)
        //     } catch (error) {
        //         console.error('Error fetching data: ', error);
        //     }
        // }
        //
        // fetchData();
    }, []);

    return (
        <div className="py-6 px-4">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
