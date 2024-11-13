<template>
    <a href="https://github.com/luanamoraisf/economico" target="blank">
        <div id="card1" class="w-96 rounded-3xl ml-3 cursor-pointer"></div>

        <div id="label1" class="w-7 h-9 rounded-full"></div>
        <div id="label2" class="w-7 h-9 rounded-full ml-9"></div>
        <div id="label3" class="w-7 h-9 rounded-full"></div>


        <h2 id="technology1" class="text-[#EFEFF0] text-xxsm">Tailwind</h2>
        <h2 id="technology2" class="text-[#EFEFF0] text-xxsm">Laravel</h2>
        <h2 id="technology3" class="text-[#EFEFF0] text-xxsm">MySQL</h2>

        <h2 id="project1" class="text-[#1A1D22] text-sm font-bold">Econômico</h2>
        <h2 id="text1" class="text-[#1A1D22] text-xxsm">Aplicação com sistema de autenticação <br> desenvolvido com o intuito de auxiliar <br> jovens e adultos no controle financeiro.</h2>

        <div class="picture">
            <img id="picture1" src="../../assets/projects/economico2.png">
        </div>
    </a>    
</template>

<script>
export default {

}
</script>

<style>
.picture img{
   -webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
}

.picture:hover img{
    position: relative;
    z-index: 2;
   -webkit-transform: scale(1.1);
   transform: scale(1.7);
   box-shadow: 0 8px 8px 8px #616161;
}
#card1{
    height: 500px;
    border-right: 250px solid #EFEFF0;
    border-left: 250px solid #EFEFF0;
}
#label1{
    border-right: 70px solid #be61c0;
    border-left: 70px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -40%;
    margin-left: 28%;
}
#label2{
    border-right: 70px solid #be61c0;
    border-left: 70px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -643px;
}
#label3{
    border-right: 70px solid #be61c0;
    border-left: 70px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -643px;
    margin-left: 15.4%;
}
#technology1{
    margin-bottom: 50%;
    margin-top: -52.9%;
    margin-right: 32.5%;
}
#technology2{
    margin-bottom: 50%;
    margin-top: -52.6%;
    margin-right: 82.6%;
}
#technology3{
    margin-bottom: 50%;
    margin-top: -52.6%;
    margin-right: 57.5%;
}
#project1{
    margin-bottom: 50%;
    margin-top: -48%;
    margin-right: 81%;
}
#text1{
    margin-bottom: 50%;
    margin-top: -49%;
    margin-right: 58%;
}
#picture1{
    width: 500px;
    height: 264px;
    border-radius: 1px 1px 5% 5%;
    margin-top: -48%;
    margin-left: 1%;
}
</style>