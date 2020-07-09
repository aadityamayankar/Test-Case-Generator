var randnumgen = require('./randnumgen');

class Tree {
    constructor(nodes) {
        this.nodes = nodes;
        this.adj = Array.from({length: nodes}, () => []);
    }
    addEdge(n, w) {
        this.adj[n].push(w);
    }
    descendants(node) {
        let visited = new Set([node]);
        for (let node of visited) {
            for (let elem of this.adj[node]) {
                if (!visited.has(elem)) visited.add(elem);
            }
        }
        return visited;
    }
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randtreegen(nodes) {
    let string = "";
    let t = new Tree(nodes);
    let [root, ...children] = shuffle([...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do {
            a = randnumgen(0, nodes-1); // make zero based
        } while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b]);
    }
    string+=edges.join('\n').replace(/,/g,' ');
    return string
}

function uwtreeGen(tree_nodes) {
    tree_nodes = Number(tree_nodes);
    var result = "";
        result += randtreegen(tree_nodes) + '\n';
    return result;
}

module.exports = uwtreeGen;