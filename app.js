
//declarar os inputs e outputs 
let seletorRegiao = document.querySelector(".selecaoRegiao select")

//ouvir evento de change 

seletorRegiao.addEventListener( "change", ouvirChange)

function ouvirChange() { 
   let regiaoSelecionada= seletorRegiao.value
   let patrimonioSelecionado= 'natural'
   let output=document.querySelector("[data-texto-regiao ='" + regiaoSelecionada + "-" + patrimonioSelecionado +"']") 
   //$ = sintax para substituir na stringe  o valor que estiver dentro do {} ex: `[data-texto-regiao="${regiaoSelecionada}"]`
   
    output.style.display="block"
      console.log("[data-texto-regiao ='" + regiaoSelecionada +"']" )
      alterarPopup 
 }

//crio outro seletor e colocar dentro da função change data-texto-regiao






function alterarPopup ( )  { 
    //pega o elemento da classe popup1 e cria uma classe ativa
    documento . getElementById ( "popup-1" ) . classList . alternar ( "ativa" ) ;
     }





 

 
 



 
   
   

     