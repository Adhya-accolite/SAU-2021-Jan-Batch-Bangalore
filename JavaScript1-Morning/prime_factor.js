function  distinct_prime_factor(number){
    let result=[];
    for(let i=2;i<number;i++){
        if(number%i==0){
            if(check_prime(i)){
            result.push(i);
            number=number/i;
        }
    }}
    return result;
}
function check_prime(num){
    for(let i=2;i*i<=num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
distinct_prime_factor(20);