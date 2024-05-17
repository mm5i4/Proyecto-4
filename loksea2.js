$(document).ready(
    function(){
          $("#login").on("click",function(){
            //let name = $("#usuario").val()
            if( $("#usuario").val() == ""){
              alert("Falta ingresar el nombre de usuario")
            } 
          })
          $("#borrar").on("click",function(){
             $ ("input").val('') 
          })
    }
)