import cr80 from '../../../assets/products/cr-80-sq-5-150x150.png'

export function Home() {
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center mx-auto">
                <div className="w-28 h-32 mr-2 mb-2 flex justify-center items-center">
                    <div>
                        <img className="h-[88px] w-[88px]" src={cr80}/>
                    </div>

                    <div className="flex"></div>
                    <div>
                        <h3 className="text-[#1f9e4b] text-[12px] pl-2">CR 80 Square Ruled</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg">
                        <h3>200 <small>LKR</small></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}