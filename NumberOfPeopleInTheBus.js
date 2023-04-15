var number = function (busStops) {
    let newArr0 = busStops.map(el => el[0])
    let newArr1 = busStops.map(el => el[1])
    return (newArr0.reduce((acc,el)=>acc+el) - newArr1.reduce((acc,el)=>acc+el))
}


console.log(number([[10, 0], [3, 5], [5, 8]])) // 5