<template>
    <section id="projects">
        <h1 class="text-color-[#EFEFF0] font-serif mb-3.5">Projetos</h1>
        <h2 class="text-color-[#EFEFF0] text-xsm mb-96">Passe o mouse pelas fotos para ampliá-las e clique nos cards para ver o código de cada projeto.</h2>

        <div>
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
        </div>
    </section>

</template>

<script setup>
import Card1 from './projects/Card1.vue';
import Card2 from './projects/Card2.vue';
import Card3 from './projects/Card3.vue';
import Card4 from './projects/Card4.vue';
import Card5 from './projects/Card5.vue';
</script>

<style>
#projects{
    padding-top: 10%;
    margin-bottom: 12%;
}
</style>