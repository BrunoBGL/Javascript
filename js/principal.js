
  var titulo = document.querySelector(".titulo");
  titulo.textContent = "Aparecida Nutricionista";

  var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<=pacientes.length  ; i++){

  var paciente = pacientes[i]
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var pesoValido = true;
  var alturaValido = true;
  var tdImc =  paciente.querySelector(".info-imc");


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
    tdImc.textContent = imc.toFixed(2);
  }
}
  console.log(imc);
