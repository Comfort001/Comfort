 
var data = [ 
 
    {
        principal: 2500, 
        Time: 1.8
    },
    {
        principal: 1000,
        Time: 5
    },
    {
        principal: 3000,
        Time: 1
    },
    {
        principal: 2000,
        Time: 3
    }
    
];
    interestCalculator(data); 
function interestCalculator (arr){
    var rate = 0;
    var interestData = arr;
    var interest = 0;
    for (var i = 0; i < data.length; i++){
    if (interestData[i].principal >= 2500 && interestData[i].Time > 1 && interestData[i].Time <= 3){
        rate = 3;
        interestData[i].rate = 3; 
        interest = (interestData[i].principal * interestData[i].Time * rate)/100;
        interestData[i].interest = interest;
    } else if(interestData[i].principal >= 2500 && interestData[i].Time >= 3 ){
        rate = 4;
        interestData[i].rate = rate; 
        interest = (interestData[i].principal * interestData[i].Time * rate)/100;
        interestData[i].interest = interest;
    }
    else if(interestData[i].principal <= 2500 && interestData[i].Time <= 1 ){
        rate = 2;
        interestData[i].rate = rate; 
        interest = (interestData[i].principal * interestData[i].Time * rate)/100;
        interestData[i].interest = interest;
    } else{
        rate = 1;
        interestData[i].rate = rate; 
        interest = (interestData[i].principal * interestData[i].Time * rate)/100;
        interestData[i].interest = interest;
    }
 
    }
    console.log(interestData);
    return interestData;
}

