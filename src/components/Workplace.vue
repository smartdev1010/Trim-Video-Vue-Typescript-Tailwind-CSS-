<script setup>
// This starter template is using Vueborder-slate-900 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted } from "vue";
import Trim from './Trim.vue';
import Volume from './Volume.vue';
import AddImage from './AddImage.vue';
import AddText from './AddText.vue';
import Default from './Default.vue'
const state = ref(0);
const current = ref(0);
const curWidth = ref(100);
function Move(e){
    curWidth.current = e.x;
    document.getElementsByClassName('draw-line')[0].style.width = curWidth.current - document.getElementsByClassName('draw-line')[0].parentNode.offsetLeft + "px";
}
function test(){
    var video = document.getElementById('video');
    console.log(video.duration);
}
</script>

<template>
    <header class="pt-10 flex justify-between">
        <div class="navbar ml-20 flex">
            <div class="flex gap-3 items-center justify-center text-gray-300 border border-transparent border-b-slate-900 hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm "
                @click="state = 1">
                <svg style="color: white" class="fill-current w-5 h-6" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38A3.5 3.5 0 1 0 5.5 8.37L7.73 10 5.5 11.63a3.5 3.5 0 1 0 1.38 1.99l2.9-2.12zM3.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM15.1 4.59A3.53 3.53 0 0 1 16.9 4H20l-7.5 5.5L10.45 8l4.65-3.41z"
                        fill="white"></path>
                </svg>
                <span>Trim</span>
            </div>
            <div class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm border-b-slate-900"
                @click="state = 2">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    class="bi bi-volume-up-fill fill-current w-5 h-6" viewBox="0 0 16 16">
                    <path
                        d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"
                        fill="white"></path>
                    <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"
                        fill="white"></path>
                    <path
                        d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"
                        fill="white"></path>
                </svg>
                <span>Volume</span>
            </div>
            <div class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm border-b-slate-900"
                @click="state = 3">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current w-5 h-6">
                    <g>
                        <path fill="transparent" d="M0 0h24v24H0z"></path>
                        <path
                            d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                            fill="white"></path>
                    </g>
                </svg>
                <span>Add Image</span>
            </div>
            <div class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm border-b-slate-900"
                @click="state = 4">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current w-5 h-6" fill="none">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M18 15v3m0 3v-3m0 0h3m-3 0h-3" fill="white"></path>
                    <path fill="white" fill-rule="evenodd"
                        d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.803A5.972 5.972 0 0 1 12 18c0-.342.029-.677.084-1.003A1.048 1.048 0 0 1 12 17H8a1 1 0 1 1 0-2h4c.255 0 .488.095.665.253A6.029 6.029 0 0 1 14.681 13H8a1 1 0 1 1 0-2h8a1 1 0 0 1 .997 1.084A6.044 6.044 0 0 1 18 12c1.093 0 2.117.292 3 .803V6a3 3 0 0 0-3-3H6zm1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <span>Add Text</span>
            </div>
        </div>
        <div class="mr-20 flex">
            <div
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm">
                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current w-5 h-6">
                    <path
                        d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"
                        fill="white"></path>
                </svg>
                <span>Restore</span>
            </div>
            <div
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent hover:border-b-white hover:cursor-pointer px-6 py-2 text-sm">
                <svg style="color: white" height="21" viewBox="0 0 21 21" width="21" class="fill-current w-5 h-6"
                    xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" transform="translate(4 3)">
                        <path d="m10.595 10.5 2.905-3-2.905-3" fill="transparent"></path>
                        <path d="m13.5 7.5h-9" fill="transparent"></path>
                        <path
                            d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792"
                            fill="transparent"></path>
                    </g>
                </svg>
            </div>
        </div>
    </header>

    <div class="flex flex-col items-center justify-center mt-5">
        <p class="text-gray-500">111.avi</p>
        <div class="screen border border-solid border-white mt-1">
            <video id="video" style="height: 100%; width: 100%">
                <source src="../assets/bear.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="flex items-center justify-between bg-black h-15 mx-20 mt-3 v-96" @mousemove="Move($event)" style="position:relative" @click="test">
            <img v-for="i in 10" class="h-full" :src="`../src/fr5/00${parseInt(i * 6 / 10)}${i * 6 % 10}.jpg`"
               style="width: 120px" @click="`console.log(${i})`" />
            <div class="draw-line" :style="`width: ${curWidth.current}px`">
            </div>
        </div>
    </div>
    <div class="mt-3">
        <Default v-if="state === 0" />
        <Trim v-if="state === 1" />
        <Volume v-if="state === 2" />
        <AddImage v-if="state === 3" />
        <AddText v-if="state === 4" />
    </div>
</template>

<style scoped>
.screen {
    width: 640px;
    height: 380px;
    /* background: url('../fr5/0001.jpg'); */
    background-size: cover;
}
.draw-line{
    position: absolute;
    left: 0px;
    height: 100%;
    top: 0px;
    background-color: transparent;
    border-right: 2px solid white;
}
</style>