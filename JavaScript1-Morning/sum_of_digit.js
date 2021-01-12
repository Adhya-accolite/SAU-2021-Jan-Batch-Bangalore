function sum(text){
    var res=0;
    var num=parseInt(text);
    while(num>0){
        res=res+num%10;
        num=Math.floor(num/10);
    }
    return res;

}
sum("123");