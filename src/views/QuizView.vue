<script>
import CloseApp from "../components/buttons/CloseApp.vue";
import StartQuiz from "../components/buttons/StartQuiz.vue";
import Questions from "../components/Questions.vue";
import CurrentAmount from "../components/CurrentAmount.vue";

export default {
  components: {
          StartQuiz,
          CloseApp,
          Questions,
          CurrentAmount,
  },
}
</script>

<template>

  
  <div class="flex flex-row">
    <div class="basis-3/4 md:basis-2/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
  
      <Questions />
      
    </div>

    <div class="basis-1/4 md:basis-1/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
      
      <CurrentAmount/>
      <h3 class="text-white text-l text-bold text-center pt-10 pb-5">
        Iskoristi pomoć:
      </h3>
      <div class="flex justify-center">
        <button 
            class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
            hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
            <font-awesome-icon icon="fa-phone" />
        </button>

        <button 
            class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
            hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
            <font-awesome-icon icon="fa-solid fa-people-group" />
        </button>

        <button 
            class="bg-white hover:bg-blue-800 text-blue-900 font-semibold 
            hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded mr-3">
            50:50
        </button>
      </div>
    </div>
  </div>
</template>

<style>

</style>
