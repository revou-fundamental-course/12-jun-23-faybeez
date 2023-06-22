//functions to do the conversion
function CtoF(x){
    return (x*9/5 + 32)
}

function FtoK(x){
    return (CtoK(FtoC(x)));
}

function CtoK(x){
    return (x + 273.15);
}

function FtoC(x){
    return ((x-32) * 5/9); 
}

function KtoF(x){
    return (CtoF(KtoC(x)));
}

function KtoC(x){
    return (x - 273.15);
}

function FtoF(x){
    return x
}

function KtoK(x){
    return x
}

function CtoC(x){
    return x
}

//function that changes the text "formula" using the two temperature measurements
function ChangeFormulaText(ch1_v,ch2_v){
    if (ch1_v == ch2_v) {
        document.getElementById("formula-display").innerHTML = String(temp1_v + "°" + ch1_v + " = " + temp2_v + "°" + ch2_v);
    }
    else if (ch1_v == "C") {
        if (ch2_v == "F") {
            document.getElementById("formula-display").innerHTML = String(temp1_v + "°C * 9/5 + 32 = " + temp2_v + "°F");
        }
        else {
            document.getElementById("formula-display").innerHTML = String(temp1_v + "°C + 273.15 = " + temp2_v + "°K");
        }
    }
    else if (ch1_v == "F") {
        if (ch2_v == "C") {
            document.getElementById("formula-display").innerHTML = String("(" + temp1_v + "°F - 32)* 5/9 = " + temp2_v + "°C");
        }
        else {
            document.getElementById("formula-display").innerHTML = String("(" + temp1_v + "°F - 32)* 5/9 + 273.15 = " + temp2_v + "°K");
        }
    }
    else {
        if (ch2_v == "C") {
            document.getElementById("formula-display").innerHTML = String(temp1_v + "°K - 273.15 = " + temp2_v + "°C");
        }
        else {
            document.getElementById("formula-display").innerHTML = String("(" + temp1_v + "°K - 273.15) * 9/5 + 32 = " + temp2_v + "°F");
        }
    }
}


//onload
let ch1_v = "C";
let ch2_v = "F";
let temp1_v = 0;
let temp2_v = 0;

//called whenever something is changed ("change" is the code to pass which slot is changed)
function convert(change) {
    //if temperature 1 slot is changed
    if (change == "t1") {
        temp1_v = Number(document.getElementById("temp1").value);
        temp2_v = eval(ch1_v + "to" + ch2_v + "(temp1_v)");
        document.getElementById("temp2").value = temp2_v;
        ChangeFormulaText(ch1_v,ch2_v);
    }
    //if temperature slot 2 is changed
    else if (change == "t2") {
        temp2_v = Number(document.getElementById("temp2").value);
        temp1_v = eval(ch2_v + "to" + ch1_v + "(temp2_v)");
        document.getElementById("temp1").value = temp1_v;
        ChangeFormulaText(ch1_v,ch2_v);

    }
    //if conversion 1 is changed
    else if (change == "ch1") {
        ch1_v = document.getElementById("ch1").value;
        temp1_v = eval(ch2_v + "to" + ch1_v + "(temp2_v)");
        document.getElementById("temp1").value = temp1_v;
        ChangeFormulaText(ch1_v,ch2_v);
    }
    //if conversion 2 is changed
    else {
        ch2_v = document.getElementById("ch2").value;
        temp2_v = eval(ch1_v + "to" + ch2_v + "(temp1_v)");
        document.getElementById("temp2").value = temp2_v;
        ChangeFormulaText(ch1_v,ch2_v);
    }
}