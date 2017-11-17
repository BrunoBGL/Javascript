
var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<=pacientes.length  ; i++){

  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var pesoValido = true;
  var alturaValido = true;


  if(peso <=0 || peso>=1000){
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
    }

  if (altura <=0 || altura >=3){
    alturaValido = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");

  }

  if(alturaValido && pesoValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = calculaImc(altura , peso);
  }
}

function calculaImc (peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
