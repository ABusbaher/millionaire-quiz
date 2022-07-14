<script>
import CloseApp from "../components/buttons/CloseApp.vue";
import StartQuiz from "../components/buttons/StartQuiz.vue";
import Questions from "../components/Questions.vue";

export default {
  components: {
          StartQuiz,
          CloseApp,
          Questions,
  },
}
</script>

<template>

  
  <div class="flex flex-row">
    <div class="basis-3/4 md:basis-2/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
  
      <Questions />
      
    </div>

    <div class="basis-1/4 md:basis-1/3 border rounded border-black outline outline-4 outline-blue-700 pl-10 pr-10 pb-20">
      <div class="grid grid-cols-3 gap-1">
        <div></div>
        <div>
          <h3 class="text-white text-center text-xl text-bold pt-10 pb-5">
          Trenutna suma
          </h3>
          <table class="border-separate border border-white text-white w-full text-right">
          <tbody>
            <tr>
              <td class="border border-white p-3">1.000.000</td>
            </tr>
            <tr>
              <td class="border border-white p-3">500.000</td>
            </tr>
            <tr>
              <td class="border border-gray-400 text-gray-400 p-3">100.000</td>
            </tr>
            <tr>
              <td class="border border-white p-3">50.000</td>
            </tr>
            <tr>
              <td class="border border-blue-800 bg-white text-blue-800 p-3">10.000</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

     
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
