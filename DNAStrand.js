function DNAStrand(dna){
    return dna.split('').map(el=> {
        switch (el) {
            case 'A':
                return el = 'T';
            case 'T' :
                return el = 'A';
            case 'G':
                return el = 'C';
            case 'C':
                return el = 'G';
            default:
                return el;
        }
    }).join('')
}


console.log(DNAStrand('ATTGC'))