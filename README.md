# MinSum Solution
 
  Desciption- we need to find minSum from the given array with the help of k times. Here ew have minSum function which is accepts 2 parameter those are array_integer and k integer.pick any item from array on every k time, look at sample example.......
  
    inputs :
             arr=[10,20,7],k=4
    output : 
             14 (may be different)
             
   Execution explanation :-
   
        inputs : arr=[10,20,7],k=4
        
        pick  pick/2  round  replaced_array
        7      3.54     4     [10,20,4]
        10      5       5     [5,20,4]
        20      10      10    [5,10,4]
        10      5        5    [5,5,4]
      
       output : 5+5+4 =14
    
