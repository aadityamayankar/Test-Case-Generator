# Test Case Generator 

This is a Test case generator single page appplication, made for competitive programers to help in stress testing.

**NOTE:** This only generates random numbers, arrays, strings, trees and graphs.

## Getting Started

[Click Here](https://test-case-gen.herokuapp.com/) to use the deployed app on Heroku.

To get a copy of this app on your local machine, follow the step below.

### Prerequisites

Install the lastest stable version or higher version of 
* git
* node


### Installing

1. clone this repository

```
git clone https://github.com/aadityamayankar/Test-Case-Generator.git
```

2. cd into `Test-Case-Generator`

3. Install node dependencies

```
npm install
```

4. Run the script below to serve front and back end concurrently

```
npm run dev
```

## How Does it Work?

## Front End

Using [React](https://react.com) I could conditionaly render different pages, each for each of the data structures and one the home screen.

To track the overall state of the app I am using [react-redux](https://react-redux.js.org/), which is a very useful package for tracking and making changes to the state in a complex heirarchy of components.

To appropriately take and validate user inputs for the form fields I am using [react-hook-form](https://react-hook-form.com/). This package allows easier form way to validate data and also improves performance by reducing the number of re-renders on uncontrolled components.

And finally, for the UI I'm using [material-ui](https://material-ui.com/) which provides the ability to design by providing react components which can be used easily.

## Logic

*data generated is not truly random and can still be predicted as I'm using javascript's random function. It should however, suffice for it's purpose.*

### Random Number

A `randnumgen` function that takes the parameters of lower and upper limit, generates a random number within the inclusive limit.

```javascript
const randnumgen=(min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(
        Math.random()*(max-min+1)) + min;
}
```

### Random Array

A `randarrgen` function that takes the parameters of dimension (two comma separated numbers), lower, and upper limit, generates a random array of the given dimension, having the elements within the inclusive limit.

```javascript
const randarrgen=(dim,min,max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    var string = "";
    const row = dim[0], col = dim[1];
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            const num = Math.floor(Math.random()*(max - min + 1))+min;
            string+=num+' ';
        }
        string+='\n';
    }
    return string;
}
```

### Random String/Char

A `randstrgen` function that takes the parameters of size and chars (defualted to [a-z]), generates a random string from the given characters.

```javascript
const randstrgen=(size,chars)=>{
    var string = "";
    for(var i=0;i<size;i++){
        string+=chars[Math.round(
        Math.random() * (chars.length - 1))];
    } 
    return string;
}
```

### Random Unweighted Tree

A `randutgen` function that takes the parameter of number of nodes, generates a random unweighted tree.

It prints two space separated numbers `a` and `b`, that represent an edge of the tree where `a` is the parent of `b`.

```javascript
class Tree {
    constructor(nodes){
        this.nodes = nodes;
        this.adj = Array.from({length: nodes}, 
        () => []);
    }
    addEdge(n, w){
        this.adj[n].push(w);
    }
    descendants(node){
        let visited = new Set([node]);
        for (let node of visited) {
            for (let elem of this.adj[node]) {
                if (!visited.has(elem)){
                    visited.add(elem);
                } 
            }
        }
        return visited;
    }
}

function shuffle(array){
    for (var i = array.length-1;i>0;i--){
        var j = Math.floor(
            Math.random()*(i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randutgen(nodes){
    let string = "";
    let t = new Tree(nodes);
    let [root, ...children] = shuffle(
        [...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do{
            a = randnumgen(0, nodes-1);
        }while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b]);
    }
    string+=edges.join('\n').replace(/,/g,' ');
    return string;
}

```

### Random Weighted Tree

A `randwtgen` function that takes the parameter of number of nodes, lower and upper limit of weight of an edges, generates a random weighted tree.

It prints two three space separated numbers `a`, `b` and `w`, that represent an edge of the tree where `a` is the parent of `b` having the weight of `w`.

```javascript
class Tree {
    constructor(nodes) {
        this.nodes = nodes;
        this.adj = Array.from({length: nodes},
        () => []);
    }
    addEdge(n, w) {
        this.adj[n].push(w);
    }
    descendants(node) {
        let visited = new Set([node]);
        for (let node of visited) {
            for (let elem of this.adj[node]) {
                if(!visited.has(elem)){
                    visited.add(elem);
                }
            }
        }
        return visited;
    }
}

function shuffle(array){
    for (var i = array.length - 1; i > 0; i--){
        var j = Math.floor(
            Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function randwtgen(nodes,min_weight,max_weight){
    let string = "";
    let t = new Tree(nodes);
    let [root, ...children] = 
    shuffle([...Array(nodes).keys()]);
    let edges = [];
    let a;
    for (let b of children) {
        do{
            a = randnumgen(0, nodes-1);
        }while (t.descendants(b).has(a));
        t.addEdge(a, b);
        edges.push([a, b,randnumgen(min_weight,max_weight)]);
    }
    string+=edges.join("\n").replace(/,/g,' ');
    return string
}
```

### Random Directed Unweighted Graph

A `randduggen` function that takes the parameters of number of nodes and edges, generates a random directed graph.

It prints two space separated numbers `a` and `b`, that represent an edge directed from `a` to `b`.

```javascript
const randduggen=(nodes,edges)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = randnumgen(1,nodes);
        var b = randnumgen(1,nodes);
        var p = [a,b];
        while(container.has(`${p[0]},${p[1]}`){
            var a = randnumgen(1,nodes);
            var b = randnumgen(1,nodes);
            var p = [a,b];
        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{
    string+=elem.replace(/,/g,' ')+'\n'});
    return string;
};
```

### Random Directed Weighted Graph

A `randdwggen` function that takes the parameters of number of nodes, edges, lower, and upper limit of weight, generates a random directed weighted graph.

It prints three space separated numbers `a`, `b`, and `w` that represent an edge directed from `a` to `b`, having the weight of `w` inclusive of the given range.

```javascript
const randdwggen=(nodes,edges,min_weight,max_weight)=>{

    var string = "";
    var container = new Set();

    for(var i=1;i<=edges;i++){
        var a = randnumgen(1,nodes);
        var b = randnumgen(1,nodes);
        var p = [a,b];
        while(container.has(`${p[0]},${p[1]}`))
        {
            var a = randnumgen(1,nodes);
            var b = randnumgen(1,nodes);
            var p = [a,b];

        }
        container.add(`${p[0]},${p[1]}`);
    }

    container.forEach((elem)=>{
        string+=elem.replace(/,/g,' ')+" "+randnumgen(min_weight,max_weight)+'\n'});
    return string;
};
```

### Random Undirected Unweighted Graph

A `randuuggen` function that takes the parameters of number of nodes and edges, generates a random undirected unweighted graph.

It prints two space separated numbers `a` and `b` that represent an un-directed edge directed from `a` to `b`.

```javascript
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

    container.forEach((elem)=>{
        string+=elem.replace(/,/g,' ')+'\n'});
    return string;
}

```

## Built With

* [React](https://reactjs.org/) - Framework used for making the front end.
* [React-hook-form](https://https://react-hook-form.com/) - Used for making and validating forms.
* [Material UI](https://material-ui.com/) - Used for making the UI/UX.
* [Express](https://expressjs.com/) - Framework used for making the back end.


## License

This project is licensed under the MIT License 

## Acknowledgments

* [This](https://www.geeksforgeeks.org/test-case-generation-set-4-random-directed-undirected-weighted-and-unweighted-graphs/) article from GeeksforGeeks helped me form the algorithm for graphs.
* I'd like to thank [trincot](https://stackoverflow.com/users/5459839/trincot) who helped me improve my algorithm to generate trees.

