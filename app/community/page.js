'use client'
import { useState } from 'react';

export default function community() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleTestimonialsToggle = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <main className="relative">
            <section className="relative flex items-center flex-col">
                <img className="absolute w-full z-[-1] object-cover object-bottom h-[800px]"
                    src="/assets/community.png" alt="" />

                <div className="my-32">
                    <p className="text-center text-white text-3xl sm:text-4xl max-w-4xl w-full font-medium">
                        Welcome to our
                    </p>
                    <h1
                    style={{
                        background: 'linear-gradient(94deg, #3743CB 0.91%, #47E5C1 79.61%)',
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        textShadow: '0px 60px 60px #000',
                    }}
                     className="text-center textwhite text-6xl px-3 sm:px-0 sm:text-9xl leading-[120%] max-w-4xl w-full font-semibold">
                        Community
                    </h1>
                </div>

            </section>
            <section className="mt-32 relative max-w-7xl mx-auto px-4 sm:px-3 md:px-5">
            <p className="text-center text-white text-3xl sm:text-4xl -mt-18 mb-14 w-full font-medium">
            This could be you 👇
                    </p>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                        </div>
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden ${!isExpanded ? 'max-h-[28rem]' : ''}`}>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                                </div>
                            </div>
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[#111111] pt-8 pb-8 absolute ${isExpanded
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
                                {isExpanded ? "Woah... 🤯" : 'Show more...'}
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <section className="px-6 pt-14 sm:px-28">
                <hr />
                <div className="mt-8 flex flex-wrap flex-row items-center gap-y-8">
                    <div className="flex-1">
                        <h1 className="text-center sm:text-left lg:text-5xl sm:text-4xl text-3xl font-medium">
                            Community
                            Members
                        </h1>
                    </div>
                    <div className="flex-1 hidden md:block">
                    </div>
                    <div className="flex-1">
                        <h1 className="text-center sm:text-right lg:text-7xl sm:text-6xl text-4xl font-medium">
                            + 400
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center my-14">
                    <a className="hover:shadow-md shadow-sm group -my-2 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs text-slate-950 ring-1 ring-inset ring-black/[0.08] hover:bg-white/80 hover:ring-black/[0.13] flex xl:flex"
                        href="https://discord.gg/KaVKdDnA6D"><svg className="h-4 w-4 fill-sky-500" viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                clipRule="evenodd"></path>
                        </svg><span className="font-semibold">See for yourself</span><svg width="2" height="2" aria-hidden="true"
                            className="fill-slate-900">
                            <circle cx="1" cy="1" r="1"></circle>
                        </svg><span className="font-medium"><span className="md:hidden">Join hundreds</span><span
                            className="hidden md:inline">Join hundreds who've already discorverd Track Laying</span></span><svg
                                viewBox="0 0 5 8" className="h-2 w-[5px] fill-black/30 group-hover:fill-black/60" fillRule="evenodd"
                                clipRule="evenodd" aria-hidden="true">
                            <path
                                d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z">
                            </path>
                        </svg></a>
                </div>
            </section>
            <section className="my-28 px-6 sm:px-28 pb-16">
                <h1 className="text-center text-5xl font-semibold">Latest from</h1>
                <h1
                    style={{
                        background: 'linear-gradient(94deg, #3743CB 0.91%, #47E5C1 79.61%)',
                        WebkitTextFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        textShadow: '0px 60px 60px #000',
                    }}
                    className="text-center text-8xl mt-8 font-semibold bg-clip-text">Kist_This</h1>
                <div className="w-full h-full flex justify-center mt-16">

                    <iframe
                        src="https://www.youtube-nocookie.com/embed?listType=playlist&list=UUoE2B7DXWq319ffJBfRd7IQ"
                        allowfullscreen
                        className="rounded-3xl aspect-video w-full">
                    </iframe>
                </div>
            </section>
            <section className="px-6 my-32 flex justify-center sm:px-28">
                <div className="max-w-6xl w-full">
                    <h1 className="mx-auto text-center text-4xl sm:text-6xl font-semibold">
                        ROTL is for everyone
                    </h1>
                    <p className="mx-auto text-center text-xl text-light-gray mt-8">
                        Connect with fellow train enthusiasts from around the world and experience the excitement of playing Railroads Online together. Join our community to discuss your favorite locomotives, routes, and historical journeys with like-minded individuals who share your passion for trains and railway systems.
                    </p>
                    <a href="https://discord.gg/KaVKdDnA6D"
                        className="mx-auto shadow-large mt-32 flex items-center gap-7 justify-center bg-[#3743CB] w-11/12 h-20 sm:w-[420px] text-white rounded-2xl font-semibold text-xl">
                        <span className="hidden sm:block">Join our Community!</span>
                        <span className="block sm:hidden">Join us!</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="44" viewBox="0 0 58 46" fill="none">
                            <path
                                d="M47.5356 6.23758C47.5208 6.20929 47.4963 6.18713 47.4664 6.17506C44.0115 4.61276 40.3655 3.49873 36.6198 2.86083C36.5858 2.85459 36.5507 2.85909 36.5194 2.87368C36.4881 2.88827 36.4623 2.91222 36.4456 2.94211C35.9491 3.83018 35.4984 4.74239 35.0953 5.67523C31.0576 5.07116 26.9506 5.07116 22.9129 5.67523C22.5071 4.74002 22.0492 3.82759 21.5413 2.94211C21.5239 2.91287 21.4979 2.88947 21.4668 2.87498C21.4357 2.86048 21.4009 2.85555 21.3669 2.86083C17.6208 3.49739 13.9747 4.61151 10.5202 6.17515C10.4906 6.1875 10.4657 6.2086 10.4488 6.23552C3.54054 16.4033 1.64811 26.3211 2.57647 36.116C2.57908 36.14 2.58656 36.1633 2.59847 36.1844C2.61038 36.2055 2.62648 36.224 2.6458 36.2388C6.66841 39.1743 11.1677 41.415 15.9518 42.8652C15.9855 42.8752 16.0215 42.8748 16.0549 42.864C16.0883 42.8532 16.1176 42.8325 16.1388 42.8049C17.1663 41.4269 18.0767 39.9678 18.8609 38.4424C18.8716 38.4215 18.8778 38.3985 18.8789 38.3751C18.88 38.3516 18.8761 38.3282 18.8674 38.3064C18.8587 38.2845 18.8453 38.2648 18.8283 38.2484C18.8113 38.232 18.7909 38.2193 18.7685 38.2112C17.3328 37.6698 15.9429 37.0172 14.6117 36.2594C14.5876 36.2454 14.5673 36.2257 14.5526 36.2021C14.538 36.1786 14.5294 36.1518 14.5278 36.1242C14.5261 36.0966 14.5314 36.069 14.5431 36.0439C14.5548 36.0188 14.5726 35.9969 14.595 35.9802C14.8743 35.7739 15.1538 35.5594 15.4205 35.3427C15.4442 35.3235 15.4728 35.3111 15.5033 35.3071C15.5337 35.3031 15.5647 35.3075 15.5927 35.3198C24.3134 39.2424 33.7548 39.2424 42.3724 35.3198C42.4004 35.3067 42.4317 35.3017 42.4626 35.3053C42.4935 35.309 42.5226 35.3213 42.5467 35.3407C42.8135 35.5573 43.0929 35.7739 43.3743 35.9802C43.3968 35.9967 43.4147 36.0185 43.4266 36.0435C43.4385 36.0685 43.444 36.096 43.4426 36.1236C43.4411 36.1512 43.4328 36.1781 43.4183 36.2017C43.4039 36.2254 43.3837 36.2452 43.3596 36.2594C42.0315 37.0235 40.6403 37.6758 39.2008 38.2092C39.1785 38.2176 39.1582 38.2305 39.1413 38.2472C39.1243 38.2638 39.1111 38.2838 39.1026 38.3058C39.094 38.3278 39.0903 38.3514 39.0916 38.3749C39.0929 38.3984 39.0993 38.4214 39.1102 38.4424C39.9075 39.9594 40.8166 41.4166 41.8302 42.8025C41.8508 42.8309 41.8799 42.8522 41.9135 42.8634C41.947 42.8747 41.9833 42.8752 42.0172 42.865C46.8098 41.4196 51.317 39.1788 55.3447 36.2388C55.3643 36.2247 55.3806 36.2067 55.3926 36.1858C55.4045 36.165 55.4118 36.1419 55.414 36.1181C56.5254 24.7941 53.5533 14.9576 47.5356 6.23758ZM20.1632 30.1519C17.5377 30.1519 15.3743 27.7772 15.3743 24.8608C15.3743 21.9444 17.4957 19.5695 20.1632 19.5695C22.8516 19.5695 24.9941 21.965 24.9521 24.8606C24.9521 27.7772 22.8306 30.1519 20.1632 30.1519ZM37.8696 30.1519C35.2441 30.1519 33.0807 27.7772 33.0807 24.8608C33.0807 21.9444 35.2021 19.5695 37.8696 19.5695C40.5581 19.5695 42.7005 21.965 42.6585 24.8606C42.6585 27.7772 40.5581 30.1519 37.8696 30.1519Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </section>
        </main>
    )
}

