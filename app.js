
//criar uma fução para ouvir o option no select 
//criar função inserindo no JS os textos e imgs do output
//colocar as funções dentro da função de ouvir

//declarar valor dos inputs
let regiao = { "brasil": '',
"norte": '',
"nordeste": '',
"centroOeste": '',
"sudeste": '',
"sul": '',}

//declarar os inputs e outputs 
let entradaNorte = document.querySelector( "norte") 
let saidaNorte = document.querySelector( ".norte")



//criar uma fução para ouvir o option no select 
function(){
entradaNorte.addEventListener(
 "change", checar )
 }
  
 //escuta o evento de preencher p/ criar o loop
     function identificarEstado(){       
          if (option =="") {
           habilitar.disabled = true; 
                                      } 
         else {
         habilitar.disabled = false;}
       }


 
   
   

     