var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click" , function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET" , "https://api-pacientes.herokuapp.com/pacientes");
  xhr.send();
  xhr.addEventListener("load" , function(){

    if(xhr.status == 200){
      document.querySelector("#erro-ajax").classList.add("invisivel");
      var resposta  = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
      adicionaPaciente(paciente);
      });
    }else{
      document.querySelector("#erro-ajax").classList.remove("invisivel");
    }

  });

});
