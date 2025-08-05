const Contact = () => {
    return (
        <div id="contact" className="py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 font-bengali">🌱যোগাযোগ</h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                </div>
                <p className="text-lg text-center mb-8">আমাদের সাথে যোগাযোগ করুন। ইসলামী শিক্ষার এই মহান যাত্রায় অংশগ্ৰহণ করুন।</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                    <div className="bg-[#2D544D] p-6 rounded-md shadow-md">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-3">🌍</span>
                            <h3 className="font-semibold">ঠিকানা</h3>
                        </div>
                        <p className="text-sm">
                            জাহাঙ্গীরনগর বিশ্ববিদ্যালয়,
                            <br />
                            ২১ নং হল মসজিদ,
                            <br />
                            সাভার, ঢাকা
                        </p>
                    </div>

                    <div className="bg-[#2D544D] p-6 rounded-md shadow-md">
                        <div className="flex items-center mb-4">

                            <span className="text-2xl mr-3">✉️</span>
                            <h3 className="font-semibold">ইমেইল</h3>
                        </div>
                        <p className="text-sm">
                            assuffah@gmail.com
                        </p>
                    </div>

                    <div className="bg-[#2D544D] p-6 rounded-md shadow-md">
                        <div className="flex items-center mb-4">

                            <span className="text-2xl mr-3">🌐</span>
                            <h3 className="font-semibold">ওয়েবসাইট</h3>
                        </div>
                        <p className="text-sm">
                            www.assuffah.org
                        </p>
                    </div>

                    <div className="bg-[#2D544D] p-6 rounded-md shadow-md col-span-1 lg:col-span-3">
                        <h3 className="font-semibold mb-4">আমাদের সাথে যুক্ত হোন</h3>
                        <p className="text-sm mb-4">ইসলামী শিক্ষা ও মূল্যবোধের এই মহান কাজের অংশগ্ৰহণ করুন। আপনার দান ও অংশগ্রহণের মাধ্যমে জ্ঞানের আলো ছড়ানোয় আমাদের সাথে যোগ দিন।</p>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-teal-700 font-bold py-2 px-4 rounded-full">
                            এখনই যোগদান করুন
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;