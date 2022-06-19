const resultsGlobal = {
    resList: []
}



function goFasterCheck() {

    document.getElementById("res").innerHTML = ""
    document.getElementById("average").innerText = ""
    resultsGlobal.resList = [];

    for (let index = 0; index < document.getElementById("countTest").value; index++) {
        let startTemp = performance.now();
        sandbox();
        let endTemp = performance.now();
        setResult(endTemp - startTemp)
    }
}

function sandbox() {
    
}

// ===

function setResult(res) {
    resultsGlobal.resList.push(res)
    document.getElementById("res").innerHTML += `<span>`+res+` ms</span><br>`

    document.getElementById("average").innerText = getAverage(resultsGlobal.resList) + " ms"
}

function getAverage(array) {
    const total = array.reduce((acc, c) => acc + c, 0);
    return total / array.length;
}

// ===

function help(){
    alert("Через консоль браузера установите свой код в функцию: sandbox()\n\nПример:\n" + `
    function sandbox() {
        console.log("Hello World!")
    }
    `);
}