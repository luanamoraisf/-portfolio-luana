<template>
    <section id="about-me"></section>
    <div class="information">
        <h1>Formação Acadêmica</h1>
        <h1>Experiência Profissional</h1>
    </div>
    
    <div id="line-education"></div>
    <div id="line-professional"></div>

    <div id="line-horizontal1"></div>
    <div id="line-horizontal2"></div>
    <div id="line-horizontal3"></div>
    <div id="line-horizontal4"></div>

    <div id="college">
        <h2>Análise e Desenvolvimento de Sistemas</h2>
        <h2 class="edu">UNINASSAU</h2>
        <h2 class="edu">2021 - 2024</h2>
    </div>
    
    <div id="technical">
        <h2 class="course">Informática para Internet</h2>
        <h2>IFPE - Instituto Federal de Pernambuco</h2>
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
</template>

<script>
export default {

}
</script>

<style>
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
.information{
    margin-top: 24%;
    color: #EFEFF0;
    font-family: serif;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
}
#line-horizontal1{
    width: 30px;
    border: 1px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -40%;
}
#line-horizontal2{
    width: 30px;
    border: 1px solid #be61c0;
    margin-bottom: 50%;
    margin-top: -30%;
}
#line-horizontal3{
    width: 30px;
    border: 1px solid #be61c0;
    margin-left: 60%;
    margin-bottom: 50%;
    margin-top: -50.4%;
}
#line-horizontal4{
    width: 30px;
    border: 1px solid #be61c0;
    margin-left: 60%;
    margin-bottom: 50%;
    margin-top: -70%;
}
#college{
    color: #EFEFF0;
    margin-top: -51.6%;
    margin-bottom: 55%;
    margin-right: 55%;
    font-size: 22px;
}
#technical{
    color: #EFEFF0;
    margin-top: -43%;
    margin-bottom: 50%;
    margin-right: 55%;
    font-size: 22px;
}
#internship1{
    color:#EFEFF0;
    font-size: 22px;
    margin-top: -78.2%;
    margin-bottom: 80%;
    margin-left: 64%;
}
#internship2{
    color:#EFEFF0;
    font-size: 22px;
    margin-top: -68.2%;
    margin-bottom: 70%;
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