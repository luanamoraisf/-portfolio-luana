<template>
    <section id="start-screen">
        <div class="data">
            <img src="/src/assets/avatar.jpg" class="avatar" />
            <h1 id="name">Olá, eu sou Luana Morais</h1>
            <h1 class="career">Desenvolvedora</h1>
            <h1 class="career">de Software FullStack</h1>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style>
#start-screen{
    padding-top: 110%;
}
.data{
    margin-top: -70em;
}
.avatar {
    width: 270px;
    height: 270px;
    border-radius: 100%;
    border: 5px solid #be61c0;
    position: relative;
}
#name {
    color: #EFEFF0;
    margin-top: -2.5em;
    margin-bottom: 2.5em;
    font-family: serif;
    font-size: 56px;
}
.career{
    color: #EFEFF0;
    font-size: 66px;
    font-family: serif;
}
</style>

