const Hero = () => {
    return (
        <section className="hero-section text-white min-h-screen flex flex-col items-center justify-center p-6">

            <div className="hero-section-overlay"></div>

            <span className="corners"></span>

            <div className="z-10 text-center flex flex-col items-center relative">
                <p className="mb-4 text-lg text-yellow-200 opacity-80">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                <h1 className="text-4xl md:text-5xl font-bold">আস-সুফফাহ ইনস্টিটিউট</h1>
                <p className="mt-2 text-xl md:text-2xl text-gray-200">AS-SUFFAH Institute</p>
                <p className="mt-6 text-lg md:text-xl text-gray-300">"From the Mosque to the Mind - Illuminating Lives with Qur'an"</p>
                <p className="mt-2 text-lg md:text-xl text-yellow-100">মসজিদ থেকে মনে – কুরআনের আলোয় জীবন আলোকিত করা</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300">
                        আমাদের সাথে যোগ দিন
                    </button>
                    <button className="border-2 border-yellow-400 text-yellow-400 font-bold py-2 px-8 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300">
                        আরও জানুন
                    </button>
                </div>
            </div>

            <div className="mt-16 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center text-gray-200">
                        <div className="p-3 rounded-full bg-white/10 mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl">কুরআন শিক্ষা</h3>
                        <p className="text-sm text-gray-400">বিশুদ্ধ, সহজ ও আকর্ষণীয়</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-200">
                        <div className="p-3 rounded-full bg-white/10 mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl">তাযকিয়া</h3>
                        <p className="text-sm text-gray-400">আত্মশুদ্ধি ও চরিত্র গঠন</p>
                    </div>
                    <div className="flex flex-col items-center text-gray-200">
                        <div className="p-3 rounded-full bg-white/10 mb-3">

                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3 className="font-bold text-xl">দাওয়াহ</h3>
                        <p className="text-sm text-gray-400">সামগ্রিক জীবনব্যবস্থা</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;