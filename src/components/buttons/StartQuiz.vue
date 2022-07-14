<script>
import { mapMutations } from "vuex";
export default {
    name: "StartQuiz",
    methods: {
        ...mapMutations(["setCurrentScore"]),
        startQuiz() {
            this.setCurrentScore(10000);
            this.$router.push('/quiz');
        },
    }
}
</script>

<template>
    <button @click.prevent="startQuiz()" 
        class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
        hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded">
        Počni novu igru
    </button>
</template>