const Planning = () => {
    const plans = [
        {
            emoji: '🏛️',
            title: "আস-সুফফাহ ফাউন্ডেশন",
            color: "bg-yellow-600"
        },
        {
            emoji: '💻',
            title: "অনলাইন ইসলামি প্ল্যাটফর্ম ও কোর্স",
            color: "bg-teal-600"
        },
        {
            emoji: '🎓',
            title: "আন্তঃবিভাগ ইসলামি স্কলার তৈরি",
            color: "bg-blue-600"
        },
        {
            emoji: '📚',
            title: "ইসলামি রিসোর্স সেন্টার",
            color: "bg-teal-600"
        },
        {
            emoji: '📱',
            title: "ওয়েবসাইট ও মোবাইল অ্যাপস",
            color: "bg-indigo-600"
        },
        {
            emoji: '🎖️',
            title: "বৃত্তি ও উচ্চশিক্ষা সহায়তা",
            color: "bg-teal-600"
        }
    ]
    return (
        <section id="plans" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6 font-bengali">🌱 ভবিষ্যৎ পরিকল্পনা</h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                            <div className={`w-16 h-16 ${plan.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <span className="text-2xl">{plan.emoji}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-green-600 mb-2 font-bengali">{plan.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Planning;
