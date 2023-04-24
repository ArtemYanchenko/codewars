function alienLanguage(str){
    return str.split(' ').map(el=>el.slice(0,-1).toUpperCase() + el.substring(el.length-1).toLowerCase()).join(' ');
}


console.log(alienLanguage("My name is John"))
// ("My name is John") , "My NAMe Is JOHn");