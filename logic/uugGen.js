var randnumgen = require('./randnumgen');

const randuuggen=(nodes,edges)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = randnumgen(1,nodes);
        var b = randnumgen(1,nodes);
        var p = [a,b];
        var rev_p = [b,a];

        while(container.has(`${p[0]},${p[1]}`) || container.has(`${rev_p[0]},${rev_p[1]}`)){
            var a = randnumgen(1,nodes);
            var b = randnumgen(1,nodes);
            var p = [a,b];
            var rev_p = [b,a];

        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{string+=elem.replace(/,/g,' ')+'\n'});
    return string;
}

function uugGen(uug_nodes,uug_edges){
    uug_nodes=Number(uug_nodes);
    uug_edges=Number(uug_edges);
    var result = "";
    result+=randuuggen(uug_nodes,uug_edges);
    return result;
}

module.exports = uugGen;