import React, { useState } from 'react';
import './Events.css';
import { Link } from 'react-router-dom';

const Events = () => {
    const [activeTab, setActiveTab] = useState('All Arenas');

    const tabs = ['All Arenas', 'Technical', 'Non-Technical', 'Workshops'];

    const events = [
        {
            id: 1,
            title: 'Code Quest',
            time: '09:00 AM',
            category: 'Technical',
            description: 'An intense 6-hour competitive programming marathon. Solve complex algorithmic puzzles and rise to the top of the leaderboard.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv99SiiniKT6TgwMFP36U7eZq-KNxXha25dG3hXC8H1H_tC57ENjuaEC86iwcNd_cvXu_R-CWTpA4sxqUg_ctf14KJkCkzHAxmWh-rwZhSFHE9MlLDZ_S2H8l2SxABG8MbfBY0BCci1urbBNYsVt0da1fJLagt73NeYvv3q0o_M84ru24ZOzGGkWUddfFgetvHgbwTjBWeZt0gwmveM4rW1apGrNiJpe4B1vkGIj13O9ct3pd1Y0N846OR8DUZYjJmpLM66jN04__Q',
            delay: '0.1s'
        },
        {
            id: 2,
            title: 'Robo Wars',
            time: '11:30 AM',
            category: 'Technical',
            description: 'The ultimate battle of steel and strategy. Witness custom-built robots clash in a high-octane destruction arena for the championship title.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCZE4jc_WkybpLCWkKj8oQZOBPMqdOPl1KyiUoXytjVry1WhUwr2Dh0ln_ijn1mrV4xHSh0KVY8ZgM3HzQsdQKBDst0D-dcRt58XllCGny8lohvNCczJOjHJCsvv1pRs_I3fXjBVWiVjxvyCaVlBVuw2AqH7bIIbu40koBoY81UQ3Y-iUUDCF2hJkhcocjjLB4YpnQW7iLXrc82gO2L7gOMV-NjGLcbhJdD9g5dRJOgWQkmrN5MtQI82CdSOY7u0b9ruQYBDWTBgvp',
            location: 'Arena A-1',
            delay: '0.2s'
        },
        {
            id: 3,
            title: 'AI Conclave',
            time: '02:00 PM',
            category: 'Technical',
            description: 'A deep dive into Generative AI and LLMs. Learn from industry leaders how to build the next generation of intelligent applications.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCyw6jpkEx73KYRA_SToEvT2mzenXSrdWHxZH5Lb6ZaBEsGoZUJEz_hr6EVcKoXMPMdtqwHHXVeIf1y2AFFYvYv3UvZlHq3kHSYBLMjD7H4_yoF8FTuSDkGtNEDIT0FFcKw4RvfYLCMgj7JXTKERoFODmOFYNKARWzZYlCNHsntEL1RbS_cUvzkVU8P91_0YzyEpHOQRJk8OcfMvzMtANsJO66vFidx6zF3lDFty_THNTYOfxZGvBxLAkH1cg5oMulXa7G8ArkOetw',
            seats: '200 Seats Left',
            delay: '0.3s'
        },
        {
            id: 4,
            title: 'Design Sprint',
            time: '10:00 AM',
            category: 'Non-Technical',
            description: 'Unleash your creative potential. Solve real-world user experience problems using design thinking methodologies in a fast-paced environment.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnu6p6sPxIbHGM89QcR_wudOej3A4cevdPzSl1_IuBwFyhTS58lkTYcBZf3g0BC4FoylEGGVppYV02y3uMiaRHcOGGbrVQrsDg0V_fgfF7HQNKHDPZ0AMjfkyllMWsvsktN9vXHTmi6fgubjY2_HJfxZdiscBUDnLIL8ZWgCj29tNbRsZo1AGmUNajN2-44TFnLyAfa7EOUP1obzUS4Jb5zC0ea3E7eXN-pF5jCvdtUTCzD4hg63ZpEVjQ-mYKcZrZt3QZMVL3gCmj',
            focus: 'UI/UX Focus',
            delay: '0.4s'
        },
        {
            id: 5,
            title: 'Cyber Arena',
            time: '04:00 PM',
            category: 'Non-Technical',
            description: 'The ultimate e-sports showdown. Compete in high-stakes gaming tournaments featuring popular titles and win massive prize pools.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-uN6Qhg6zfR1lLuwxWzUAASWg4yTfP2YpM1jWX-RlbJ0fc_th4q2ZVKpq9HVy5U99McHjxiKGi1QC_h8cjLLEbL1D6lp0G86-zEWfttgpY8Fx5zuH290kbKpJgC8yz1tpZxRvbheZ9lf4RqwNYiUhUKcA3av_uqbb4a-P5SXkNpizf1DbpboK0rqzj1T65aV_T4egYVi-gKuZo-IlKbBlK2gginzvDJx0daWHJuoKI94Vkqf0kczyO9sRXWt3ShelB9hx_8Xf99MQ',
            focus: 'Console & PC',
            delay: '0.5s'
        },
        {
            id: 6,
            title: 'Venture Vault',
            time: '01:00 PM',
            category: 'Non-Technical',
            description: 'Pitch your startup idea to a panel of expert investors. This Shark Tank-style event is your ticket to funding and mentorship.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3HnS7vHePxg6ifUaDlsIlYVsPYwgZehVf9423hIZ9OVdmi_oNbnehAgZEuzlHjGgV51N0D5fdqAbqW0env8kBrHFzT4LzcHpzEKK0A5V3s2e7ogGRAnNVmBJEQu9vNyubSkNzk45N5SwrZHgjA6QAChSFxjKHbr8rv1hAfOXy5NhCDQ2OgONELpvpAjVJEWFH6lKANj86Qdurap20YwkRaKc0MaX39jp7BNYbPp6C-i-pQNS8LPlz-gz9o7bykZsq3nky5KS2B-IJ',
            focus: 'Funding Ready',
            delay: '0.6s'
        }
    ];

    const filteredEvents = activeTab === 'All Arenas' ? events : events.filter(e => e.category === activeTab);

    return (
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
            {/* Hero Section */}
            <div className="mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-accent text-xs font-bold uppercase tracking-widest">Live Experience</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                    THE FUTURE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">UNLEASHED</span>
                </h1>
                <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                    Dive into the ultimate convergence of technology and creativity. From high-stakes coding arenas to strategic business wars, TechVista 2026 is where legends are made.
                </p>
            </div>

            {/* Categories Tabs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-white/10 pb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                ? 'bg-primary text-black font-bold'
                                : 'bg-card-dark border border-white/10 text-white/70 hover:text-white'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => {
                    const isTech = event.category === 'Technical';

                    return (
                        <div key={event.id} className="tilt-card glowing-border group bg-[#181818] rounded-xl overflow-hidden border border-white/5 flex flex-col reveal-card" style={{ animationDelay: event.delay }}>
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent z-10"></div>
                                <img alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={event.image} />
                                <span className={`absolute top-4 left-4 z-20 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest ${isTech ? 'bg-primary/20 border border-primary text-primary' : 'bg-accent/20 border border-accent text-accent'
                                    }`}>
                                    {event.category}
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-2xl font-bold text-white transition-colors ${isTech ? 'group-hover:text-primary' : 'group-hover:text-accent'}`}>
                                        {event.title}
                                    </h3>
                                    <span className="text-accent font-bold">{event.time}</span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                                    {event.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2 text-white/40 text-xs">
                                        {event.id === 1 && (
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                                                <div className="w-8 h-8 rounded-full border-2 border-card-dark bg-primary flex items-center justify-center text-[10px] font-bold text-black">+42</div>
                                            </div>
                                        )}
                                        {event.location && (
                                            <>
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                {event.location}
                                            </>
                                        )}
                                        {event.seats && (
                                            <>
                                                <span className="material-symbols-outlined text-sm">group</span>
                                                {event.seats}
                                            </>
                                        )}
                                        {event.focus && !event.location && !event.seats && event.id !== 1 && (
                                            <>
                                                <span className="material-symbols-outlined text-sm">{event.id === 4 ? 'brush' : event.id === 5 ? 'videogame_asset' : 'payments'}</span>
                                                {event.focus}
                                            </>
                                        )}
                                    </div>
                                    <Link to={`/register?event=${encodeURIComponent(event.title)}`}>
                                        <button className="bg-primary text-black font-bold text-xs px-4 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(29,185,84,0.5)] transition-all btn-shine">
                                            REGISTER NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Newsletter Call to Action */}
            <div className="mt-20 border-t border-white/10 bg-[#181818] py-16 rounded-[2.5rem] px-8 md:px-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="reveal-card" style={{ animationDelay: '0.1s' }}>
                        <h2 className="text-3xl font-bold text-white mb-4">Don't miss the wave.</h2>
                        <p className="text-white/50 mb-8">Join our newsletter to receive the latest updates on schedule changes and exclusive workshop invites.</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input className="bg-[#121212] border border-white/10 rounded-lg px-4 py-3 flex-1 text-white focus:border-primary outline-none transition-colors" placeholder="your@email.com" type="email" />
                            <button className="bg-primary text-black font-bold px-6 py-3 rounded-lg transition-transform active:scale-95 whitespace-nowrap">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="flex justify-start md:justify-end gap-12 reveal-card" style={{ animationDelay: '0.2s' }}>
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold uppercase text-xs tracking-widest">Socials</span>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">Twitter</a>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">Instagram</a>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">LinkedIn</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold uppercase text-xs tracking-widest">General</span>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">FAQ</a>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">Terms</a>
                            <a className="text-white/50 hover:text-primary transition-colors text-sm" href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Events;
