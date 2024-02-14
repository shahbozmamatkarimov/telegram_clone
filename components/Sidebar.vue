<template>
  <aside>
    <!-- left -->
    <div
      class="relative max-h-screen flex flex-col h-full bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
    >
      <div class="flex justify-between px-3 pt-1 text-white">
        <div class="flex items-center w-full py-2">
          <button
            @click="sidebar.userInfo = true"
            aria-haspopup="true"
            class="p-2 text-gray-700 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
          >
            <svg
              class="w-6 h-6 text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="nonzero"
                d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"
              />
            </svg>
            <UserInfo />
          </button>
          <div
            class="relative flex items-center w-full pl-2 overflow-hidden text-gray-600 focus-within:text-gray-400"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-4">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-none"
              >
                <svg
                  class="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="nonzero"
                    d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="w-full py-2 pl-12 text-sm text-white bg-gray-200 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              style="border-radius: 25px"
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <div class="border-b shadow-bot">
        <ul
          class="flex flex-row overflow-x-auto overflow-hidden items-center px-2 list-none select-none"
        >
          <li
            @click="$router.push('/451515')"
            class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="flex items-center justify-center py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-blue-500"
            >
              All
            </a>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="flex items-center justify-center py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent"
            >
              Work
            </a>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="flex items-center justify-center py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent"
            >
              Private
              <span
                class="flex items-center justify-center w-5 h-5 ml-1 text-xs text-white bg-blue-500 rounded-full"
                >2</span
              >
            </a>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="flex items-center justify-center py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent"
            >
              Groups
            </a>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="flex items-center justify-center py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent"
            >
              Channels
            </a>
          </li>
        </ul>
      </div>
      <div
        class="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray"
      >
        <ul class="flex flex-col w-full h-screen px-2 select-none">
          <li
            @click="$router.push('/451515')"
            class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
            style="padding-top: 0.65rem; padding-bottom: 0.65rem"
          >
            <div class="flex justify-between w-full focus:outline-none">
              <div class="flex justify-between w-full">
                <div
                  class="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink"
                >
                  <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://st3.depositphotos.com/4071389/13704/i/450/depositphotos_137047646-stock-photo-handsome-bearded-man-in-glasses.jpg"
                    alt=""
                  />
                  <div
                    class="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                    style="width: 0.8rem; height: 0.8rem"
                  >
                    <div
                      class="bg-green-500 rounded-full"
                      style="width: 0.6rem; height: 0.6rem"
                    ></div>
                  </div>
                </div>
                <div class="items-center flex-1 min-w-0">
                  <div class="flex justify-between mb-1">
                    <h2 class="text-sm line-clamp-1 font-semibold text-black">
                      Lauri Edmon
                    </h2>
                    <div class="flex">
                      <svg
                        class="w-4 h-4 text-green-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        style="color: transparent"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"
                        />
                      </svg>
                      <span class="ml-1 text-xs font-medium text-gray-600"
                        >12.52</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex justify-between text-sm leading-none truncate"
                  >
                    <span>Writing...</span>
                    <span
                      class="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                      >2</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
            style="padding-top: 0.65rem; padding-bottom: 0.65rem"
          >
            <div class="flex justify-between w-full focus:outline-none">
              <div class="flex justify-between w-full">
                <div
                  class="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink"
                >
                  <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLq5mBrD23kWZQ0zoMLlG7pGpfx8KiQEYLWId5TiVHS6MlNUW83ZU37wZuY2Gtgh3g5Uk&usqp=CAU"
                    alt=""
                  />
                  <div
                    class="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                    style="width: 0.8rem; height: 0.8rem"
                  >
                    <div
                      class="bg-green-500 rounded-full"
                      style="width: 0.6rem; height: 0.6rem"
                    ></div>
                  </div>
                </div>
                <div class="items-center flex-1 min-w-0">
                  <div class="flex justify-between mb-1">
                    <h2 class="text-sm line-clamp-1 font-semibold text-black">
                      Julian Gruber
                    </h2>
                    <div class="flex">
                      <svg
                        class="w-4 h-4 text-green-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        style="color: transparent"
                      >
                        <path
                          fill-rule="nonzero"
                          d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"
                        />
                      </svg>
                      <span class="ml-1 text-xs font-medium text-gray-600"
                        >20.25</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex justify-between text-sm leading-none truncate"
                  >
                    <span>Send audio...</span>
                    <span
                      class="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                      >2</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
            style="padding-top: 0.65rem; padding-bottom: 0.65rem"
          >
            <div class="flex justify-between w-full focus:outline-none">
              <div class="flex justify-between w-full">
                <div
                  class="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink"
                >
                  <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://media.istockphoto.com/id/690899514/photo/frames-that-make-a-clear-statement.webp?b=1&s=170667a&w=0&k=20&c=5Z8tmkxpea3gwpqEiQQVB43aKKGzYmbtNnU8-rC6Gug="
                    alt=""
                  />
                </div>
                <div class="items-center flex-1 min-w-0">
                  <div class="flex justify-between mb-1">
                    <h2 class="text-sm line-clamp-1 font-semibold text-black">
                      Karlien Nihen
                    </h2>
                    <div class="flex">
                      <span class="ml-1 text-xs font-medium text-gray-600"
                        >2.28</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex justify-between text-sm leading-none truncate"
                  >
                    <span>Writing...</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
            style="padding-top: 0.65rem; padding-bottom: 0.65rem"
          >
            <div class="flex justify-between w-full focus:outline-none">
              <div class="flex justify-between w-full">
                <div
                  class="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink"
                >
                  <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9YysMv6X5tHZuKgBg-Lw4ZPXntWo-4E0oDhXTfO1yUM3W3rMZG0LWLoTZa4wNGgpe9E&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="items-center flex-1 min-w-0">
                  <div class="flex justify-between mb-1">
                    <h2 class="text-sm line-clamp-1 font-semibold text-black">
                      Meg Rigden
                    </h2>
                    <div class="flex">
                      <span class="ml-1 text-xs font-medium text-gray-600"
                        >12.52</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex justify-between text-sm leading-none truncate"
                  >
                    <span>Washington D.C.</span>
                    <span
                      class="flex items-center justify-center w-5 h-5 text-xs text-right text-white bg-green-500 rounded-full"
                      >2</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            @click="$router.push('/451515')"
            class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200"
            style="padding-top: 0.65rem; padding-bottom: 0.65rem"
          >
            <div class="flex justify-between w-full focus:outline-none">
              <div class="flex justify-between w-full">
                <div
                  class="relative flex items-center justify-center w-12 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full flex-no-shrink"
                >
                  <img
                    class="object-cover w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                  <div
                    class="absolute bottom-0 right-0 flex items-center justify-center bg-white rounded-full"
                    style="width: 0.8rem; height: 0.8rem"
                  >
                    <div
                      class="bg-green-500 rounded-full"
                      style="width: 0.6rem; height: 0.6rem"
                    ></div>
                  </div>
                </div>
                <div class="items-center flex-1 min-w-0">
                  <div class="flex justify-between mb-1">
                    <h2 class="text-sm line-clamp-1 font-semibold text-black">
                      Mark Green
                    </h2>
                    <div class="flex">
                      <span class="ml-1 text-xs font-medium text-gray-600"
                        >05:41</span
                      >
                    </div>
                  </div>
                  <div
                    class="flex justify-between text-sm leading-none truncate"
                  >
                    <span>I do not remember anything</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="fixed addBot bottom-0 right-0 z-40 mb-6 mr-4">
        <div>
          <a-button class="addBTN" type="primary" @click="showModal"
            ><button
              class="flex items-center justify-center w-12 h-12 text-xl font-semibold text-white bg-blue-500 rounded-full focus:outline-none flex-no-shrink"
            >
              <i class="bx bx-plus font-bold text-2xl"></i></button
          ></a-button>
          <a-modal
            v-model:open="open"
            centered
            title=""
            ok-text="Next"
            width="700"
            @ok="handleOk"
          >
            <div class="flex gap-2 items-end">
              <div v-if="store.imageUrl" class="imgPhoto relative">
                <img
                  class="object-cover  bg-blue-500 min-w-[5rem] w-20 h-20 rounded-full"
                  :src="store.imageUrl"
                  alt="photo"
                />
                <label
                  for="uploadBotPhoto"
                  class="bx bxs-camera bg-[#80808099] absolute hidden top-0 cursor-pointer items-center justify-center min-w-[5rem] w-20 h-20 text-white text-4xl rounded-full"
                ></label>
              </div>
              <label
                v-else
                for="uploadBotPhoto"
                class="bx bxs-camera cursor-pointer flex items-center justify-center bg-blue-500 min-w-[5rem] w-20 h-20 text-white text-4xl rounded-full"
              ></label>
              <input
                type="file"
                class="w-0 h-0 overflow-hidden"
                id="uploadBotPhoto"
                @change="handlePhoto"
                accept="image/*"
              />
              <div class="relative z-0 w-full mb-4 group">
                <input
                  type="text"
                  id="floating_first_name"
                  class="block text-md font-medium py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  maxlength="50"
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium text-lg absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Bot nomi</label
                >
              </div>
            </div>
          </a-modal>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar";
const sidebar = useSidebarStore();

const store = reactive({
  imageUrl: "",
});

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};

const handlePhoto = (e) => {
  const file = e.target.files[0];
  if (file?.type?.includes("image")) {
    store.imageUrl = URL.createObjectURL(file);
  }
};

$(document).ready(function () {
  $("ul li").click(function () {
    sidebar.toggleOpen();
  });
});
</script>

<style lang="scss">
.ant-modal-close-x {
  display: none !important;
}

.addBTN {
  border-radius: 50% !important;
  height: 3rem !important;
  width: 3rem !important;
  background: none !important;
}

.addBTN {
  padding: 0 !important;
}

.imgPhoto:hover{
  label{
    display: flex !important;
  }
}
</style>
