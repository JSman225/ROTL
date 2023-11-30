import DiscordUsers from './components/discordUsers'
import UserCount from './components/userCount'
import Testimonials from './components/testinmonials'

export default function Home() {
  return (
    <main className="relative">
      <section className="relative flex items-center flex-col">
        <img className="absolute w-full z-[-1] object-cover object-bottom h-[800px]" src="/assets/home-background.png" />
        <h1
          className="my-20 text-center text-white text-6xl px-3 sm:px-0 sm:text-8xl leading-[120%] max-w-4xl w-full font-semibold"
          style={{ textShadow: '0px 14px 16px rgb(0, 0, 0)' }}>Railroads Online Track Laying</h1>
        <a href="https://discord.gg/KaVKdDnA6D"
          className="shadow-large mt-12 flex items-center gap-7 justify-center bg-[#3743CB] w-11/12 h-20 sm:w-[420px] sm:h-[86px] text-white rounded-2xl font-semibold text-xl sm:text-2xl">
          <span className="hidden sm:block">Join our community!</span>
          <span className="block sm:hidden">Join us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="44" viewBox="0 0 58 46" fill="none">
            <path
              d="M47.5356 6.23758C47.5208 6.20929 47.4963 6.18713 47.4664 6.17506C44.0115 4.61276 40.3655 3.49873 36.6198 2.86083C36.5858 2.85459 36.5507 2.85909 36.5194 2.87368C36.4881 2.88827 36.4623 2.91222 36.4456 2.94211C35.9491 3.83018 35.4984 4.74239 35.0953 5.67523C31.0576 5.07116 26.9506 5.07116 22.9129 5.67523C22.5071 4.74002 22.0492 3.82759 21.5413 2.94211C21.5239 2.91287 21.4979 2.88947 21.4668 2.87498C21.4357 2.86048 21.4009 2.85555 21.3669 2.86083C17.6208 3.49739 13.9747 4.61151 10.5202 6.17515C10.4906 6.1875 10.4657 6.2086 10.4488 6.23552C3.54054 16.4033 1.64811 26.3211 2.57647 36.116C2.57908 36.14 2.58656 36.1633 2.59847 36.1844C2.61038 36.2055 2.62648 36.224 2.6458 36.2388C6.66841 39.1743 11.1677 41.415 15.9518 42.8652C15.9855 42.8752 16.0215 42.8748 16.0549 42.864C16.0883 42.8532 16.1176 42.8325 16.1388 42.8049C17.1663 41.4269 18.0767 39.9678 18.8609 38.4424C18.8716 38.4215 18.8778 38.3985 18.8789 38.3751C18.88 38.3516 18.8761 38.3282 18.8674 38.3064C18.8587 38.2845 18.8453 38.2648 18.8283 38.2484C18.8113 38.232 18.7909 38.2193 18.7685 38.2112C17.3328 37.6698 15.9429 37.0172 14.6117 36.2594C14.5876 36.2454 14.5673 36.2257 14.5526 36.2021C14.538 36.1786 14.5294 36.1518 14.5278 36.1242C14.5261 36.0966 14.5314 36.069 14.5431 36.0439C14.5548 36.0188 14.5726 35.9969 14.595 35.9802C14.8743 35.7739 15.1538 35.5594 15.4205 35.3427C15.4442 35.3235 15.4728 35.3111 15.5033 35.3071C15.5337 35.3031 15.5647 35.3075 15.5927 35.3198C24.3134 39.2424 33.7548 39.2424 42.3724 35.3198C42.4004 35.3067 42.4317 35.3017 42.4626 35.3053C42.4935 35.309 42.5226 35.3213 42.5467 35.3407C42.8135 35.5573 43.0929 35.7739 43.3743 35.9802C43.3968 35.9967 43.4147 36.0185 43.4266 36.0435C43.4385 36.0685 43.444 36.096 43.4426 36.1236C43.4411 36.1512 43.4328 36.1781 43.4183 36.2017C43.4039 36.2254 43.3837 36.2452 43.3596 36.2594C42.0315 37.0235 40.6403 37.6758 39.2008 38.2092C39.1785 38.2176 39.1582 38.2305 39.1413 38.2472C39.1243 38.2638 39.1111 38.2838 39.1026 38.3058C39.094 38.3278 39.0903 38.3514 39.0916 38.3749C39.0929 38.3984 39.0993 38.4214 39.1102 38.4424C39.9075 39.9594 40.8166 41.4166 41.8302 42.8025C41.8508 42.8309 41.8799 42.8522 41.9135 42.8634C41.947 42.8747 41.9833 42.8752 42.0172 42.865C46.8098 41.4196 51.317 39.1788 55.3447 36.2388C55.3643 36.2247 55.3806 36.2067 55.3926 36.1858C55.4045 36.165 55.4118 36.1419 55.414 36.1181C56.5254 24.7941 53.5533 14.9576 47.5356 6.23758ZM20.1632 30.1519C17.5377 30.1519 15.3743 27.7772 15.3743 24.8608C15.3743 21.9444 17.4957 19.5695 20.1632 19.5695C22.8516 19.5695 24.9941 21.965 24.9521 24.8606C24.9521 27.7772 22.8306 30.1519 20.1632 30.1519ZM37.8696 30.1519C35.2441 30.1519 33.0807 27.7772 33.0807 24.8608C33.0807 21.9444 35.2021 19.5695 37.8696 19.5695C40.5581 19.5695 42.7005 21.965 42.6585 24.8606C42.6585 27.7772 40.5581 30.1519 37.8696 30.1519Z"
              fill="white" />
          </svg>
        </a>
      </section>

      <section className="mt-48 px-6 sm:px-28">
        <h1 className="mx-auto text-center text-4xl sm:text-5xl font-semibold">
          Torem sit ipsum dolor
        </h1>
        <p className="mx-auto text-center text-xl text-light-gray mt-8">
          Lorem ipsum dolor sit amet adipisicing possimus.
        </p>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-2 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-light-gray">Members online <b>right now!</b></dt>
                <UserCount />
                
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-light-gray">Total community members</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white/90 sm:text-5xl">+ 340</dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-light-gray">New users annually</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white/90 sm:text-5xl">46,000</dd>
              </div>
            </dl>
            <br></br>
            <br></br>
            <DiscordUsers />
          </div>
        </div>
      </section>
      <section className="sm:mt-4 px-6 sm:px-28 max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold">
          Torem sit ipsum dolor
        </h1>
        <p className="text-xl text-light-gray mt-8 max-w-2xl w-full">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis.
        </p>
        <div className="py-20">
          <div className="mx-auto w-full">
            <dl className="flex flex-wrap gap-8 justify-center sm:justify-start">

              <div className="flex w-72 h-96 flex-col gap-y-4 bg-[#2D2D2D] rounded-2xl shadow-large">
                <div className="px-[28px] py-[38px]">
                  <div className="w-20 h-20 bg-[#D1D5DB] rounded-full shadow-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="39" viewBox="0 0 44 39" fill="none">
                      <path
                        d="M41.9875 9.45163C41.5077 7.65017 40.0941 6.23139 38.2991 5.74991C35.0457 4.875 22 4.875 22 4.875C22 4.875 8.95428 4.875 5.7008 5.74991C3.90589 6.23147 2.49223 7.65017 2.01244 9.45163C1.14069 12.7169 1.14069 19.5296 1.14069 19.5296C1.14069 19.5296 1.14069 26.3422 2.01244 29.6075C2.49223 31.4089 3.90589 32.7686 5.7008 33.2501C8.95428 34.125 22 34.125 22 34.125C22 34.125 35.0457 34.125 38.2991 33.2501C40.0941 32.7686 41.5077 31.4089 41.9875 29.6075C42.8593 26.3422 42.8593 19.5296 42.8593 19.5296C42.8593 19.5296 42.8593 12.7169 41.9875 9.45163ZM17.7333 25.7149V13.3442L28.6369 19.5297L17.7333 25.7149Z"
                        fill="#111111" />
                    </svg>
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold text-left">Kist_This Gaming</h1>
                  <p className="font-normal mt-3 text-sm text-[#D1D5DB] text-left">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                  </p>
                  <div className="bg-[#FF0000] w-full h-[52px] rounded-lg mt-5 shadow-button">
                    <a className="flex flex-row gap-4 text-[14px] leading-[120%] justify-center items-center h-full w-full"
                      href="#">
                      Sorem ipsum dolor
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" viewBox="0 0 33 30" fill="none">
                        <path
                          d="M31.4906 7.08873C31.1308 5.73763 30.0706 4.67354 28.7244 4.31243C26.2843 3.65625 16.5 3.65625 16.5 3.65625C16.5 3.65625 6.71572 3.65625 4.27561 4.31243C2.92943 4.6736 1.86919 5.73763 1.50934 7.08873C0.85553 9.53767 0.85553 14.6472 0.85553 14.6472C0.85553 14.6472 0.85553 19.7567 1.50934 22.2056C1.86919 23.5567 2.92943 24.5765 4.27561 24.9376C6.71572 25.5938 16.5 25.5938 16.5 25.5938C16.5 25.5938 26.2843 25.5938 28.7244 24.9376C30.0706 24.5765 31.1308 23.5567 31.4906 22.2056C32.1445 19.7567 32.1445 14.6472 32.1445 14.6472C32.1445 14.6472 32.1445 9.53767 31.4906 7.08873ZM13.3 19.2862V10.0081L21.4777 14.6473L13.3 19.2862Z"
                          fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex w-72 h-96 flex-col gap-y-4 bg-[#2D2D2D] rounded-2xl shadow-large">
                <div className="px-[28px] py-[38px]">
                  <div className="w-20 h-20 bg-[#D1D5DB] rounded-full shadow-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 50 39" fill="none">
                      <path
                        d="M40.5392 5.31958C40.5266 5.29546 40.5056 5.27656 40.4802 5.26626C37.5338 3.93391 34.4244 2.98384 31.23 2.43983C31.201 2.43451 31.171 2.43835 31.1444 2.45079C31.1177 2.46324 31.0956 2.48366 31.0814 2.50915C30.658 3.26652 30.2737 4.04446 29.9298 4.84001C26.4865 4.32484 22.9839 4.32484 19.5405 4.84001C19.1944 4.04244 18.8039 3.2643 18.3708 2.50915C18.3559 2.48421 18.3338 2.46426 18.3073 2.4519C18.2808 2.43953 18.2511 2.43533 18.2221 2.43983C15.0274 2.9827 11.9178 3.93284 8.97181 5.26634C8.94659 5.27688 8.92531 5.29487 8.91091 5.31783C3.01943 13.9891 1.40553 22.4471 2.19726 30.8004C2.19948 30.8209 2.20587 30.8407 2.21602 30.8587C2.22618 30.8767 2.2399 30.8925 2.25638 30.9052C5.68693 33.4086 9.52405 35.3195 13.604 36.5563C13.6327 36.5648 13.6634 36.5644 13.6919 36.5552C13.7204 36.546 13.7454 36.5284 13.7634 36.5048C14.6397 35.3297 15.4162 34.0853 16.0849 32.7844C16.0941 32.7666 16.0993 32.747 16.1003 32.727C16.1012 32.707 16.0979 32.687 16.0904 32.6684C16.083 32.6498 16.0716 32.6329 16.0571 32.6189C16.0426 32.605 16.0252 32.5942 16.0061 32.5873C14.7817 32.1256 13.5964 31.569 12.4611 30.9227C12.4405 30.9108 12.4232 30.894 12.4107 30.8739C12.3982 30.8538 12.391 30.8309 12.3895 30.8074C12.3881 30.7839 12.3926 30.7604 12.4026 30.7389C12.4126 30.7175 12.4278 30.6989 12.4468 30.6846C12.685 30.5087 12.9234 30.3257 13.1509 30.141C13.1711 30.1245 13.1955 30.114 13.2215 30.1106C13.2474 30.1071 13.2738 30.1109 13.2977 30.1215C20.7349 33.4667 28.7867 33.4667 36.1359 30.1215C36.1598 30.1102 36.1865 30.1059 36.2128 30.1091C36.2392 30.1122 36.264 30.1227 36.2846 30.1392C36.5121 30.324 36.7504 30.5087 36.9904 30.6846C37.0095 30.6987 37.0248 30.7173 37.035 30.7386C37.0451 30.7599 37.0498 30.7834 37.0486 30.8069C37.0473 30.8305 37.0402 30.8533 37.0279 30.8735C37.0156 30.8937 36.9984 30.9106 36.9778 30.9227C35.8452 31.5744 34.6588 32.1306 33.4312 32.5855C33.4121 32.5927 33.3948 32.6037 33.3803 32.6179C33.3659 32.6321 33.3547 32.6492 33.3474 32.6679C33.3401 32.6867 33.3369 32.7068 33.338 32.7269C33.3391 32.7469 33.3445 32.7665 33.3539 32.7844C34.0338 34.0781 34.8091 35.3209 35.6736 36.5028C35.6911 36.527 35.7159 36.5452 35.7446 36.5548C35.7732 36.5643 35.8041 36.5648 35.833 36.5561C39.9202 35.3235 43.7641 33.4124 47.1989 30.9052C47.2156 30.8932 47.2296 30.8777 47.2398 30.86C47.25 30.8422 47.2562 30.8225 47.258 30.8022C48.2059 21.1449 45.6712 12.7562 40.5392 5.31958ZM17.1956 25.7141C14.9564 25.7141 13.1114 23.689 13.1114 21.2018C13.1114 18.7146 14.9206 16.6893 17.1956 16.6893C19.4883 16.6893 21.3154 18.7322 21.2796 21.2016C21.2796 23.689 19.4703 25.7141 17.1956 25.7141ZM32.2958 25.7141C30.0568 25.7141 28.2118 23.689 28.2118 21.2018C28.2118 18.7146 30.021 16.6893 32.2958 16.6893C34.5887 16.6893 36.4157 18.7322 36.38 21.2016C36.38 23.689 34.5887 25.7141 32.2958 25.7141Z"
                        fill="#111111" />
                    </svg>
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold text-left">ROTL Discord Server</h1>
                  <p className="font-normal mt-3 text-sm text-[#D1D5DB] text-left">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                  </p>
                  <div className="bg-[#3743CB] w-full h-[52px] rounded-lg mt-5 shadow-button">
                    <a className="flex flex-row gap-4 text-[14px] leading-[120%] justify-center items-center h-full w-full"
                      href="#">
                      Sorem ipsum dolor
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path
                          d="M27.0461 3.54903C27.0377 3.53294 27.0237 3.52033 27.0067 3.51346C25.041 2.62457 22.9666 1.99072 20.8354 1.62778C20.8161 1.62423 20.7961 1.62679 20.7783 1.63509C20.7605 1.64339 20.7458 1.65701 20.7363 1.67402C20.4538 2.17931 20.1974 2.69832 19.968 3.22908C17.6707 2.88538 15.3339 2.88538 13.0367 3.22908C12.8057 2.69697 12.5452 2.17783 12.2563 1.67402C12.2463 1.65738 12.2316 1.64408 12.2139 1.63583C12.1962 1.62758 12.1764 1.62477 12.1571 1.62778C10.0257 1.98996 7.95111 2.62385 5.98564 3.51351C5.96881 3.52054 5.95462 3.53254 5.94501 3.54786C2.01445 9.33298 0.937721 14.9758 1.46593 20.5488C1.46741 20.5625 1.47167 20.5757 1.47845 20.5877C1.48522 20.5997 1.49438 20.6103 1.50537 20.6187C3.7941 22.2889 6.35407 23.5638 9.07604 24.3889C9.09521 24.3946 9.11567 24.3943 9.13469 24.3882C9.15371 24.382 9.17036 24.3703 9.18241 24.3546C9.76703 23.5706 10.285 22.7404 10.7312 21.8725C10.7373 21.8606 10.7408 21.8475 10.7415 21.8342C10.7421 21.8208 10.7399 21.8075 10.7349 21.7951C10.7299 21.7826 10.7224 21.7714 10.7127 21.7621C10.703 21.7527 10.6914 21.7455 10.6787 21.7409C9.86178 21.4329 9.07095 21.0616 8.31358 20.6304C8.29982 20.6224 8.28827 20.6112 8.27994 20.5978C8.27161 20.5844 8.26676 20.5692 8.26581 20.5535C8.26487 20.5378 8.26787 20.5221 8.27453 20.5078C8.2812 20.4935 8.29134 20.4811 8.30404 20.4715C8.46296 20.3542 8.62198 20.2321 8.77373 20.1089C8.78721 20.0979 8.80352 20.0909 8.82083 20.0886C8.83814 20.0863 8.85576 20.0888 8.8717 20.0958C13.8335 22.3277 19.2053 22.3277 24.1084 20.0958C24.1244 20.0884 24.1422 20.0855 24.1598 20.0876C24.1773 20.0897 24.1939 20.0967 24.2076 20.1077C24.3594 20.231 24.5184 20.3542 24.6785 20.4715C24.6913 20.481 24.7015 20.4933 24.7083 20.5076C24.715 20.5218 24.7181 20.5375 24.7173 20.5532C24.7165 20.5689 24.7118 20.5841 24.7035 20.5976C24.6953 20.6111 24.6838 20.6223 24.6701 20.6304C23.9145 21.0652 23.1229 21.4363 22.3039 21.7398C22.2912 21.7445 22.2797 21.7519 22.27 21.7614C22.2604 21.7709 22.2529 21.7822 22.248 21.7948C22.2432 21.8073 22.241 21.8207 22.2418 21.8341C22.2425 21.8475 22.2461 21.8605 22.2524 21.8725C22.706 22.7356 23.2232 23.5647 23.8 24.3532C23.8117 24.3694 23.8282 24.3815 23.8473 24.3879C23.8664 24.3943 23.8871 24.3946 23.9063 24.3888C26.6332 23.5664 29.1976 22.2914 31.4892 20.6187C31.5004 20.6107 31.5097 20.6004 31.5165 20.5886C31.5233 20.5767 31.5274 20.5636 31.5287 20.55C32.161 14.107 30.47 8.51042 27.0461 3.54903ZM11.4722 17.1555C9.97833 17.1555 8.74743 15.8043 8.74743 14.145C8.74743 12.4857 9.95446 11.1345 11.4722 11.1345C13.0018 11.1345 14.2208 12.4974 14.1969 14.1449C14.1969 15.8043 12.9898 17.1555 11.4722 17.1555ZM21.5465 17.1555C20.0527 17.1555 18.8218 15.8043 18.8218 14.145C18.8218 12.4857 20.0288 11.1345 21.5465 11.1345C23.0762 11.1345 24.2951 12.4974 24.2712 14.1449C24.2712 15.8043 23.0762 17.1555 21.5465 17.1555Z"
                          fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex w-72 h-96 flex-col gap-y-4 bg-[#2D2D2D] rounded-2xl shadow-large">
                <div className="px-[28px] py-[38px]">
                  <div className="w-20 h-20 bg-[#D1D5DB] rounded-full shadow-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="39" viewBox="0 0 50 39" fill="none">
                      <path
                        d="M40.5392 5.31958C40.5266 5.29546 40.5056 5.27656 40.4802 5.26626C37.5338 3.93391 34.4244 2.98384 31.23 2.43983C31.201 2.43451 31.171 2.43835 31.1444 2.45079C31.1177 2.46324 31.0956 2.48366 31.0814 2.50915C30.658 3.26652 30.2737 4.04446 29.9298 4.84001C26.4865 4.32484 22.9839 4.32484 19.5405 4.84001C19.1944 4.04244 18.8039 3.2643 18.3708 2.50915C18.3559 2.48421 18.3338 2.46426 18.3073 2.4519C18.2808 2.43953 18.2511 2.43533 18.2221 2.43983C15.0274 2.9827 11.9178 3.93284 8.97181 5.26634C8.94659 5.27688 8.92531 5.29487 8.91091 5.31783C3.01943 13.9891 1.40553 22.4471 2.19726 30.8004C2.19948 30.8209 2.20587 30.8407 2.21602 30.8587C2.22618 30.8767 2.2399 30.8925 2.25638 30.9052C5.68693 33.4086 9.52405 35.3195 13.604 36.5563C13.6327 36.5648 13.6634 36.5644 13.6919 36.5552C13.7204 36.546 13.7454 36.5284 13.7634 36.5048C14.6397 35.3297 15.4162 34.0853 16.0849 32.7844C16.0941 32.7666 16.0993 32.747 16.1003 32.727C16.1012 32.707 16.0979 32.687 16.0904 32.6684C16.083 32.6498 16.0716 32.6329 16.0571 32.6189C16.0426 32.605 16.0252 32.5942 16.0061 32.5873C14.7817 32.1256 13.5964 31.569 12.4611 30.9227C12.4405 30.9108 12.4232 30.894 12.4107 30.8739C12.3982 30.8538 12.391 30.8309 12.3895 30.8074C12.3881 30.7839 12.3926 30.7604 12.4026 30.7389C12.4126 30.7175 12.4278 30.6989 12.4468 30.6846C12.685 30.5087 12.9234 30.3257 13.1509 30.141C13.1711 30.1245 13.1955 30.114 13.2215 30.1106C13.2474 30.1071 13.2738 30.1109 13.2977 30.1215C20.7349 33.4667 28.7867 33.4667 36.1359 30.1215C36.1598 30.1102 36.1865 30.1059 36.2128 30.1091C36.2392 30.1122 36.264 30.1227 36.2846 30.1392C36.5121 30.324 36.7504 30.5087 36.9904 30.6846C37.0095 30.6987 37.0248 30.7173 37.035 30.7386C37.0451 30.7599 37.0498 30.7834 37.0486 30.8069C37.0473 30.8305 37.0402 30.8533 37.0279 30.8735C37.0156 30.8937 36.9984 30.9106 36.9778 30.9227C35.8452 31.5744 34.6588 32.1306 33.4312 32.5855C33.4121 32.5927 33.3948 32.6037 33.3803 32.6179C33.3659 32.6321 33.3547 32.6492 33.3474 32.6679C33.3401 32.6867 33.3369 32.7068 33.338 32.7269C33.3391 32.7469 33.3445 32.7665 33.3539 32.7844C34.0338 34.0781 34.8091 35.3209 35.6736 36.5028C35.6911 36.527 35.7159 36.5452 35.7446 36.5548C35.7732 36.5643 35.8041 36.5648 35.833 36.5561C39.9202 35.3235 43.7641 33.4124 47.1989 30.9052C47.2156 30.8932 47.2296 30.8777 47.2398 30.86C47.25 30.8422 47.2562 30.8225 47.258 30.8022C48.2059 21.1449 45.6712 12.7562 40.5392 5.31958ZM17.1956 25.7141C14.9564 25.7141 13.1114 23.689 13.1114 21.2018C13.1114 18.7146 14.9206 16.6893 17.1956 16.6893C19.4883 16.6893 21.3154 18.7322 21.2796 21.2016C21.2796 23.689 19.4703 25.7141 17.1956 25.7141ZM32.2958 25.7141C30.0568 25.7141 28.2118 23.689 28.2118 21.2018C28.2118 18.7146 30.021 16.6893 32.2958 16.6893C34.5887 16.6893 36.4157 18.7322 36.38 21.2016C36.38 23.689 34.5887 25.7141 32.2958 25.7141Z"
                        fill="#111111" />
                    </svg>
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold text-left">RO - Official Discord Server</h1>
                  <p className="font-normal mt-3 text-sm text-[#D1D5DB] text-left">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                  </p>
                  <div className="bg-[#3743CB] w-full h-[52px] rounded-lg mt-5 shadow-button">
                    <a className="flex flex-row gap-4 text-[14px] leading-[120%] justify-center items-center h-full w-full"
                      href="#">
                      Sorem ipsum dolor
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path
                          d="M27.0461 3.54903C27.0377 3.53294 27.0237 3.52033 27.0067 3.51346C25.041 2.62457 22.9666 1.99072 20.8354 1.62778C20.8161 1.62423 20.7961 1.62679 20.7783 1.63509C20.7605 1.64339 20.7458 1.65701 20.7363 1.67402C20.4538 2.17931 20.1974 2.69832 19.968 3.22908C17.6707 2.88538 15.3339 2.88538 13.0367 3.22908C12.8057 2.69697 12.5452 2.17783 12.2563 1.67402C12.2463 1.65738 12.2316 1.64408 12.2139 1.63583C12.1962 1.62758 12.1764 1.62477 12.1571 1.62778C10.0257 1.98996 7.95111 2.62385 5.98564 3.51351C5.96881 3.52054 5.95462 3.53254 5.94501 3.54786C2.01445 9.33298 0.937721 14.9758 1.46593 20.5488C1.46741 20.5625 1.47167 20.5757 1.47845 20.5877C1.48522 20.5997 1.49438 20.6103 1.50537 20.6187C3.7941 22.2889 6.35407 23.5638 9.07604 24.3889C9.09521 24.3946 9.11567 24.3943 9.13469 24.3882C9.15371 24.382 9.17036 24.3703 9.18241 24.3546C9.76703 23.5706 10.285 22.7404 10.7312 21.8725C10.7373 21.8606 10.7408 21.8475 10.7415 21.8342C10.7421 21.8208 10.7399 21.8075 10.7349 21.7951C10.7299 21.7826 10.7224 21.7714 10.7127 21.7621C10.703 21.7527 10.6914 21.7455 10.6787 21.7409C9.86178 21.4329 9.07095 21.0616 8.31358 20.6304C8.29982 20.6224 8.28827 20.6112 8.27994 20.5978C8.27161 20.5844 8.26676 20.5692 8.26581 20.5535C8.26487 20.5378 8.26787 20.5221 8.27453 20.5078C8.2812 20.4935 8.29134 20.4811 8.30404 20.4715C8.46296 20.3542 8.62198 20.2321 8.77373 20.1089C8.78721 20.0979 8.80352 20.0909 8.82083 20.0886C8.83814 20.0863 8.85576 20.0888 8.8717 20.0958C13.8335 22.3277 19.2053 22.3277 24.1084 20.0958C24.1244 20.0884 24.1422 20.0855 24.1598 20.0876C24.1773 20.0897 24.1939 20.0967 24.2076 20.1077C24.3594 20.231 24.5184 20.3542 24.6785 20.4715C24.6913 20.481 24.7015 20.4933 24.7083 20.5076C24.715 20.5218 24.7181 20.5375 24.7173 20.5532C24.7165 20.5689 24.7118 20.5841 24.7035 20.5976C24.6953 20.6111 24.6838 20.6223 24.6701 20.6304C23.9145 21.0652 23.1229 21.4363 22.3039 21.7398C22.2912 21.7445 22.2797 21.7519 22.27 21.7614C22.2604 21.7709 22.2529 21.7822 22.248 21.7948C22.2432 21.8073 22.241 21.8207 22.2418 21.8341C22.2425 21.8475 22.2461 21.8605 22.2524 21.8725C22.706 22.7356 23.2232 23.5647 23.8 24.3532C23.8117 24.3694 23.8282 24.3815 23.8473 24.3879C23.8664 24.3943 23.8871 24.3946 23.9063 24.3888C26.6332 23.5664 29.1976 22.2914 31.4892 20.6187C31.5004 20.6107 31.5097 20.6004 31.5165 20.5886C31.5233 20.5767 31.5274 20.5636 31.5287 20.55C32.161 14.107 30.47 8.51042 27.0461 3.54903ZM11.4722 17.1555C9.97833 17.1555 8.74743 15.8043 8.74743 14.145C8.74743 12.4857 9.95446 11.1345 11.4722 11.1345C13.0018 11.1345 14.2208 12.4974 14.1969 14.1449C14.1969 15.8043 12.9898 17.1555 11.4722 17.1555ZM21.5465 17.1555C20.0527 17.1555 18.8218 15.8043 18.8218 14.145C18.8218 12.4857 20.0288 11.1345 21.5465 11.1345C23.0762 11.1345 24.2951 12.4974 24.2712 14.1449C24.2712 15.8043 23.0762 17.1555 21.5465 17.1555Z"
                          fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex w-72 h-96 flex-col gap-y-4 bg-[#2D2D2D] rounded-2xl shadow-large">
                <div className="px-[28px] py-[38px]">
                  <div className="w-20 h-20 bg-[#D1D5DB] rounded-full shadow-medium flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="39" viewBox="0 0 49 39" fill="none">
                      <path
                        d="M44.3699 20.3912C48.6936 16.0875 48.6936 9.11775 44.3699 4.81404C40.5436 1.00545 34.5133 0.510331 30.113 3.64099L29.9906 3.72478C28.8886 4.50935 28.6361 6.03279 29.4243 7.12205C30.2125 8.21131 31.743 8.47029 32.8374 7.68572L32.9598 7.60193C35.4163 5.8576 38.7758 6.13181 40.9032 8.25701C43.3138 10.6564 43.3138 14.5412 40.9032 16.9406L32.317 25.5023C29.9064 27.9017 26.0036 27.9017 23.593 25.5023C21.4579 23.3771 21.1824 20.0332 22.9349 17.5957L23.0191 17.4738C23.8073 16.3769 23.5471 14.8535 22.4528 14.0765C21.3584 13.2996 19.8203 13.551 19.0397 14.6402L18.9555 14.7621C15.8026 19.1344 16.3001 25.1367 20.1264 28.9453C24.4501 33.249 31.4522 33.249 35.776 28.9453L44.3699 20.3912ZM4.60687 18.6088C0.283143 22.9125 0.283143 29.8822 4.60687 34.1859C8.43318 37.9945 14.4634 38.4896 18.8637 35.359L18.9861 35.2752C20.0881 34.4906 20.3407 32.9672 19.5524 31.8779C18.7642 30.7887 17.2337 30.5297 16.1394 31.3142L16.0169 31.398C13.5604 33.1424 10.2009 32.8681 8.07351 30.7429C5.66293 28.3359 5.66293 24.4512 8.07351 22.0517L16.6597 13.4976C19.0703 11.0982 22.9732 11.0982 25.3837 13.4976C27.5188 15.6228 27.7943 18.9668 26.0418 21.4119L25.9577 21.5338C25.1695 22.6306 25.4296 24.1541 26.524 24.931C27.6183 25.708 29.1565 25.4566 29.937 24.3674L30.0212 24.2455C33.1741 19.8656 32.6767 13.8633 28.8504 10.0547C24.5266 5.75096 17.5245 5.75096 13.2008 10.0547L4.60687 18.6088Z"
                        fill="#111111" />
                    </svg>
                  </div>
                  <h1 className="mt-5 text-3xl font-semibold text-left">Railroads Online Servers</h1>
                  <p className="font-normal mt-3 text-sm text-[#D1D5DB] text-left">
                    Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero.
                  </p>
                  <div className="bg-[#111111] w-full h-[52px] rounded-lg mt-5 shadow-button">
                    <a className="flex flex-row gap-4 text-[14px] leading-[120%] justify-center items-center h-full w-full"
                      href="#">
                      Sorem ipsum dolor
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path
                          d="M29.896 13.7394C32.8092 10.8396 32.8092 6.14345 29.896 3.24365C27.3178 0.677463 23.2547 0.343858 20.2899 2.45327L20.2074 2.50972C19.4649 3.03836 19.2947 4.06483 19.8258 4.79876C20.3569 5.53269 21.3882 5.70719 22.1255 5.17856L22.208 5.1221C23.8632 3.94679 26.1267 4.13155 27.5602 5.56349C29.1844 7.18019 29.1844 9.7977 27.5602 11.4144L21.7749 17.1832C20.1507 18.7999 17.521 18.7999 15.8967 17.1832C14.4582 15.7513 14.2725 13.4981 15.4533 11.8558L15.51 11.7737C16.0411 11.0346 15.8658 10.0081 15.1285 9.48462C14.3911 8.96112 13.3547 9.13049 12.8288 9.86442L12.7721 9.94654C10.6477 12.8925 10.9828 16.9368 13.561 19.503C16.4742 22.4028 21.1922 22.4028 24.1055 19.503L29.896 13.7394ZM3.10409 12.5384C0.190808 15.4382 0.190808 20.1343 3.10409 23.0341C5.68221 25.6003 9.74534 25.9339 12.7102 23.8245L12.7927 23.768C13.5352 23.2394 13.7053 22.2129 13.1742 21.479C12.6432 20.7451 11.6119 20.5706 10.8746 21.0992L10.7921 21.1557C9.1369 22.331 6.87331 22.1462 5.43987 20.7143C3.81565 19.0924 3.81565 16.4749 5.43987 14.8582L11.2252 9.09456C12.8494 7.47786 15.4791 7.47786 17.1033 9.09456C18.5419 10.5265 18.7275 12.7796 17.5467 14.4271L17.49 14.5092C16.9589 15.2483 17.1342 16.2748 17.8716 16.7983C18.6089 17.3218 19.6453 17.1524 20.1713 16.4185L20.228 16.3363C22.3524 13.3852 22.0172 9.34092 19.4391 6.77473C16.5258 3.87493 11.8078 3.87493 8.89456 6.77473L3.10409 12.5384Z"
                          fill="white" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </dl>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
        <div
          className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full object-cover -z-10"
            src="assets/serverManagerBackground.png" alt="" />
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />Start using
              our app today.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed
              consectetur. Malesuada adipiscing sagittis vel nulla.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#"
                className="rounded-md bg-[#47E5C1] px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Download for free
                </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span
                aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-lg" src="assets/serverManager.png"
              alt="App screenshot" width="1824" height="1080" />
          </div>
        </div>
      </section>
      <section className="sm:my-8 px-6 sm:px-28 pb-16">
        <h1 className="text-center text-5xl font-semibold"><i>Don’t just take our word for it.</i></h1>
        <h1
          style={{
            background: 'linear-gradient(94deg, #3743CB 0.91%, #47E5C1 79.61%)',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            textShadow: '0px 20px 20px #000',
          }}
          className="text-center text-6xl mt-8 font-semibold bg-clip-text">Trust our community</h1>
      </section>
      <section className="relative max-w-7xl mx-auto px-4 sm:px-3 md:px-5">
        <h2 className="sr-only">Testimonials</h2>
        <Testimonials/>
      </section>

      <section className="px-6 my-32 sm:px-28">
        <h1 className="mx-auto text-center text-4xl sm:text-6xl font-semibold">
          ROTL is for everyone
        </h1>
        <p className="mx-auto text-center text-xl text-light-gray mt-8">
          Porem ipsum dolor sit amet consectetur adipiscing elit, nunc vulputate libero et velit interdum.
        </p>
        <a href="https://discord.gg/KaVKdDnA6D"
          className="mx-auto shadow-large mt-32 flex items-center gap-7 justify-center bg-[#3743CB] w-11/12 h-20 sm:w-[420px] text-white rounded-2xl font-semibold text-xl">
          <span className="hidden sm:block">Sorem ipsum dolor sit</span>
          <span className="block sm:hidden">Sorem ipsum</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="44" viewBox="0 0 58 46" fill="none">
            <path
              d="M47.5356 6.23758C47.5208 6.20929 47.4963 6.18713 47.4664 6.17506C44.0115 4.61276 40.3655 3.49873 36.6198 2.86083C36.5858 2.85459 36.5507 2.85909 36.5194 2.87368C36.4881 2.88827 36.4623 2.91222 36.4456 2.94211C35.9491 3.83018 35.4984 4.74239 35.0953 5.67523C31.0576 5.07116 26.9506 5.07116 22.9129 5.67523C22.5071 4.74002 22.0492 3.82759 21.5413 2.94211C21.5239 2.91287 21.4979 2.88947 21.4668 2.87498C21.4357 2.86048 21.4009 2.85555 21.3669 2.86083C17.6208 3.49739 13.9747 4.61151 10.5202 6.17515C10.4906 6.1875 10.4657 6.2086 10.4488 6.23552C3.54054 16.4033 1.64811 26.3211 2.57647 36.116C2.57908 36.14 2.58656 36.1633 2.59847 36.1844C2.61038 36.2055 2.62648 36.224 2.6458 36.2388C6.66841 39.1743 11.1677 41.415 15.9518 42.8652C15.9855 42.8752 16.0215 42.8748 16.0549 42.864C16.0883 42.8532 16.1176 42.8325 16.1388 42.8049C17.1663 41.4269 18.0767 39.9678 18.8609 38.4424C18.8716 38.4215 18.8778 38.3985 18.8789 38.3751C18.88 38.3516 18.8761 38.3282 18.8674 38.3064C18.8587 38.2845 18.8453 38.2648 18.8283 38.2484C18.8113 38.232 18.7909 38.2193 18.7685 38.2112C17.3328 37.6698 15.9429 37.0172 14.6117 36.2594C14.5876 36.2454 14.5673 36.2257 14.5526 36.2021C14.538 36.1786 14.5294 36.1518 14.5278 36.1242C14.5261 36.0966 14.5314 36.069 14.5431 36.0439C14.5548 36.0188 14.5726 35.9969 14.595 35.9802C14.8743 35.7739 15.1538 35.5594 15.4205 35.3427C15.4442 35.3235 15.4728 35.3111 15.5033 35.3071C15.5337 35.3031 15.5647 35.3075 15.5927 35.3198C24.3134 39.2424 33.7548 39.2424 42.3724 35.3198C42.4004 35.3067 42.4317 35.3017 42.4626 35.3053C42.4935 35.309 42.5226 35.3213 42.5467 35.3407C42.8135 35.5573 43.0929 35.7739 43.3743 35.9802C43.3968 35.9967 43.4147 36.0185 43.4266 36.0435C43.4385 36.0685 43.444 36.096 43.4426 36.1236C43.4411 36.1512 43.4328 36.1781 43.4183 36.2017C43.4039 36.2254 43.3837 36.2452 43.3596 36.2594C42.0315 37.0235 40.6403 37.6758 39.2008 38.2092C39.1785 38.2176 39.1582 38.2305 39.1413 38.2472C39.1243 38.2638 39.1111 38.2838 39.1026 38.3058C39.094 38.3278 39.0903 38.3514 39.0916 38.3749C39.0929 38.3984 39.0993 38.4214 39.1102 38.4424C39.9075 39.9594 40.8166 41.4166 41.8302 42.8025C41.8508 42.8309 41.8799 42.8522 41.9135 42.8634C41.947 42.8747 41.9833 42.8752 42.0172 42.865C46.8098 41.4196 51.317 39.1788 55.3447 36.2388C55.3643 36.2247 55.3806 36.2067 55.3926 36.1858C55.4045 36.165 55.4118 36.1419 55.414 36.1181C56.5254 24.7941 53.5533 14.9576 47.5356 6.23758ZM20.1632 30.1519C17.5377 30.1519 15.3743 27.7772 15.3743 24.8608C15.3743 21.9444 17.4957 19.5695 20.1632 19.5695C22.8516 19.5695 24.9941 21.965 24.9521 24.8606C24.9521 27.7772 22.8306 30.1519 20.1632 30.1519ZM37.8696 30.1519C35.2441 30.1519 33.0807 27.7772 33.0807 24.8608C33.0807 21.9444 35.2021 19.5695 37.8696 19.5695C40.5581 19.5695 42.7005 21.965 42.6585 24.8606C42.6585 27.7772 40.5581 30.1519 37.8696 30.1519Z"
              fill="white" />
          </svg>
        </a>
      </section>
    </main>
  )
}
