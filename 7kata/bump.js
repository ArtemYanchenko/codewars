function bump(x){
    return x.split('').filter(el=>el === 'n').length > 15 ? "Car Dead" : "Woohoo!"
}


console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))

// assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");