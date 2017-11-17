var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input" , function(){
  var pacientes = document.querySelectorAll(".paciente");

  pacientes.forEach(function(paciente){
    var nome = paciente.querySelector(".info-nome").textContent;

    if(this.value != nome){
      paciente.classList.add("invisivel");
    }else{
      paciente.classList.remove("invisivel");
    }

  });
});
