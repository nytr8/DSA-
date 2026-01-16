   function is_abundant(nStr) {
    let sum=0;
    for (var i = 1; i <nStr ; i++) {
       if(nStr%i==0){
           sum+=i;
            }
        }
            if(sum > nStr){
        return "Yes"
    }
    return "No"
    }