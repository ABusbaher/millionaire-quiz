<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/quiz">Quiz</RouterLink>
        <RouterLink to="/score">Quiz score</RouterLink>
      </nav>
    </div>
  </header>
  <div class="bg-gradient-to-r from-sky-500 to-indigo-500">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
