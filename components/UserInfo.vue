<template>
  <a-drawer
    :width="300"
    title="John Doe"
    :placement="placement"
    :open="sidebar.userInfo"
    @close="() => (sidebar.userInfo = false)"
  >
    <div class="container">
      <div class="navigation">
        <div class="user-box">
          <div class="image-box">
            <img
              class="w-14 h-14 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlO_cJ5LosPy7Qcvv9vKSxoBCLz8omnOwpIkYcSUufh6BGgcjbBBMUOVkk5okm60XsCNk&usqp=CAU"
              alt="avatar"
            />
          </div>
        </div>
        <div class="menu-toggle"></div>
        <ul class="menu space-y-5 pt-5">
          <li class="space-x-2">
            <i class="bx bx-user"></i><a href="#"><ion-icon name="person-outline"></ion-icon>Profile</a>
          </li>
          <li class="space-x-2">
            <i class="bx bx-message"></i><a href="#"><ion-icon name="chatbox-outline"></ion-icon>Messages</a>
          </li>
          <li class="space-x-2">
            <i class="bx bx-bell"></i><a href="#"
              ><ion-icon name="notifications-outline"></ion-icon>Notification</a
            >
          </li>
          <li class="space-x-2">
            <i class="bx bx-cog"></i><a href="#"><ion-icon name="cog-outline"></ion-icon>Settings</a>
          </li>
          <li class="space-x-2">
            <i class="bx bx-left-arrow"></i><a href="#"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { DrawerProps } from "ant-design-vue";
const placement = ref<DrawerProps["placement"]>("left");
import { useSidebarStore } from "../stores/sidebar";
const sidebar = useSidebarStore();
</script>
