var randnumgen = require('./randnumgen');

const randdwggen=(nodes,edges,min_weight,max_weight)=>{

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

    container.forEach((elem)=>{string+=elem.replace(/,/g,' ')+" "+randnumgen(min_weight,max_weight)+'\n'});
    return string;
};

function dwgGen(dwg_nodes,dwg_edges,dwg_min_weight,dwg_max_weight){
    dwg_nodes = Number(dwg_nodes);
    dwg_edges = Number(dwg_edges);
    dwg_min_weight = Number(dwg_min_weight);
    dwg_max_weight = Number(dwg_max_weight);
    var result = "";
    result+=randdwggen(dwg_nodes,dwg_edges,dwg_min_weight,dwg_max_weight);
    return result;
}

module.exports = dwgGen;