var randnumgen = require('./randnumgen');

const randduggen=(nodes,edges)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = randnumgen(1,nodes);
        var b = randnumgen(1,nodes);
        var p = [a,b];
        while(container.has(`${p[0]},${p[1]}`)){
            var a = randnumgen(1,nodes);
            var b = randnumgen(1,nodes);
            var p = [a,b];
        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{string+=elem.replace(/,/g,' ')+'\n'});
    return string;
};

function dugGen(dug_nodes,dug_edges){
    dug_nodes = Number(dug_nodes);
    dug_edges = Number(dug_edges);
    var result = "";
    result+=randduggen(dug_nodes,dug_edges);
    return result;
}

module.exports = dugGen;