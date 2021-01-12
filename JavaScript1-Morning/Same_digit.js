function same(number){
    var digit=Math.floor(number%10);
    while(number>0){
        if(digit!==number%10){
            return "Digits are not same";
        }
        number=Math.floor(number/10);
    }
    return "Digits are same";
}
same(22222);