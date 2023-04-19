function capitalize(s){
    const uc = s.split('').map((el,index)=>index%2 === 0 ? el.toUpperCase() : el).join('')
    const lc = s.split('').map((el,index)=>index%2 !== 0 ? el.toUpperCase() : el).join('')
    return [uc,lc];
};

console.log(capitalize('codewars'))

// ("codewars"),['CoDeWaRs', 'cOdEwArS']);