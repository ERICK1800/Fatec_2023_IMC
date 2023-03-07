function CalcularIMC(){
    var altura, peso, resp, imc;

    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    imc = (peso / (altura*altura)).toFixed(2);

    if (imc<18.5) {
        resp = 'Magreza!' + '\n' + 'Seu IMC é de:' + imc;
    }else if (imc<25) {
        resp = 'Normal!' + '\n' + 'Seu IMC é de:' + imc;
    }else if (imc<30) {
        resp = 'Sobrepeso!' + '\n' + 'Seu IMC é de:' + imc;
    }else if (imc<35) {
        resp = 'Obesidade grau I!' + '\n' + 'Seu IMC é de:' + imc;
    }else if (imc<40) {
        resp = 'Obesidade grau II!' + '\n' + 'Seu IMC é de:' + imc;
    }else{
        resp = 'Obesidade grau III!' + '\n' + 'Seu IMC é de:' + imc;
    }

    document.getElementById("resp").value = resp;
}

function limparCampos() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resp").value = "";
}
