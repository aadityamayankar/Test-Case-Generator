var randnumgen=require('./randnumgen');

function numberGen(min,max){
    min = Number(min);
    max = Number(max);
    var result = "";
    result+=randnumgen(min,max)+'\n';
    return result;
}

module.exports=numberGen;