function Calcular(){
    var sexo, idade, altura, peso, resp;

    sexo = parseFloat(document.getElementById("sexo").value);
    idade = parseFloat(document.getElementById("idade").value);
    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    resp = peso / (altura*altura);

    document.getElementById("resp").value = resp;
}