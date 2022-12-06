<script>
import IconClose from "./icons/IconClose.vue";

export default {
    name: "Modal",
    components: {
        IconClose,
    },
    props: {
        modalTitle: String,
        isOpenModal: Boolean,
        helpUsed: Boolean,
    },
    emits: ["modal-show", "modal-close"],
}
</script>
<template>
    <button
        @click="$emit('modal-show')"
        :disabled="helpUsed"
        :class="{ 'opacity-25 cursor-not-allowed': helpUsed }"
        class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
        hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3"
    >
         <slot name="buttonIcon"></slot>
    </button>
    <div
        v-show="isOpenModal"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
                <h3 class="text-xl">{{ modalTitle }}</h3>
                <IconClose @click="$emit('modal-close')"/>
            </div>
            <div class="mt-4">
                <slot name="modalText"></slot>
            </div>
            <div class="flex justify-center">
                <button 
                    @click="$emit('modal-close')"
                    class="px-6 py-3 text-white bg-blue-600 rounded">
                    Zatvori
                </button>
            </div>
        </div>
    </div>
   
</template>