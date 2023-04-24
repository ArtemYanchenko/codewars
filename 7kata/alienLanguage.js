function alienLanguage(str){
    return str.split(' ').map(el=>el.toUpperCase() + el.substring()).join(' ');

}


console.log(alienLanguage("My name is John"))
// ("My name is John") , "My NAMe Is JOHn");