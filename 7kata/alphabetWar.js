function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}


//Test.assertEquals( alphabetWar("z") , "Right side wins!" );
// Test.assertEquals( alphabetWar("zdqmwpbs") , "Let's fight again!" );
// Test.assertEquals( alphabetWar("zzzzs"), "Right side wins!" );
// Test.assertEquals( alphabetWar("wwwwww"), "Left side wins!" );

// left
// w - 4
// p - 3
// b - 2
// s - 1


// right
// m - 4
// q - 3
// d - 2
// z - 1