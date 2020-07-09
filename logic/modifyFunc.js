var numberGen = require('./numberGen');
var arrayGen = require('./arrayGen');
var stringGen = require('./stringGen');
var uwtreeGen = require('./uwtreeGen');
var wtGen = require('./wtGen');
var dugGen = require('./dugGen');
var dwgGen = require('./dwgGen');
var uugGen = require('./uugGen');

function modifyFunc(resultObj){
    var answer={},string = "";
    var testcase = resultObj.test_case;
    const inputlist = resultObj.inputList;
    while(testcase-->0){
        for(var i in inputlist){
            if(inputlist[i].id!==null){
               switch(inputlist[i].type){
                   case "num":
                        string += numberGen(inputlist[i].num_min_value,inputlist[i].num_max_value);
                        break;
                    case "arr":
                        string += arrayGen(inputlist[i].arr_dim,inputlist[i].arr_min_value,inputlist[i].arr_max_value);
                        break;
                    case "str":
                        string += stringGen(inputlist[i].str_size,inputlist[i].chars);
                        break;
                    case "ut":
                        string += uwtreeGen(inputlist[i].ut_nodes);
                        break;
                    case "wt":
                        string += wtGen(inputlist[i].wt_nodes,inputlist[i].wt_min_weight,inputlist[i].wt_max_weight);
                        break;
                    case "dug":
                        string += dugGen(inputlist[i].dug_nodes,inputlist[i].dug_edges);
                        break;
                    case "dwg":
                        string += dwgGen(inputlist[i].dwg_nodes,inputlist[i].dwg_edges,inputlist[i].dwg_min_weight,inputlist[i].dwg_max_weight);
                        break;
                    case "uug":
                        string += uugGen(inputlist[i].uug_nodes,inputlist[i].uug_edges);
                        break;
                    default:
                        string = "NULL";
               }
            }
        }
        answer["answer"]=string;
    }
    return answer;
}

module.exports = modifyFunc;