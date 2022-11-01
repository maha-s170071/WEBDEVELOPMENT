let counterelement = document.getElementById("countervalue");
console.log(counterelement)

function Onincrement() {
    let previouscountervalue = counterelement.textContent;
    let updatecountervalue = parseInt(previouscountervalue) + 1;
    counterelement.textContent = updatecountervalue
    if (updatecountervalue > 0) {
        counterelement.style.color = "Green";
    } else if (updatecountervalue < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "Black";
    }
}

function OnDecrement() {
    let previouscountervalue = counterelement.textContent;
    let updatecountervalue = parseInt(previouscountervalue) - 1;
    counterelement.textContent = updatecountervalue;
    if (updatecountervalue > 0) {
        counterelement.style.color = "Green";
    } else if (updatecountervalue < 0) {
        counterelement.style.color = "red";
    } else {
        counterelement.style.color = "Black";
    }
}

function OnReset() {
    let updatecountervalue = 0;
    counterelement.textContent = updatecountervalue;
    counterelement.style.color = "black";
}