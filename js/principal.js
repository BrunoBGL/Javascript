
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;

var pesoValido = true;
var alturaValido = true;
var tdImc =  paciente.querySelector(".info-imc");

if(peso <=0 || peso>=1000){
  pesoValido = false;
  tdImc.textContent = "Peso Inválido";
}

if (altura <=0 || altura >=3){
  alturaValido = false;
  tdImc.textContent = "Altura Inválida";
}

if(alturaValido && pesoValido){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}


console.log(imc);
