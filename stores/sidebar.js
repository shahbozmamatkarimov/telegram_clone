import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
    const isOpen = ref(false);
    const aside = ref(false);
    const userInfo = ref(false);
    const openModal = ref(false);
    const store = reactive({
        imageUrl: "",
    })

    const toggleOpen = () => {
        if (window.innerWidth < 640){
            aside.value = true;
        }
    }

    return { isOpen, aside, toggleOpen, userInfo, openModal, store };
})