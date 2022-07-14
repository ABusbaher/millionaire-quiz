<script>
import { mapMutations } from "vuex";

export default {
    name: "QuitQuiz",
    methods: {
        ...mapMutations(["previousScore"]),
        leaveQuiz() {
            if (confirm("Da li ste sigurni da želite da odustanete?")) {
                this.previousScore();
                this.$router.push('/score');
            }
        }
    }
}
</script>

<template>
    <button
        @click.prevent="leaveQuiz()" 
        class="bg-white hover:bg-red-500 text-red-700 font-semibold 
          hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Odustani
    </button>
</template>
