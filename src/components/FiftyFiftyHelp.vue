<script>
export default {
    name: "FiftyFiftyHelp",
    props: {
        correctAnswer: String,
        cutByHalfHelpUsed: Boolean,
        isFiftyFiftyHelpUsed: Boolean
    },
    emits: ["cutOptionsByHalf"],
}
</script>
<template>

    <button
        :value=this.correctAnswer
        :disabled=this.cutByHalfHelpUsed
        @click.prevent="$emit('cutOptionsByHalf', $event.target.value)"
        :class="{ 'opacity-25 cursor-not-allowed': cutByHalfHelpUsed }"
        class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
        hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
        50:50
    </button>
   
</template>