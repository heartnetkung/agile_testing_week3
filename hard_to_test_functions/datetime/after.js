function isMonday(now){
    return (now || new Date()).getDay() == 1;
}

console.log(isMonday(), isMonday(new Date('2019-10-14')));