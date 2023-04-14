function printerError(s) {
    return (`${s.replaceAll(/[a-m]/igm,'').length}/${s.length}`)
}

console.log(printerError('z1aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'))
