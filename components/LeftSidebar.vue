<template>
  <aside>
    <div
      class="relative flex h-screen overflow-hidden overflow-y-auto float-right duration-500 antialiased bg-gray-200"
     :class="!sidebar.isOpen ? 'w-0 overflow-hidden' : 'w-full'"
    >
      <!-- right -->
      <nav
        class="right-0 flex flex-col pb-2 bg-white border-l border-gray-300 xl:block"
        style="width: 20rem"
      >
        <div class="flex items-center justify-between w-full p-3">
          <button @click="sidebar.isOpen = false"
            class="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
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
                d="M5.20970461,5.38710056 L5.29289322,5.29289322 C5.65337718,4.93240926 6.22060824,4.90467972 6.61289944,5.20970461 L6.70710678,5.29289322 L12,10.585 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.415,12 L18.7071068,17.2928932 C19.0675907,17.6533772 19.0953203,18.2206082 18.7902954,18.6128994 L18.7071068,18.7071068 C18.3466228,19.0675907 17.7793918,19.0953203 17.3871006,18.7902954 L17.2928932,18.7071068 L12,13.415 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.585,12 L5.29289322,6.70710678 C4.93240926,6.34662282 4.90467972,5.77939176 5.20970461,5.38710056 L5.29289322,5.29289322 L5.20970461,5.38710056 Z"
              />
            </svg>
          </button>
          <div class="ml-4 mr-auto text-lg font-medium">Info</div>
          <button
            type="button"
            class="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
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
                d="M7.70710678,20.7071068 C7.5195704,20.8946432 7.26521649,21 7,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,17 C3,16.7347835 3.10535684,16.4804296 3.29289322,16.2928932 L16.5857864,3 C17.3257272,2.26005924 18.5012114,2.22111499 19.2869988,2.88316725 L19.4142136,3 L21,4.58578644 C21.7399408,5.3257272 21.778885,6.50121136 21.1168328,7.28699879 L21,7.41421356 L7.70710678,20.7071068 Z M5,17.4142136 L5,19 L6.58578644,19 L16.5857864,9 L15,7.41421356 L5,17.4142136 Z M18,4.41421356 L16.414,5.99921356 L18,7.58521356 L19.5857864,6 L18,4.41421356 Z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="p-2 ml-1 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200"
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
                d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"
              />
            </svg>
          </button>
        </div>
        <div>
          <div class="flex justify-center mb-4">
            <button
              type="button"
              class="content-center block w-32 h-32 p-1 overflow-hidden text-center rounded-full focus:outline-none"
            >
              <img
                class="content-center object-cover w-full h-full border-2 border-gray-200 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9YysMv6X5tHZuKgBg-Lw4ZPXntWo-4E0oDhXTfO1yUM3W3rMZG0LWLoTZa4wNGgpe9E&usqp=CAU"
                alt=""
              />
            </button>
          </div>
          <p class="text-lg font-semibold text-center text-gray-800">
            Karen J.
          </p>
          <p class="text-sm font-medium text-center text-blue-500">online</p>
        </div>
        <div class="flex items-center w-full px-3 mt-6">
          <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
            <svg
              class="w-6 h-6 text-gray-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="nonzero"
                d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,11 C12.5128358,11 12.9355072,11.3860402 12.9932723,11.8833789 L13,12 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4871642,18 11.0644928,17.6139598 11.0067277,17.1166211 L11,17 L11,12 C11,11.4477153 11.4477153,11 12,11 Z M12,6.5 C12.8284271,6.5 13.5,7.17157288 13.5,8 C13.5,8.82842712 12.8284271,9.5 12,9.5 C11.1715729,9.5 10.5,8.82842712 10.5,8 C10.5,7.17157288 11.1715729,6.5 12,6.5 Z"
              />
            </svg>
          </div>
          <div class="ml-4">
            <div class="mr-auto text-sm font-semibold text-gray-800">
              25 y.o traveler
            </div>
            <div
              class="mt-1 mr-auto text-sm font-semibold leading-none text-gray-600"
            >
              Bio
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-full px-3 mt-4">
            <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
              <svg
                class="w-6 h-6 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="nonzero"
                  d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,15.2534621 21.3575416,17.4078375 19.0415827,17.5042247 C17.5448049,17.5665187 16.2418767,16.729824 15.5433162,15.3661459 C14.6550197,16.3039294 13.3958222,16.8888889 12,16.8888889 C9.29994122,16.8888889 7.11111111,14.7000588 7.11111111,12 C7.11111111,9.29994122 9.29994122,7.11111111 12,7.11111111 C13.1311057,7.11111111 14.1724943,7.49523561 15.000833,8.14015176 L15,8 C15,7.44771525 15.4477153,7 16,7 C16.5128358,7 16.9355072,7.38604019 16.9932723,7.88337887 L17,8 L17,13 C17,14.5880914 17.9057778,15.5497641 18.9584173,15.5059546 C20.0913022,15.4588053 21,14.2668872 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C12.7993259,21 13.583948,20.8960375 14.3403366,20.6929627 C14.8737319,20.549757 15.4222254,20.8660682 15.5654311,21.3994635 C15.7086368,21.9328588 15.3923256,22.4813523 14.8589303,22.624558 C13.9337959,22.8729377 12.9748353,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,9.11111111 C10.4045107,9.11111111 9.11111111,10.4045107 9.11111111,12 C9.11111111,13.5954893 10.4045107,14.8888889 12,14.8888889 C13.5954893,14.8888889 14.8888889,13.5954893 14.8888889,12 C14.8888889,10.4045107 13.5954893,9.11111111 12,9.11111111 Z"
                />
              </svg>
            </div>
            <div>
              <div class="ml-4 mr-auto text-sm font-semibold text-gray-800">
                @karen
              </div>
              <div
                class="mt-1 ml-4 mr-auto text-sm font-semibold leading-none text-gray-600"
              >
                Username
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-full px-3 mt-4">
            <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
              <svg
                class="w-6 h-6 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="nonzero"
                  d="M7.23584729,12.5662193 L9.59157842,9.95106331 C10.1552393,9.38932119 10.4467339,8.55220389 10.3497484,7.70703944 L10.091414,5.46219074 C9.9242391,4.0550699 8.7398983,3 7.3255142,3 L5.78463506,3 C4.20042472,3 2.90721409,4.32400855 3.00518508,5.90554894 C3.50830004,14.0123888 9.98998589,20.491257 18.0941879,20.9948033 C19.6759108,21.0927867 21.0001332,19.7995671 21.0001332,18.2153552 L21.0001332,16.6744677 C21.013787,15.2731573 19.9556245,14.0848636 18.5502962,13.917893 L16.2834192,13.6590644 C15.4388246,13.562143 14.601708,13.8536405 14.0021558,14.453196 L11.4339669,16.7640867 C9.87568608,15.7549411 8.52871768,14.4473269 7.47401517,12.9220367 L7.23584729,12.5662193 Z M13.2949234,17.779617 L15.3784355,15.9034093 C15.5842713,15.6995067 15.8165698,15.6186166 16.0559758,15.6460896 L18.3188767,15.9044538 C18.7112475,15.951083 19.003823,16.2796389 19.0000842,16.6646639 L19,18.2153552 C19,18.6635336 18.6307181,19.0242061 18.218031,18.9986413 C16.4722141,18.8901667 14.8122275,18.4649122 13.2949234,17.779617 Z M6.220439,10.7056813 C5.53504105,9.18831553 5.10972952,7.52810348 5.00135169,5.7817795 C4.97579551,5.36922745 5.33643432,5 5.78463506,5 L7.3255142,5 C7.72533936,5 8.0576092,5.29600256 8.10495475,5.6944964 L8.36282472,7.93536896 C8.39026139,8.17446174 8.30937042,8.40676528 8.14147101,8.5746656 L6.220439,10.7056813 Z"
                />
              </svg>
            </div>
            <div class="ml-4">
              <div class="mr-auto text-sm font-semibold text-gray-800">
                +1 38594 38538
              </div>
              <div
                class="mt-1 mr-auto text-sm font-semibold leading-none text-gray-600"
              >
                Phone
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center w-full px-3 mt-4 mb-2">
            <div class="px-2 text-gray-500 cursor-pointer">
              <svg
                class="w-6 h-6 text-blue-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="nonzero"
                  d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M17.2928932,7.29289322 L10,14.5857864 L6.70710678,11.2928932 C6.31658249,10.9023689 5.68341751,10.9023689 5.29289322,11.2928932 C4.90236893,11.6834175 4.90236893,12.3165825 5.29289322,12.7071068 L9.29289322,16.7071068 C9.68341751,17.0976311 10.3165825,17.0976311 10.7071068,16.7071068 L18.7071068,8.70710678 C19.0976311,8.31658249 19.0976311,7.68341751 18.7071068,7.29289322 C18.3165825,6.90236893 17.6834175,6.90236893 17.2928932,7.29289322 Z"
                />
              </svg>
            </div>
            <div class="ml-4">
              <div class="mr-auto text-sm font-semibold text-gray-800">
                Notification
              </div>
              <div
                class="mt-1 mr-auto text-sm font-semibold leading-none text-gray-600"
              >
                Enabled
              </div>
            </div>
          </div>
        </div>
        <ul
          class="flex flex-row items-center justify-around px-3 mb-1 list-none border-b select-none"
        >
          <li
            class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="block py-3 text-xs font-bold leading-normal text-blue-500 uppercase border-b-4 border-blue-500"
            >
              Media
            </a>
          </li>
          <li
            class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent"
            >
              Docs
            </a>
          </li>
          <li
            class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent"
            >
              Links
            </a>
          </li>
          <li
            class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200"
          >
            <a
              class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent"
            >
              Audio
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar";

const sidebar = useSidebarStore();
</script>

<style lang="scss" scoped></style>
