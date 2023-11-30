'use client'
import { useState } from 'react';

const Testimonials = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleTestimonialsToggle = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };

    const responses = [
        {
            "name": "JSman225",
            "occupation": "Web Designer & Developer",
            "avatar_url": "assets/profiles/jsman225.png",
            "content": "I joined ROTL and almost instantly fell in love with the super supportive and helpful community, and how easy they made it for me to improve my RO track laying."
        },
        {
            "name": "Super",
            "occupation": "RO Server Manager Developer",
            "avatar_url": "assets/profiles/super.png",
            "content": "It's difficult to sum up all of the amazing moments I've had with the ROTL community throughout my time building their app and playing on the server. All of the members are kind, helpful, and really fun to play with. Kist_This has done a great job building a supporting community that is willing to help each other out with track building and running trains."
        },
        {
            "name": "Kist_This",
            "occupation": "RO Track Laying Founder 😎",
            "avatar_url": "assets/profiles/kist_this.webp",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    function splitArrayIntoThree(arr) {
        const result = {
            array1: [],
            array2: [],
            array3: []
        };

        for (let i = 0; i < arr.length; i++) {
            if (i % 3 === 0) {
                result.array1.push(arr[i]);
            } else if (i % 3 === 1) {
                result.array2.push(arr[i]);
            } else {
                result.array3.push(arr[i]);
            }
        }

        return result;
    }
    const content = splitArrayIntoThree(responses);
    return (
        <>
            <div
                id="testimonials"
                className={`grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden ${isExpanded ? 'max-h-[33rem]' : ''}`}>
                <ul className="space-y-8">
                    {content.array1.map((response) => (
                        <li key={response.id} className="text-sm leading-6">
                            <figure
                                className="relative flex flex-col-reverse bg-[#2D2D2D] rounded-lg p-6 hover:ring-2 ring-gray-300/10 ring-inset">
                                <blockquote className="mt-6 text-slate-300">
                                    <p>“{response.content}”</p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4"><img src={response.avatar_url} alt=""
                                    className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                                    <div className="flex-auto">
                                        <div className="text-base font-semibold text-slate-300">
                                            {response.name}
                                        </div>
                                        <div className="mt-0.5">
                                            {response.occupation}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>

                <ul className="space-y-8 hidden sm:block">
                    {content.array2.map((response) => (
                        <li key={response.id} className="text-sm leading-6">
                            <figure
                                className="relative flex flex-col-reverse bg-[#2D2D2D] rounded-lg p-6 hover:ring-2 ring-gray-300/10 ring-inset">
                                <blockquote className="mt-6 text-slate-300">
                                    <p>“{response.content}”</p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4"><img src={response.avatar_url} alt=""
                                    className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                                    <div className="flex-auto">
                                        <div className="text-base font-semibold text-slate-300">
                                            {response.name}
                                        </div>
                                        <div className="mt-0.5">
                                            {response.occupation}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>

                <ul className="space-y-8 hidden lg:block">
                    {content.array3.map((response) => (
                        <li key={response.id} className="text-sm leading-6">
                            <figure
                                className="relative flex flex-col-reverse bg-[#2D2D2D] rounded-lg p-6 hover:ring-2 ring-gray-300/10 ring-inset">
                                <blockquote className="mt-6 text-slate-300">
                                    <p>“{response.content}”</p>
                                </blockquote>
                                <figcaption className="flex items-center space-x-4"><img src={response.avatar_url} alt=""
                                    className="flex-none w-14 h-14 rounded-full object-cover" loading="lazy" decoding="async" />
                                    <div className="flex-auto">
                                        <div className="text-base font-semibold text-slate-300">
                                            {response.name}
                                        </div>
                                        <div className="mt-0.5">
                                            {response.occupation}
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                id="testimonials-background"
                className={`inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[#111111] pt-32 pb-8 absolute ${isExpanded
                    ? 'sticky'
                    : 'absolute -mt-52 transition-opacity duration-300 opacity-100'
                    }`}
            >
                <button
                    onClick={handleTestimonialsToggle}
                    style={{ boxShadow: '0px 15px 25px 8px #000' }}
                    type="button"
                    className="relative bg-[#111111] shadow-large text-sm text-white font-semibold h-12 px-8 rounded-lg flex items-center pointer-events-auto"
                >
                    {isExpanded ? "Okay, I'm convinced." : 'Show more...'}
                </button>
            </div>
        </>
    );
};

export default Testimonials;