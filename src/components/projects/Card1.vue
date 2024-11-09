<template>
    <a href="https://github.com/luanamoraisf/economico" target="blank">
        <div id="card1" class="w-96 rounded-3xl ml-3 cursor-pointer"></div>

        <div id="label1" class="w-7 h-9 rounded-full"></div>
        <div id="label2" class="w-7 h-9 rounded-full"></div>
        <div id="label3" class="w-7 h-9 rounded-full"></div>


        <h2 class="technology1">Tailwind</h2>
        <h2 class="technology2">Laravel</h2>
        <h2 class="technology3">MySQL</h2>

        <h2 class="project1">Econômico</h2>
        <h2 class="text1">Aplicação com sistema de autenticação <br> desenvolvido com o intuito de auxiliar <br> jovens e adultos no controle financeiro.</h2>

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
    margin-left: 2.8%;
}
#label3{
    border-right: 70px solid #be61c0;
    border-left: 70px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -643px;
    margin-left: 15.4%;
}
.technology1{
    color: #EFEFF0;
    font-size: 20px;
    margin-bottom: 50%;
    margin-top: -52.7%;
    margin-right: 32.5%;
}
.technology2{
    color: #EFEFF0;
    font-size: 20px;
    margin-bottom: 50%;
    margin-top: -52.5%;
    margin-right: 82.6%;
}
.technology3{
    color: #EFEFF0;
    font-size: 20px;
    margin-bottom: 50%;
    margin-top: -52.5%;
    margin-right: 57.5%;
}
.project1{
    color: #1A1D22;
    font-size: 30px;
    margin-bottom: 50%;
    margin-top: -48%;
    margin-right: 81%;
    font-weight: bold;
}
.text1{
    color: #1A1D22;
    font-size: 19px;
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