array = document.querySelector('textarea[name="array"]')
btn = document.querySelector('#btn-search')
toSearch = document.querySelector('input[name="toSearch"]')








doSearch = function(array, targetValue) {
    var min = array.length- array.length;
    var max = array.length - 1 ;
    var guess;
    n_pasos = 0;
    while(min <= max){
        guess =  Math.floor((min + max) / 2);
        n_pasos++;
        if(array[guess] == targetValue){ 
            console.log('----FINALIZADO----')
           console.log(`indice: ${guess}, ${array[guess]} Encontrado`);
            console.log("tardo",n_pasos,"pasos en terminar " )
            return 0
         }
        else if(array[guess] < targetValue){
            min = guess + 1;         
        
                
        }
        else{ 
             max = guess - 1;
             
             }
   console.log("numero de Ciclos:",n_pasos)
    }
    console.error('este numero no se encuentra en la lista')
    return -1;
};



btn.addEventListener('click', ()=>{
    text = array.value;
    trimText = text.replace(/ /g, "")

    textSearch = toSearch.value;


    doSearch(trimText.split(','), textSearch)
    alert('revisa la consola')
})




