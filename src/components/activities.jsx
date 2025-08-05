const Activities = () => {
    const activities = [
        {
            title: "কুরআন ও হাদীস ক্লাস",
            description: "নিয়মিত ও সাপ্তাহিক ভিত্তিক কুরআন ও হাদীস শিক্ষার কার্যক্রম",
            emoji: "📖",
            time: "নিয়মিত/সাপ্তাহিক",
            color: "bg-teal-200",
            borderColor: "border-teal-500"
        },
        {
            title: "মসজিদকেন্দ্রিক হালকাহ",
            description: "মসজিদে নিয়মিত শিক্ষামূলক সমাবেশ ও আলোচনা সভা",
            emoji: "👥",
            time: "সাপ্তাহিক",
            color: "bg-yellow-200",
            borderColor: "border-yellow-500"
        },
        {
            title: "হিফজ ও নাযেরা কোর্স",
            description: "কুরআন মুখস্থকরণ ও শুদ্ধ তিলাওয়াত শিক্ষার কোর্স",
            emoji: "🎓",
            time: "ধারাবাহিক",
            color: "bg-purple-200",
            borderColor: "border-purple-500"
        },
        {
            title: "ইসলামী পাঠচক্র",
            description: "ইসলামী বই পাঠ ও বিতর্কের মাধ্যমে জ্ঞানার্জন",
            emoji: "📚",
            time: "মাসিক",
            color: "bg-indigo-200",
            borderColor: "border-indigo-500"
        },
        {
            title: "রমজানে ইফতার, কিয়ামুল লাইল, ইতিকাফ",
            description: "রমজান মাসে বিশেষ কার্যক্রম",
            emoji: "🌙",
            time: "রমজান মাসে",
            color: "bg-blue-200",
            borderColor: "border-blue-500"
        },
        {
            title: "প্রশ্নোত্তর ও কাউন্সেলিং বুথ",
            description: "ইসলামী প্রশ্নের সমাধান ও জীবন পরামর্শ গ্রুপ",
            emoji: "💬",
            time: "নিয়মিত",
            color: "bg-pink-200",
            borderColor: "border-pink-500"
        },
        {
            title: "ক্যাম্পাসে দাওয়াহ কার্যক্রম",
            description: "ক্যাম্পাসে ইসলামী মূল্যবোধ ও সচেতনতামূলক কার্যক্রম",
            emoji: "🎁",
            time: "বিশেষ দিনে",
            color: "bg-fuchsia-200",
            borderColor: "border-fuchsia-500"
        },
        {
            title: "আরবি ভাষা শিক্ষা ক্লাস ও কর্মশালা",
            description: "আরবি ভাষা শিক্ষার জন্য ক্লাস ও কর্মশালার আয়োজন",
            emoji: "🌍",
            time: "সাপ্তাহিক",
            color: "bg-green-200",
            borderColor: "border-green-500"
        },
        {
            title: "অমুসলিম বন্ধুদের জন্য ইসলাম পরিচিতি সেশন",
            description: "অমুসলিম বন্ধুদের জন্য ইসলামের সুন্দর পরিচয় তুলে ধরা",
            emoji: "🕌",
            time: "মাসিক",
            color: "bg-red-200",
            borderColor: "border-red-500"
        }
    ]
    return (

        <section id='activities' className="bg-green-50 py-5">
            <div className="container mx-auto p-8">
                <header className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 font-bengali">🌱 কার্যক্রমসমূহ</h2>
                            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600">আমাদের নিয়মিত ও বিশেষ কার্যক্রমগুলো যা শিক্ষার্থীদের জ্ঞান ও আধ্যাত্মিক উন্নয়নে সহায়তা করে</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className={`bg-white border-l-4 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 ${activity.borderColor}`}>
                            <div className="flex items-start">
                                <div className={`p-3 rounded-full mr-4 flex items-center justify-center ${activity.color}`}>
                                    <span className="emoji-icon">{activity.emoji}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700">{activity.title}</h3>
                                    <p className="mt-2 text-gray-500 text-sm">{activity.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 text-right">
                                <span className={`text-xs font-medium px-2.5 pt-1 rounded ${activity.color}`}>{activity.time}</span>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>

    );
}

export default Activities;