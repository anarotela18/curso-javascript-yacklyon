function valor(x) {
    document.getElementById('display').value += x;
}

function borrarDisplay(y) {
    document.getElementById('display').value = y;
}

function calculo_de_resultado() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}