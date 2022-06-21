//declarar os inputs e outputs 
//criar uma fução para ouvir o option no select 
//criar função inserindo no JS os textos e imgs do output
//colocar as funções dentro da função de ouvir

let regiao = { "brasil": '',
"norte": '',
"nordeste": '',
"centroOeste": '',
"sudeste": '',
"sul": '',}

let entradaNorte = document.querySelector( "norteOption") 
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


 
   
   

     