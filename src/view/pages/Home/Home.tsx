import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
};

export function Home() {
    const [products, setProducts] = useState<ProductData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json');
                const jsonData = await response.json();
                // console.log(jsonData);
                setProducts(jsonData)
                console.log(products)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="py-6 px-4">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    products.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
