const About = () => {
    return (
        <section id="about" className="py-20 bg-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 font-bengali">🌱পরিচিতি</h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 font-bengali leading-relaxed">
                            আস-সুফফাহ ইন্সটিটিউট, জাহাঙ্গীরনগর বিশ্ববিদ্যালয় একটি ছাত্রনির্ভর, মসজিদকেন্দ্রিক ইসলামী শিক্ষা, তারবিয়াহ ও দাওয়াহভিত্তিক সংগঠন।
                        </p>
                        <p className="text-lg text-gray-700 font-bengali leading-relaxed">
                            আমাদের লক্ষ্য বিশ্ববিদ্যালয়ের মুসলিম শিক্ষার্থীদের মাঝে কুরআন ও সুন্নাহভিত্তিক একটি জ্ঞানভিত্তিক, নৈতিক ও সমাজ সচেতন প্রজন্ম গড়ে তোলা।
                        </p>
                        <div className="bg-[#2D544D] bg-opacity-10 p-6 rounded-lg border-l-4 border-yellow-500">
                            <p className="text-white font-bengali italic">
                                {` "আস-সুফফাহ" শুধু একটি সংগঠন নয়, এটি একটি চিন্তা, একটি আদর্শ – যা মুসলিম ছাত্রদের হৃদয়ে কুরআন ও সুন্নাহর আলো জ্বালাতে চায়।`}
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl shadow-2xl transform rotate-3">
                            <div className="bg-white p-6 rounded-xl transform -rotate-6 shadow-lg">
                                <h3 className="text-2xl font-bold text-green-600 mb-4 font-bengali">মূলনীতি</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="font-bengali text-gray-700">আল-ইখলাস (নিষ্ঠা)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="font-bengali text-gray-700">আল-ইলম (জ্ঞান)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="font-bengali text-gray-700">আল-আমল (কার্যকরী প্রয়োগ)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="font-bengali text-gray-700">আল-উখুয়াহ (ভ্রাতৃত্ব)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="font-bengali text-gray-700">আল-দাওয়াহ (প্রচারণা)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;