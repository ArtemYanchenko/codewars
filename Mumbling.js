function accum(s) {
    return s
        .toLowerCase()
        .split('')
        .map((el, index) => {

            return (el.repeat(index + 1) + '-')
        })
        .map(el=>el[0].toUpperCase() + el.slice(1))
        .join('')
        .slice(0, -1);
}


console.log(accum('ZpglnRxqenU'))

