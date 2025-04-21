import { useNavigate } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden
                        dark:bg-[url('/hero-drone-farm.jpg')] bg-[url('/hero1.jpg')]">

            {/* Adaptive gradient overlay */}
            <div className="absolute inset-0 
                           bg-gradient-to-r dark:from-emerald-900/80 from-emerald-100/95 
                           to-transparent dark:to-emerald-800/30" />

            {/* Theme-aware glass container */}
            <div className="absolute inset-0 backdrop-blur-lg dark:bg-white/5 bg-white/80 
                          m-8 lg:m-16 rounded-[2.5rem]
                          border-2 dark:border-emerald-100/20 border-emerald-800/20 
                          shadow-2xl animate-float">


                {/* Main content */}
                <div className="relative h-full flex items-center justify-center px-6 py-24 lg:px-16">
                    <div className="text-center max-w-5xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-3 dark:bg-white/10 bg-emerald-100
                                     px-6 py-2 rounded-full mb-8 animate-fade-in transition-colors">
                            <Award className="w-5 h-5 dark:text-emerald-300 text-emerald-600" />
                            <span className="text-sm font-semibold dark:text-white text-emerald-900">
                                Proudly Cultivating 100+ Hectares of Tanzanian Soil
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold 
                                     dark:text-white text-emerald-900 
                                     leading-tight tracking-tighter drop-shadow-2xl">
                            Turning Passion into Progress with
                            <span className="block mt-4 
                                           bg-gradient-to-r dark:from-emerald-300 from-emerald-600 
                                           dark:to-emerald-500 to-emerald-800
                                           text-transparent bg-clip-text">
                                Hands-On Farming Innovation
                            </span>
                        </h1>

                        {/* Stats grid */}
                        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
                            {[
                                { value: '100', label: 'Hectares of Farmland' },
                                { value: '3+', label: 'Tractors & Implements in Use' },
                                { value: '5+', label: 'Seasoned Years in Agriculture' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl font-bold 
                                                  dark:text-emerald-400 text-emerald-700">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium 
                                                  dark:text-white/90 text-emerald-800">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl lg:text-2xl font-medium 
                                    dark:text-white/95 text-emerald-900 
                                    leading-relaxed max-w-3xl mx-auto">
                            I'm a farmer committed to growing sustainably, efficiently, and with heart.
                            With 100 hectares under cultivation, I’ve embraced mechanized tools to
                            boost productivity. Now, I’m opening my journey to the world —
                            seeking growth partnerships, investment opportunities, and connections
                            that can help me take my farm to the next leve.
                        </p>

                        {/* Theme-aware buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
                            <button
                                onClick={() => navigate("/solutions")}
                                className="group px-8 py-4 text-lg font-bold 
                                         dark:bg-emerald-500 bg-emerald-600
                                         dark:hover:bg-emerald-600 hover:bg-emerald-700
                                         dark:text-white text-white 
                                         rounded-2xl hover:scale-105 transition-all 
                                         duration-300 
                                         dark:shadow-lg dark:shadow-emerald-500/30
                                         shadow-lg shadow-emerald-600/30
                                         flex items-center gap-3"
                            >
                                <span>Explore Commercial Solutions</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 
                                                     transition-transform" />
                            </button>

                            <button
                                onClick={() => navigate("/contact")}
                                className="group px-8 py-4 text-lg font-bold 
                                         bg-transparent dark:text-white text-emerald-900
                                         border-2 dark:border-emerald-300 border-emerald-600
                                         rounded-2xl hover:scale-[1.02]
                                         dark:hover:bg-white/10 hover:bg-emerald-50
                                         transition-all duration-300 
                                         flex items-center gap-3"
                            >
                                <span>Get in Touch for Opportunities</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 
                                                     transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Investor section with theme adaptation */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-sm dark:text-white/80 text-emerald-700 mb-2">
                        Let’s build the future of farming — together.
                    </p>
                    <div className="flex justify-center gap-6 items-center">
                        <span className="text-2xl font-bold dark:text-emerald-300 text-emerald-600">
                            Open to Investors
                        </span>
                        <span className="text-lg dark:text-white/90 text-emerald-700">
                            Seeking Growth Partners
                        </span>
                        <span className="text-lg dark:text-emerald-400 text-emerald-600">
                            Committed to Impact
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;