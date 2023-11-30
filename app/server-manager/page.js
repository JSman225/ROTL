export default function serverManager() {
    return (
        <main className="relative">
            <section className="relative flex items-center sm:items-start flex-col">
                <img className="absolute w-full z-[-1] object-cover object-bottom h-[800px]"
                    src="/assets/server-manager-background.png" alt="" />
                    <h1
                        className="sm:ml-8 md:ml-28 mt-24 sm:mt-40 mb-10 md:text-left text-center text-white text-5xl px-3 sm:px-0 sm:text-6xl md:text-8xl leading-[%120] max-w-3xl md:w-full font-semibold"
                        style={{ textShadow: '0px 14px 16px rgb(0, 0, 0)' }}>Lorem ipsum,<br />dolor sit</h1>
                    <a href="https://discord.gg/KaVKdDnA6D"
                        className="sm:ml-28 shadow-large mt-12 flex items-center gap-7 justify-center bg-[#47E5C1] w-11/12 h-20 sm:w-[420px] sm:h-[86px] text-[#111111] rounded-2xl font-semibold text-xl sm:text-2xl">
                        Download for free
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            className="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
            </section>
            <section className="mt-32 px-2 sm:px-28 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-[#47E5C1]">Join your friends</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">RO - Server Manager</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <svg className="absolute -left-2 top-1 h-7 w-7 text-[#47E5C1]" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            Push to deploy.
                                        </dt>
                                        <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                            perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <svg className="absolute -left-2 top-1 h-7 w-7 text-[#47E5C1]" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            SSL certificates.
                                        </dt>
                                        <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                            commodo.</dd>
                                    </div>
                                </dl>
                                <a href="https://discord.gg/KaVKdDnA6D"
                                    className="mt-8 mx-auto flex items-center gap-7 justify-center bg-[#47E5C1] w-11/12 h-16 py-8 sm:w-80 text-[#111111] rounded-xl font-semibold text-xl">
                                    Download for free
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                        stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <img src="assets/serverManager.png" alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-2xl sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432"
                            height="1442" />
                    </div>
                </div>
            </section>
        </main>
    )
}

