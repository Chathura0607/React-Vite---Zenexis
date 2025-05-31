type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);
    console.log(`../../../assets/products/${data.image}`);

    let image: string = images[`../../../assets/products/${data.image}`];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <div className="w-36 h-auto p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-center">
                <img className="h-24 w-24 mx-auto mb-2" src={image} alt="CR 80 Square Ruled"/>

                <h3 className="text-green-600 text-xs font-medium">{data.name}</h3>

                <div className="bg-yellow-300 inline-block px-2 py-[2px] mt-1 rounded-md">
                    <h3 className="text-xs font-semibold">{data.price}
                        <small className="text-[9px]">{data.currency}</small>
                    </h3>
                </div>

                <button
                    className="w-full mt-3 py-1 bg-green-700 hover:bg-green-800 text-white text-[10px] rounded-md transition duration-200">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}