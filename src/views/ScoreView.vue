<script>
import StartQuiz from "../components/buttons/StartQuiz.vue";
import CloseApp from "../components/buttons/CloseApp.vue";
import { mapState } from "vuex";

export default {
    components: {
          CloseApp,
          StartQuiz
    },
    computed: {
        ...mapState(['currentScore'])
    },
}
</script>

<template>
 <div class="grid grid-cols-3 gap-1 pb-30 pt-10">
    <div></div>
    <div>
        <h2 class="text-white text-3xl text-center">Osvoji ste {{ currentScore }} dinara</h2>
        <h2 class="text-white text-3xl text-center">Hvala na učešću u kvizu</h2>
        <div class="flex justify-between pt-20 pb-20">
            <StartQuiz />
            <CloseApp />
        </div>
    </div>
 </div>
</template>
