function check(num){
    if (n<=1) return false;
    for (let i=2;i<Math.sqrt(num);i++ ){
        if (num%i==0){
            return false;
        }
    }
    return true;
}