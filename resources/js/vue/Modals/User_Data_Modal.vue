<template>
    <div v-if="show" class="fixed inset-0 bg-black/70 z-[8888] flex items-center justify-center">    
        <div class="userDataCard md:w-[380px] w-full bg-[#f1f1f1] overflow-hidden md:rounded-xl rounded-t-2xl flex flex-col">
            <header class="flex w-full justify-between bg-[#26AF5A] p-3 ">
                <!-- {{-- USER DATA --}} -->
                <div class="flex gap-2">
                    <!-- {{-- USER PROFILE --}} -->
                    <div class="flex items-start justify-center">
                        <div class="w-[35px] h-[35px] flex items-center justify-center bg-cyan-400 rounded-full text-xl font-bold">
                            {{ user.name?.[0] }}
                        </div>
                    </div>
                    <!-- {{-- USER NAME - EMAIL - ROLE --}} -->
                    <div class="flex flex-col items-start justify-center leading-none">
                        <span class="font-bold text-white text-md">{{ user.name }}</span>
                        <span class="text-[10px] text-white/80">{{ user.email }}</span>
                        <div v-if="user.role === 'admin'" class="text-[10px] p-1.5 bg-[#DBEAFE] rounded-md text-[#0000FF] mt-1">
                            <span>Admin</span>
                        </div>
                        <div v-else-if="user.role === 'student'" class="bg-[#D8F3DC] text-[#15803D] text-[10px] p-1.5 rounded-md mt-1">
                            <span>Student</span>
                        </div>
                    </div>
                </div>
                <!-- {{-- EXIT --}} -->
                <svg @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 text-white cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </header>

            <!-- {{-- USER DATA - BODY --}} -->
            <div class="p-3 flex flex-col">
                <!-- {{-- DATA --}} -->
                <div class="flex flex-col mb-3">
                    <!-- {{-- DATE JOINED --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">DATE JOINED</span>
                            <span class="text-xs font-semibold">{{ formatDate(user.created_at) }}</span>
                        </div>
                    </div>

                    <!-- {{-- EMAIL --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">EMAIL</span>
                            <span class="text-xs font-semibold">{{ user.email }}</span>
                        </div>
                    </div>

                    <!-- {{-- STATUS --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                            </svg>
                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">STATUS</span>
                            <span class="text-xs font-semibold"> <b class="text-[#26AF5A]">•</b> Active</span>
                        </div>
                    </div>

                    <!-- {{-- QUESTIONS ANSWERED --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                            </svg>
                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">QUESTIONS ANSWERED</span>
                            <span class="text-xs font-semibold">124 Questions</span>
                        </div>
                    </div>

                    <!-- {{-- TOTAL POINTS --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">TOTAL SCORE</span>
                            <span class="text-xs font-semibold">242 pts.</span>
                        </div>
                    </div>

                    <!-- {{-- ACCOUNT CREATED BY --}} -->
                    <div class="flex border-b-[0.5px] border-b-gray-400 py-2 gap-3">
                        <div class="w-[35px] h-[35px] rounded-md bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                        </div>
                        <div class="flex flex-col leading-tight">
                            <span class="text-[10px] text-[#808080] font-bold">ACCOUNT CREATED BY</span>
                            <span class="text-xs font-semibold">Jimwell Raza</span>
                        </div>
                    </div>

                </div>
                <!-- {{-- BUTTONS --}} -->
                <div class="flex items-center justify-end gap-3  py-2">
                    <button class="px-4 py-2 cursor-pointer  hover:bg-green-700 text-[13px] text-white bg-[#26AF5A] rounded-lg text-center">Change Password</button>
                    <button class="px-4 py-2 cursor-pointer  hover:bg-red-800 text-[13px] text-white bg-red-600 rounded-lg text-center">Remove Account</button>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
    defineProps({
        show: Boolean,
        user: Object
    });

    defineEmits(['close']);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

    };
</script>

<style scoped>
    @media (max-width: 767px) {
        .userDataCard {
            position: absolute;
            bottom: 0;
            border-radius: 20px 20px 0 0;
        }
    }
</style>