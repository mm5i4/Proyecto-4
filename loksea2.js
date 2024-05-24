$(document).ready(
    function(){
          $("#login").on("click",function(){
            //let name = $("#usuario").val()
            if( $("#usuario").val() == ""){
              alert("Falta ingresar el nombre de usuario")
              return
            }
            if( $("#password").val() == ""){
              alert("Falta ingresar la contrasena")
              return
            }
            if( $("#usuario").val() != "" && $("password").val() != ""){
              window.location.href = "respuesta.html";
              return
            }
          })
          $("#borrar").on("click",function(){
             $ ("input").val('') 
          })
          
    }
)