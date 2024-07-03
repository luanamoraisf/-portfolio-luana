<template>
    <h1 class="title">Projetos</h1>

    <div class="git">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        <Card5/>
    </div>
</template>

<script setup>
import Card1 from './projects/Card1.vue';
import Card2 from './projects/Card2.vue';
import Card3 from './projects/Card3.vue';
import Card4 from './projects/Card4.vue';
import Card5 from './projects/Card5.vue';
</script>

<style>
.title{
    color: #EFEFF0;
    font-family: serif;
    margin-bottom: 40%;
    margin-top: -42%;
}
.git{
    cursor: pointer;
}
</style>