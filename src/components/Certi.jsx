export default function Certi() {
    return (
        <div className="mt-10 pb-10 relative z-20 text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-10">Our Certificates</h2>

            <div className="flex flex-col gap-12 md:gap-8 lg:gap-10">
                {/* Certificate 1 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Heading Section */}
                    <div className="text-center md:text-right md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            Pollution Control Certificate
                        </h3>
                        <div className="flex justify-center md:justify-end">
                            <div className="w-16 h-1 bg-red-500 mb-4"></div>
                        </div>
                        <p className="text-lg text-gray-600 lg:ml-4">
                            Certified by GPCB for maintaining eco-friendly and pollution-free operations.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-2/3 flex justify-center">
                        <img
                            src="/certificates/GPCB.png"
                            alt="Pollution Control Certificate"
                            loading="lazy"
                            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-4 border-gray-400 rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Certificate 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
                    {/* Heading Section */}
                    <div className="text-center md:text-left md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            ISO 9001:2015 Certificate
                        </h3>
                        <div className="flex justify-center md:justify-start">
                            <div className="w-16 h-1 bg-red-500 mb-4"></div>
                        </div>
                        <p className="text-lg text-gray-600 lg:mr-4">
                            Recognized for excellence in quality management and manufacturing standards.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-2/3 flex justify-center">
                        <img
                            src="/certificates/ISO.png"
                            alt="ISO Certificate"
                            loading="lazy"
                            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg border-4 border-gray-400 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}