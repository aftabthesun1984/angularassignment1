var getPrice  = (price:number, discount:number)=> { 
    
    const totalValue = price - (price * (discount/100))
    console.log("Total Price with Discount : "+ totalValue)     
    }     
    getPrice (120,50)