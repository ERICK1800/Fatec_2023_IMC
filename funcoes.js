function CalcularIMC(){
    var altura, peso, resp, imc;

    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    imc = peso / (altura*altura);

    if (imc<18.5) {
        resp = 'Magreza!' + '\n' + 'Seu IMC é de :' + imc;
    }else if (18.5<=imc && imc<=24.9) {
        resp = 'Normal!' + '\n' + 'Seu IMC é de :' + imc;
    }else if (25<=imc && imc<=29.9) {
        resp = 'Sobrepeso!' + '\n' + 'Seu IMC é de :' + imc;
    }else if (30<=imc && imc<=34.9) {
        resp = 'Obesidade grau I!' + '\n' + 'Seu IMC é de :' + imc;
    }else if (35<=imc && imc<=39.9) {
        resp = 'Obesidade grau II!' + '\n' + 'Seu IMC é de :' + imc;
    }else if (40<imc) {
        resp = 'Obesidade grau III!' + '\n' + 'Seu IMC é de :' + imc;
    }

    document.getElementById("resp").value = resp;
}
