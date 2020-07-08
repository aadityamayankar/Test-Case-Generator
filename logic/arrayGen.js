const randarrgen=(dim,min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    var string = "";
    const row = dim[0], col = dim[1];
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            const num = Math.floor(Math.random()*(max - min + 1))+min
            string+=num+' ';
        }
        string+='\n';
    }
    return string;
}

function arrayGen(dim,min,max){
    min = Number(min);
    max = Number(max);
    dim = dim.split(",");
    var result = "";
    result+=randarrgen(dim,min,max);
    return result;
}

module.exports = arrayGen;