function minSum(arr,k){
    //intialize a result variable............
    let result=0;
    // k times loop
    for(let x =0; x<k;  x++){
      //pick a random element from given array
      let element =arr[Math.floor(Math.random() * arr.length)];
      //replace element after math calculation in to given array........
      arr.splice(arr.findIndex(cu => element === cu),1,Math.round(element/2));
    };
    
    //sum the final output from the modified array......... 
    arr.forEach(cu=>{
       result = result + cu;
    });
    
    //final result is here  \|/                   
    return result;
}
