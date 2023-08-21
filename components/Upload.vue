<template>
  <div
    v-show="modal.openModal"
    class="flex modal justify-center items-center absolute min-h-screen bg-[#80808038] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-xs max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex items-start justify-between px-4 py-2 rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Send an image
          </h3>
          <button
            @click="() => (modal.openModal = false)"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          >
            <i class="bx bx-x text-2xl"></i>
          </button>
        </div>
        <!-- Modal body -->
        <div class="px-4 space-y-6 relative">
          <div>
            <div
              class="flex w-full justify-end absolute text-white right-5 top-2"
            >
              <label for="upload_image">
                <i
                  class="bx bx-refresh bg-[#00000032] rounded-l-md p-1 cursor-pointer"
                ></i>
              </label>
              <input type="file" id="upload_image" class="w-0 h-0" />
              <i
                @click="
                  () => {
                    modal.store.imageUrl = '';
                    modal.openModal = false;
                  }
                "
                class="bx bx-trash bg-[#00000032] rounded-r-md p-1 cursor-pointer"
              ></i>
            </div>
            <img
              class="max-w-full m-auto border min-h-[10rem] bg-gray-200 max-h-[70vh] rounded object-cover"
              :src="modal.store.imageUrl"
              alt="img"
            />
            <!-- <video controls
              :src="modal.store.imageUrl"
              class="max-w-full m-auto border min-h-[10rem] bg-gray-200 max-h-[70vh] rounded object-cover"
            ></video> -->
            <video
              id="video"
              width="300"
              height="300"
              autoplay
              controls
            ></video>

            <video
              id="video"
              width="300"
              height="300"
              autoplay
              controls
            ></video>
          </div>
          <div class="relative">
            <input
              type="text"
              id="floating_outlined"
              class="block pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
            />
            <hr class="border-2" />
            <label
              for="floating_outlined"
              class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-0"
              >Caption</label
            >
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600"
        >
          <button
            @click="() => (modal.openModal = false)"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center"
          >
            Cancel
          </button>
          <button
            class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-3 py-1.5 hover:text-gray-900 focus:z-10"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarStore } from "../stores/sidebar";
const modal = useSidebarStore();

$(document).ready(function () {
  $("input[type=file]").change(function (e) {
    const file = e.target.files[0];
    console.log(file);
    modal.store.imageUrl = URL.createObjectURL(file);
    modal.openModal = true;
  });
});
</script>

<style lang="scss" scoped></style>
