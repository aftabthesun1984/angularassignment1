    function getEvenAndSort() {  
    var array = [2, 12, 11, 8,20, 3, 5, 7, 11, 13, 17, 22];
        
        var prime = [];     
        for(var i=0;i<=array.length;i++){
            if (array[i] % 2 === 0) {
              prime.push(array[i]);
            }
        }       
        prime.sort((a, b) => a - b)        
        console.log(prime);      
    }

    getEvenAndSort();
