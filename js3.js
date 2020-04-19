const divisible = (number) => {
    const c =[];
    const tester = [
        {number:2, letter:"yu"}
        {number:3, letter:"gi"}
        {number:5, letter:"oh"}
    ]
    for (let i = 1; i < number +1; i++) {
        let monounit=""
        for (let a = 0; a < tester.length; a++) {
            if (i % tester[a].number ===0) {
                if (!monounit) {
                    monounit = tester[a].letter;
  } else {
      monounit = monounit + "-" + tester[a].letter;
       }
     }  
   }
if (!monounit) {
    monounit = i
   }
   c.push(monounit)
      return c;
}
         console.log(divisible(100));
         console.log(divisible(30));
 
 
         
    
            
        

