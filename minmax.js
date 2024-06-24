function differenceInAges(ages){
    let max = Math.max(...ages);
     let min = Math.min(...ages);
     
     return [max,min,(max-min)];
   }
   console.log(differenceInAges([82, 15, 6, 38, 35]));