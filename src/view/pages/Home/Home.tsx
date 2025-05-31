import cr80 from '../../../assets/products/cr-80-sq-5-150x150.png';
import cr120 from '../../../assets/products/cr-120-sin-4-150x150.png'
import cr160 from '../../../assets/products/cr-160-sq-4-150x150.png'

export function Home() {
    return (
        <div className="py-6 px-4">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-36 h-auto p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-center">
                    <img className="h-24 w-24 mx-auto mb-2" src={cr80} alt="CR 80 Square Ruled"/>

                    <h3 className="text-green-600 text-xs font-medium">CR 80 Square Ruled</h3>

                    <div className="bg-yellow-300 inline-block px-2 py-[2px] mt-1 rounded-md">
                        <h3 className="text-xs font-semibold">
                            200 <small className="text-[9px]">LKR</small>
                        </h3>
                    </div>

                    <button
                        className="w-full mt-3 py-1 bg-green-700 hover:bg-green-800 text-white text-[10px] rounded-md transition duration-200">
                        Add to Cart
                    </button>
                </div>

                <div className="w-36 h-auto p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-center">
                    <img className="h-24 w-24 mx-auto mb-2" src={cr120} alt="CR 120 Single Ruled"/>

                    <h3 className="text-green-600 text-xs font-medium">CR 120 Single Ruled</h3>

                    <div className="bg-yellow-300 inline-block px-2 py-[2px] mt-1 rounded-md">
                        <h3 className="text-xs font-semibold">
                            200 <small className="text-[9px]">LKR</small>
                        </h3>
                    </div>

                    <button
                        className="w-full mt-3 py-1 bg-green-700 hover:bg-green-800 text-white text-[10px] rounded-md transition duration-200">
                        Add to Cart
                    </button>
                </div>

                <div className="w-36 h-auto p-2 border border-gray-300 rounded-lg shadow-sm bg-white text-center">
                    <img className="h-24 w-24 mx-auto mb-2" src={cr160} alt="CR 160 Square Ruled"/>

                    <h3 className="text-green-600 text-xs font-medium">CR 160 Square Ruled</h3>

                    <div className="bg-yellow-300 inline-block px-2 py-[2px] mt-1 rounded-md">
                        <h3 className="text-xs font-semibold">
                            200 <small className="text-[9px]">LKR</small>
                        </h3>
                    </div>

                    <button
                        className="w-full mt-3 py-1 bg-green-700 hover:bg-green-800 text-white text-[10px] rounded-md transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
