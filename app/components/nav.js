'use client'

import { useState } from 'react'

export default function Nav() {
  const [visibility, setVisibility] = useState(false)
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-3">
            <span className="sr-only">RO Track Laying</span>
            <img className="h-16 w-auto" src="assets/logo.png" alt="" />
          </a>
        </div>
        <div className="hidden sm:flex sm:justify-center">
          <a className="hover:shadow-md shadow-sm group -my-2 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-950 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex lg:hidden xl:flex"
            href="https://discord.gg/KaVKdDnA6D">
            <svg className="h-4 w-4 fill-sky-500" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
            <span className="font-semibold">See for yourself</span>
            <svg width="2" height="2" aria-hidden="true"
              className="fill-slate-900">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <span className="font-medium">
              <span className="md:hidden">Join hundreds</span>
              <span
              className="hidden md:inline">Join hundreds who've already discorverd Track Laying</span>
              </span>
              <svg
                viewBox="0 0 5 8" className="h-2 w-[5px] fill-black/30 group-hover:fill-black/60" fillRule="evenodd"
                clipRule="evenodd" aria-hidden="true">
              <path
                d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z">
              </path>
            </svg></a>

        </div>
        <div className="flex lg:hidden">
          <button onClick={() => setVisibility(!visibility)} type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:flex-1 lg:justify-end">
          <a href="/about-us" className="text-md font-semibold leading-6 text-gray-900">About Us</a>
          <a href="/community" className="text-md font-semibold leading-6 text-gray-900">Community</a>
        </div>
      </nav>
      <div id="mobileMenu" className={`lg:hidden ${visibility ? '' : 'hidden'}`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">RO Track Laying</span>
              <img className="h-16 w-auto" src="assets/logo.png" alt="" />
            </a>
            <button onClick={() => setVisibility(!visibility)} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-12 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-6 py-6 relative w-full h-96">
                <a href="/"
                  className="flex w-full items-center justify-between rounded-lg px-6 py-4 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-6 h-6 flex-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
                <a href="commmunity"
                  className="flex w-full items-center justify-between rounded-lg px-6 py-4 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Community
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-6 h-6 flex-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
                <a href="about-us"
                  className="flex w-full items-center justify-between rounded-lg px-6 py-4 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  About Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-6 h-6 flex-none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
                <a href="https://discord.gg/KaVKdDnA6D"
                  className="absolute bottom-0 shadow-2xl mt-12 flex items-center gap-7 justify-center bg-[#3743CB] w-full h-16 text-white rounded-lg font-semibold text-xl">
                  <span className="hidden sm:block">Sorem ipsum dolor sit</span>
                  <span className="block sm:hidden">Sorem ipsum</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="34" viewBox="0 0 58 46" fill="none">
                    <path
                      d="M47.5356 6.23758C47.5208 6.20929 47.4963 6.18713 47.4664 6.17506C44.0115 4.61276 40.3655 3.49873 36.6198 2.86083C36.5858 2.85459 36.5507 2.85909 36.5194 2.87368C36.4881 2.88827 36.4623 2.91222 36.4456 2.94211C35.9491 3.83018 35.4984 4.74239 35.0953 5.67523C31.0576 5.07116 26.9506 5.07116 22.9129 5.67523C22.5071 4.74002 22.0492 3.82759 21.5413 2.94211C21.5239 2.91287 21.4979 2.88947 21.4668 2.87498C21.4357 2.86048 21.4009 2.85555 21.3669 2.86083C17.6208 3.49739 13.9747 4.61151 10.5202 6.17515C10.4906 6.1875 10.4657 6.2086 10.4488 6.23552C3.54054 16.4033 1.64811 26.3211 2.57647 36.116C2.57908 36.14 2.58656 36.1633 2.59847 36.1844C2.61038 36.2055 2.62648 36.224 2.6458 36.2388C6.66841 39.1743 11.1677 41.415 15.9518 42.8652C15.9855 42.8752 16.0215 42.8748 16.0549 42.864C16.0883 42.8532 16.1176 42.8325 16.1388 42.8049C17.1663 41.4269 18.0767 39.9678 18.8609 38.4424C18.8716 38.4215 18.8778 38.3985 18.8789 38.3751C18.88 38.3516 18.8761 38.3282 18.8674 38.3064C18.8587 38.2845 18.8453 38.2648 18.8283 38.2484C18.8113 38.232 18.7909 38.2193 18.7685 38.2112C17.3328 37.6698 15.9429 37.0172 14.6117 36.2594C14.5876 36.2454 14.5673 36.2257 14.5526 36.2021C14.538 36.1786 14.5294 36.1518 14.5278 36.1242C14.5261 36.0966 14.5314 36.069 14.5431 36.0439C14.5548 36.0188 14.5726 35.9969 14.595 35.9802C14.8743 35.7739 15.1538 35.5594 15.4205 35.3427C15.4442 35.3235 15.4728 35.3111 15.5033 35.3071C15.5337 35.3031 15.5647 35.3075 15.5927 35.3198C24.3134 39.2424 33.7548 39.2424 42.3724 35.3198C42.4004 35.3067 42.4317 35.3017 42.4626 35.3053C42.4935 35.309 42.5226 35.3213 42.5467 35.3407C42.8135 35.5573 43.0929 35.7739 43.3743 35.9802C43.3968 35.9967 43.4147 36.0185 43.4266 36.0435C43.4385 36.0685 43.444 36.096 43.4426 36.1236C43.4411 36.1512 43.4328 36.1781 43.4183 36.2017C43.4039 36.2254 43.3837 36.2452 43.3596 36.2594C42.0315 37.0235 40.6403 37.6758 39.2008 38.2092C39.1785 38.2176 39.1582 38.2305 39.1413 38.2472C39.1243 38.2638 39.1111 38.2838 39.1026 38.3058C39.094 38.3278 39.0903 38.3514 39.0916 38.3749C39.0929 38.3984 39.0993 38.4214 39.1102 38.4424C39.9075 39.9594 40.8166 41.4166 41.8302 42.8025C41.8508 42.8309 41.8799 42.8522 41.9135 42.8634C41.947 42.8747 41.9833 42.8752 42.0172 42.865C46.8098 41.4196 51.317 39.1788 55.3447 36.2388C55.3643 36.2247 55.3806 36.2067 55.3926 36.1858C55.4045 36.165 55.4118 36.1419 55.414 36.1181C56.5254 24.7941 53.5533 14.9576 47.5356 6.23758ZM20.1632 30.1519C17.5377 30.1519 15.3743 27.7772 15.3743 24.8608C15.3743 21.9444 17.4957 19.5695 20.1632 19.5695C22.8516 19.5695 24.9941 21.965 24.9521 24.8606C24.9521 27.7772 22.8306 30.1519 20.1632 30.1519ZM37.8696 30.1519C35.2441 30.1519 33.0807 27.7772 33.0807 24.8608C33.0807 21.9444 35.2021 19.5695 37.8696 19.5695C40.5581 19.5695 42.7005 21.965 42.6585 24.8606C42.6585 27.7772 40.5581 30.1519 37.8696 30.1519Z"
                      fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}