/*declarando variáveis*/
let altura = 0;
let peso = 0;
let imc = 0;

/*criando uma função para calcular o IMC*/

function calcIMC(peso, altura) {

    peso = document.getElementById('ps').value; //pegando o valor do peso
    altura = (document.getElementById('al').value) / 100; //pegando o valor da altura
    imc = peso / (altura * altura); //calculando o IMC
    window.alert("Seu IMC é: " + imc.toFixed(2)); //mostrando o imc em janela

}

function alternartemas_e() {
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro"); //adicionando a classe escuro ao corpo
}

function alternartemas_c() {
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("claro"); //adicionando a classe claro ao corpo
}