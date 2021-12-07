// Copyright (c) 2021 Carlos Carias
// 201503750
// INTELIGENCIA ARTIFICIAL 1

function countState(states, counter){
    if (states[0] == "A" & states[1] == "DIRTY" & states[2] == "DIRTY") counter[0] = counter[0]  + 1;
    else if (states[0] == "A" & states[1] == "DIRTY" & states[2] == "CLEAN") counter[1] = counter[1]  + 1;
    else if (states[0] == "A" & states[1] == "CLEAN" & states[2] == "DIRTY") counter[2] = counter[2]  + 1;
    else if (states[0] == "A" & states[1] == "CLEAN" & states[2] == "CLEAN") counter[3] = counter[3]  + 1;
    else if (states[0] == "B" & states[1] == "DIRTY" & states[2] == "DIRTY") counter[4] = counter[4]  + 1;
    else if (states[0] == "B" & states[1] == "DIRTY" & states[2] == "CLEAN") counter[5] = counter[5]  + 1;
    else if (states[0] == "B" & states[1] == "CLEAN" & states[2] == "DIRTY") counter[6] = counter[6]  + 1;
    else if (states[0] == "B" & states[1] == "CLEAN" & states[2] == "CLEAN") counter[7] = counter[7]  + 1;
}

function getState(states){
    if (states[0] == "A" & states[1] == "DIRTY" & states[2] == "DIRTY") return 0;
    else if (states[0] == "A" & states[1] == "DIRTY" & states[2] == "CLEAN") return 1;
    else if (states[0] == "A" & states[1] == "CLEAN" & states[2] == "DIRTY") return 2;
    else if (states[0] == "A" & states[1] == "CLEAN" & states[2] == "CLEAN") return 3;
    else if (states[0] == "B" & states[1] == "DIRTY" & states[2] == "DIRTY") return 4;
    else if (states[0] == "B" & states[1] == "DIRTY" & states[2] == "CLEAN") return 5;
    else if (states[0] == "B" & states[1] == "CLEAN" & states[2] == "DIRTY") return 6;
    else if (states[0] == "B" & states[1] == "CLEAN" & states[2] == "CLEAN") return 7;
}

function reflexAction(location, state, states){
    if (states[1] == "CLEAN" & states[2] == "CLEAN") return "DIRTY";
    else if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function doAction(states, counter){
    var location = states[0];		
    var state = location == "A" ? states[1] : states[2];
    countState(states,counter);
    var action_result = reflexAction(location, state, states);

    document.getElementById("log").innerHTML+="<br>Estado Actual ["
    .concat(getState(states)+1).concat("]: [")
    .concat(location).concat("] [")
    .concat(states[1]).concat("] [")
    .concat(states[2]).concat("] | Contador: ")
    .concat(counter[getState(states)])
    .concat(" | Next Action: ").concat(action_result);

    if (action_result == "CLEAN") location == "A" ? states[1] = "CLEAN" : states[2] = "CLEAN"
    else if (action_result == "DIRTY") states[1] = states[2] = "DIRTY"
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";		

    if( counter[0] >= 2 & counter[1] >= 2 & counter[2] >= 2 & counter[3] >= 2 & counter[4] >= 2 & counter[5] >= 2 & counter[6] >= 2 & counter[7] >= 2){
        document.getElementById("final").innerHTML+="<br><h1>RECORRIDO TERMINADO</h1>";
        return;
    }
    setTimeout(function(){ doAction(states,counter); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
var counter = new Array(8).fill(0);
doAction(states, counter);

