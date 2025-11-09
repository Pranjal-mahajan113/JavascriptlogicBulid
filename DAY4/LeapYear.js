function isleapyear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }



}
console.log(isleapyear(2023));