export default function Certi() {
    return (
        <div className="mt-10 pb-10 relative z-20 text-center"> {/* Added pb-16 for bottom spacing */}
            <h2 className="text-3xl font-bold text-red-500 mb-4">Our Certificates</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/certificates/GPCB.png" 
                        alt="Pollution Control Certificate"
                        className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%] border-4 border-gray-400 rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/certificates/ISO.png" 
                        alt="ISO Certificate"
                        className="w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%] border-4 border-gray-400 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
