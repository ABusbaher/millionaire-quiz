<script>
import CloseApp from "../components/buttons/CloseApp.vue";
import StartQuizNewTab from "../components/buttons/StartQuizNewTab.vue";
export default {
  components: {
          StartQuizNewTab,
          CloseApp
  },
}
</script>

<template>
  <main class="pb-20 pt-20">
    <h1 class="text-5xl text-white text-center font-bold mb-10">
      Želite li da postanete milioner?
    </h1>
     <div class="flex justify-center">
      <StartQuizNewTab class="m-auto mr-5"/>
        <img
        class="h-70 w-96"
        alt="Milioner"
        src="@/assets/images/Milioner-modified.png"
        />
      <CloseApp class="m-auto ml-5"/>
    </div>
  </main>
</template>
