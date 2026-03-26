"use client";

export default function JoinTheTeam() {
    return (
        <section className="w-full bg-white pt-16 pb-16 md:pt-24 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 mb-6 uppercase">
                            — JOIN THE TEAM
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            Build the future <br className="hidden md:block" />
                            of{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                enterprise tech.
                            </span>
                        </h1>
                        <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
                            We&apos;re looking for curious, driven people who want to 
                            solve complex problems at enterprise scale. Join our global team 
                            and shape the next generation of digital solutions.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50">
                        <img 
                            src="/images/office_hero.png" 
                            alt="Office collaboration space" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}