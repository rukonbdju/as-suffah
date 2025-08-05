'use client'

import { useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-30 shadow-md bg-[#2D544D] text-white">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-xl font-bold text-yellow-600">আস</span>
                        </div>
                        <div>
                            <h1 className="text-xs sm:text-sm font-bold md:text-md">
                                আস-সুফফাহ ইন্সটিটিউট
                            </h1>
                            <p className="text-xs">AS-SUFFAH Institute</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                            পরিচিতি
                        </a>
                        <a href="#objectives" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                            উদ্দেশ্য
                        </a>
                        <a href="#activities" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                            কার্যক্রম
                        </a>
                        <a href="#contact" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                            যোগাযোগ
                        </a>
                        <button
                            className="border-2 px-2 rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors font-semibold py-1"
                        >
                            যোগদান করুন
                        </button>
                    </nav>

                    {/* Mobile Menu button */}
                    <button
                        className="md:hidden text-primary-foreground"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? "✖️" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-6 pb-6 border-t border-primary-foreground/20">
                        <nav className="flex flex-col space-y-4 mt-6">
                            <a href="#about" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                                পরিচিতি
                            </a>
                            <a href="#objectives" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                                উদ্দেশ্য
                            </a>
                            <a href="#activities" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                                কার্যক্রম
                            </a>
                            <a href="#contact" className="text-primary-foreground hover:text-yellow-600 transition-colors">
                                যোগাযোগ
                            </a>
                            <div>

                            </div>
                            <button
                                className="border-2 px-2 rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors font-semibold py-1"
                            >
                                যোগদান করুন
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Nav;
