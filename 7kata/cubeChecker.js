var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
};