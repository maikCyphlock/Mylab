function binarySearch(array, item) {
    function recursive(min, max) {
        //si el elemento a buscar no está entonces cierre 
        if(min > max){
            return -1;
        }
        
        var middle = Math.floor((min + max) / 2);

        // si Middle es igual a elemento a buscar detente
        if (array[middle] === item) {
            return console.log(`${array[middle]} encontrado en la pocisión ${middle}`)
        }
        // si middle es mayor que elemento a buscar entonces max es middle menos 1
        if (array[middle] > item) {
            return recursive(min, middle - 1)
        }
        // si middle es mayor que elemento a buscar entonces min es middle más 1
        return recursive(middle + 1, max)
    }
    return recursive(0, array.length - 1)
}


 var box = [12,33,44,55,66,222,550,444,480,1232,3333]


binarySearch(box , 3333)