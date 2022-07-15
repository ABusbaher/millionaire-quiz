<script>
import CloseApp from "../components/buttons/CloseApp.vue";
import StartQuiz from "../components/buttons/StartQuiz.vue";
import Questions from "../components/Questions.vue";
import CurrentAmount from "../components/CurrentAmount.vue";
import FriendsHelp from "../components/FriendsHelp.vue";
import AudienceHelp from "../components/AudienceHelp.vue";

export default {
  components: {
          StartQuiz,
          CloseApp,
          Questions,
          CurrentAmount,
          FriendsHelp,
          AudienceHelp,
  },
}
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-3/4 md:basis-2/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
  
      <Questions />
      
    </div>

    <div class="basis-1/4 md:basis-1/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
      <div class="content-center">
        <CurrentAmount/>
        <h3 class="text-white text-l text-bold pt-10 pb-5">
          Iskoristi pomoć:
        </h3>
          <button 
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
