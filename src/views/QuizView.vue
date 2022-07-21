<script>
import CloseApp from "../components/buttons/CloseApp.vue";
import StartQuiz from "../components/buttons/StartQuiz.vue";
import Questions from "../components/Questions.vue";
import CurrentAmount from "../components/CurrentAmount.vue";
import FriendsHelp from "../components/FriendsHelp.vue";
import AudienceHelp from "../components/AudienceHelp.vue";
import { mapState } from "vuex";

export default {
  components: {
          StartQuiz,
          CloseApp,
          Questions,
          CurrentAmount,
          FriendsHelp,
          AudienceHelp,
  },
  data() {
    return {
      twoIncorectAnswers: [],
      cutByHalfHelpUsed: false,
    }
  },
  methods: {
    cutOptionsByHalf(value) {
      console.log(value);
       // array of answers
      let options = ['a', 'b', 'c', 'd'];
      //takeout correct answer from options and get one wrong answer randomly
      const correctAnswer = this.correctAnswer;
      options = options.filter(function(item) {
          return item !== correctAnswer
      });
      //takout one random answer
      const randomWrongAnswer = options[Math.floor(Math.random() * options.length)];
      options = options.filter(function(item) {
          return item !== randomWrongAnswer
      });
      this.twoIncorectAnswers = options;
      this.cutByHalfHelpUsed = true;
      console.log(this.twoIncorectAnswers);
      return this.twoIncorectAnswers;

    }
  },
  computed: {
        ...mapState(['correctAnswer']),
  },
}
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-3/4 md:basis-2/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
  
      <Questions :twoIncorectAnswers="twoIncorectAnswers" />

    </div>

    <div class="basis-1/4 md:basis-1/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
      <div class="content-center">
        <CurrentAmount></CurrentAmount>
        <h3 class="text-white text-l text-bold pt-10 pb-5">
          Iskoristi pomoć:
        </h3>
          <button
              :value=this.correctAnswer
              :disabled=this.cutByHalfHelpUsed
              @click.prevent="cutOptionsByHalf($event.target.value)" 
              :class="{ 'opacity-25 cursor-not-allowed': cutByHalfHelpUsed }"
              class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
              hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
              50:50
          </button>
          <FriendsHelp/>
          <AudienceHelp/>
      </div>
    </div>
  </div>
</template>

<style>

</style>
