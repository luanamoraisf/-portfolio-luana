<template>
    <section id="about-me">
        <div class="text-[#EFEFF0] font-serif flex justify-between mt-28 mb-12">
            <h1>Formação Acadêmica</h1>
            <h1>Experiência Profissional</h1>
        </div>
        
        <div id="line-education"></div>
        <div id="line-professional"></div>

        <div id="line-horizontal1"></div>
        <div id="line-horizontal2"></div>
        <div id="line-horizontal3"></div>
        <div id="line-horizontal4"></div>

        <div id="college" class="text-[#EFEFF0] text-xsm">
            <h2>Análise e Desenvolvimento de Sistemas</h2>
            <h2>Centro Universitário Maurício de Nassau</h2>
            <h2 class="edu">2021 - 2024</h2>
        </div>
        
        <div id="technical">
            <h2 class="course">Informática para Internet</h2>
            <h2>Instituto Federal de Pernambuco - IFPE</h2>
            <h2 class="edu">2019 - 2021</h2>
        </div>

        <div id="internship1">
            <h2>Desenvolvedora de Software FullStack</h2>
            <h2 class="startup1">Viitra Inovações</h2>
            <h2 class="date">04/2022 - 06/2024</h2>
        </div>
        
        <div id="internship2">
            <h2>Desenvolvedora de Software FullStack</h2>
            <h2 class="startup2">Verdanatec Soluções em TI</h2>
            <h2 class="date">07/2021 - 02/2022</h2>
        </div>
    </section>
    
</template>

<script>
export default {

}
</script>

<style>
#about-me{
    padding-top: 1%;
    margin-top: -42%;
    margin-bottom: 25%;
}
#line-education{
    height: 600px;
    border-left: 2px solid #be61c0;
}
#line-professional{
    height: 600px;
    border-right: 2px solid #be61c0;
    margin-top: -49.4%;
    margin-right: 40%;
}
#line-horizontal1{
    width: 30px;
    border: 1px solid #be61c0;
    margin-top: -40%;
}
#line-horizontal2{
    width: 30px;
    border: 1px solid #be61c0;
    margin-top: 20%;
}
#line-horizontal3{
    width: 30px;
    border: 1px solid #be61c0;
    margin-left: 60%;
    margin-top: -0.2%;
}
#line-horizontal4{
    width: 30px;
    border: 1px solid #be61c0;
    margin-left: 60%;
    margin-top: -20%;
}
#college{
    margin-top: -1.5%;
    margin-right: 55%;
}
#technical{
    color: #EFEFF0;
    margin-top: 11.6%;
    margin-right: 55%;
    font-size: 22px;
}
#internship1{
    color:#EFEFF0;
    font-size: 22px;
    margin-top: -27.8%;
    margin-left: 64%;
}
#internship2{
    color:#EFEFF0;
    font-size: 22px;
    margin-top: 11.7%;
    margin-left: 64%;
}
.edu{
    margin-right: 50%;
}
.course{
    margin-right: 25%;
}
.date{
    margin-right: 45%;
}
.startup1{
    margin-right: 51%;
}
.startup2{
    margin-right: 27%;
}
</style>