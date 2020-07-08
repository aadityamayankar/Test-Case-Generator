const randstrgen=(size,chars)=>{
    var string = "";
    for(var i=0;i<size;i++){
        string+=chars[Math.round(Math.random() * (chars.length - 1))];
    } 
    return string;
}

function stringGen(size,chars){
    chars = chars===''? "qwertyuioplkjhgfdsazxcvbnm" : chars;
    var result="";
    result+=randstrgen(size,chars)+'\n';
    return result;
};

module.exports = stringGen;