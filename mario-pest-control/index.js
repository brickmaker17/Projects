var goobaNum = document.getElementById("numbGooba");
var goobaPri = document.getElementById("priceGooba");
var bobNum = document.getElementById("numbBob");
var bobPri = document.getElementById("priceBob");
var cheepNum = document.getElementById("numbCheep");
var cheepPri = document.getElementById("priceCheep");
var goombaSub = 0;
var bobSub = 0;
var cheepSub = 0; 

function clearInputs(){
    goobaNum.value = "";
    goobaPri.value = "";
}
var total = function () {
    output3.innerHTML = goombaSub + bobSub + cheepSub;
}
goobaNum.oninput = function (){
    // var firstNum = Number(goobaNum.value);
    // var secondNum = Number(goobaPri.value);
    goombaSub = Number(goobaNum.value) * Number(goobaPri.value);
    

    output.innerHTML = goombaSub;
    total();
}
goobaPri.oninput = function (){
    
    goombaSub = Number(goobaNum.value) * Number(goobaPri.value);
    

    output.innerHTML = goombaSub;
    total();

}
bobNum.oninput = function (){
    bobSub = Number(bobNum.value) * Number(bobPri.value);
    

    output1.innerHTML = bobSub;
    total();
}
bobPri.oninput = function (){
    bobSub = Number(bobNum.value) * Number(bobPri.value);
    

    output1.innerHTML = bobSub;
    total();
}
cheepNum.oninput = function (){
    cheepSub = Number(cheepNum.value) * Number(cheepPri.value);
    

    output2.innerHTML = cheepSub;
    total();
}
cheepPri.oninput = function (){
    cheepSub = Number(cheepNum.value) * Number(cheepPri.value);
    

    output2.innerHTML = cheepSub;
    total();
}
total.onoutput = function () {
    output3.innerHTML
}