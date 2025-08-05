const Objectives = () => {
    return (
        <section id="objectives" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 font-bengali">🌱উদ্দেশ্য ও লক্ষ্য</h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-yellow-600">
                        <div className="w-16 h-16 bg-yellow-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">📖</span>
                        </div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-4 font-bengali">কুরআন শিক্ষার বিস্তার</h3>
                        <ul className="space-y-2 text-gray-600 font-bengali">
                            <li>✅হিফজ, নাযেরা, তিলাওয়াত ও তাফসির</li>
                            <li>✅তরজমা ও কুরআন অনুধাবনের দক্ষতা বৃদ্ধি</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-teal-600">
                        <div className="w-16 h-16 bg-teal-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">🌱</span>
                        </div>
                        <h3 className="text-xl font-bold text-teal-600 mb-4 font-bengali">তাযকিয়া ও তারবিয়াহ</h3>
                        <p className="text-gray-600 font-bengali">✅আত্মশুদ্ধি ও চরিত্র গঠনের জন্য ধারাবাহিক ইসলামি তারবিয়াহ প্রোগ্রাম</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-yellow-600">
                        <div className="w-16 h-16 bg-yellow-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">🕌</span>
                        </div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-4 font-bengali">সুন্নাহভিত্তিক জীবনচর্চা</h3>
                        <p className="text-gray-600 font-bengali">✅হাদীস শিক্ষা, ফিকহ ও রাসূলুল্লাহ ﷺ এর আদর্শ জীবনচর্চা</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-teal-600">
                        <div className="w-16 h-16 bg-teal-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">💬</span>
                        </div>
                        <h3 className="text-xl font-bold text-teal-600 mb-4 font-bengali">ইসলামি কাউন্সেলিং</h3>
                        <ul className="space-y-2 text-gray-600 font-bengali">
                            <li>✅মানসিক ও পারিবারিক সমস্যায় শরিয়াভিত্তিক পরামর্শ</li>
                            <li>✅ক্যারিয়ার ও শিক্ষাগত ইসলামি দৃষ্টিভঙ্গি</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-yellow-600">
                        <div className="w-16 h-16 bg-yellow-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">🤝</span>
                        </div>
                        <h3 className="text-xl font-bold text-yellow-600 mb-4 font-bengali">সামাজিক দাওয়াহ</h3>
                        <ul className="space-y-2 text-gray-600 font-bengali">
                            <li>✅ক্যাম্পাসে ইসলামি মূল্যবোধে সচেতনতা সৃষ্টি</li>
                            <li>✅সমাজসেবামূলক কার্যক্রমে অংশগ্রহণ</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 border-teal-600">
                        <div className="w-16 h-16 bg-teal-600 bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">🌐</span>
                        </div>
                        <h3 className="text-xl font-bold text-teal-600 mb-4 font-bengali">আরবি ভাষা শিক্ষা</h3>
                        <ul className="space-y-2 text-gray-600 font-bengali">
                            <li>✅মৌলিক থেকে উচ্চতর আরবি ভাষা ও সাহিত্য</li>
                            <li>✅কোরআন, হাদীস বুঝার জন্য আরবিতে দক্ষতা বৃদ্ধি</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Objectives;