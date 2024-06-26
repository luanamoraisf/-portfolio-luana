<script setup>
import NavBar from './components/NavBar.vue';
import StartScreen from './components/StartScreen.vue'
import AboutMe from './components/AboutMe.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <NavBar />
  <StartScreen />
  <AboutMe/>
  <Projects/>
</template>

<style>
body {
  background-color:#1a1d22;
}
body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: #1A1D22;
}

body::-webkit-scrollbar-thumb {
  background-color: #be61c0;
  border-radius: 20px;
}
</style>
