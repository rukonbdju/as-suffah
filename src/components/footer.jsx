const Footer = () => {
    return (
        <footer className="bg-[#2D544D] text-white py-12 px-4 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-500/50 text-amber-300 rounded-full flex items-center justify-center text-xl font-bold ">
                            আস
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">আস্-সুফফাহ্ ইন্সটিটিউট</h3>
                            <p className="text-sm text-gray-300">AS-SUFFAH Institute</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        মানবিকতাকে ইসলামী শিক্ষা, গবেষণার ও দাওয়াতিক সংগঠন
                    </p>
                    <div className="flex space-x-6">
                        <span className="bg-teal-200/20 rounded-full p-1 hover:bg-teal-100/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                        </span>
                        <span className="bg-teal-200/20 rounded-full p-1 hover:bg-teal-100/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                        </span>
                        <span className="bg-teal-200/20 rounded-full p-1 hover:bg-teal-100/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillOpacity={0} d="M12 11L12 12L12 13z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"></animate><set fill="freeze" attributeName="fill-opacity" begin="0.6s" to={1}></set></path><path fill="none" stroke="currentColor" strokeDasharray={64} strokeDashoffset={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate></path></svg>
                        </span>
                    </div>

                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
                    <ul className="space-y-2">
                        <li><a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">পরিচিতি</a></li>
                        <li><a href="#objectives" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">উদ্দেশ্য ও লক্ষ্য</a></li>
                        <li><a href="#activities" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">কর্মসূমহ</a></li>
                        <li><a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">যোগাযোগ</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
                    <ul className="space-y-2">
                        <li className="text-sm text-gray-300">জাহাঙ্গীরনগর বিশ্ববিদ্যালয়</li>
                        <li className="text-sm text-gray-300">২১ নং হল মসজিদ,সাভার, ঢাকা</li>
                        <li className="text-sm text-gray-300">assuffah@gmail.com</li>
                        <li><a href="https://assuffah.org" className="text-sm text-gray-300 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">www.assuffah.org</a></li>
                    </ul>
                </div>
            </div>


            <div className="max-w-7xl mx-auto border-t border-gray-600 mt-8 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; 2025 আস্-সুফফাহ্ ইন্সটিটিউট। সর্বস্বত্ব সংরক্ষিত।</p>
                    <p className="mt-2 md:mt-0">Made with ❤️ for the Ummah</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-gray-600 mt-6 pt-6 text-center">
                <p className="text-2xl text-white font-arabic mb-4" style={{ fontFamily: 'Scheherazade New,serif' }}>
                    وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
                </p>
                <p className="text-sm text-gray-300">
                    "আমি সৃষ্টি করেছি জ্বিন ও ইনসানকে শুধু আমার ইবাদাতের জন্য।" - সূরা আয-যারিয়াত ৫২
                </p>
            </div>
        </footer>
    );
}

export default Footer;
