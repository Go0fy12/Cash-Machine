function calcNotas() {
    var saque = (document.getElementById("saque").value);
    var s1 = 0;     //Cada variável representa uma nota
    var s2 = 0;     //s1 = 100 | s2 = 50 | s3 = 20 | 24 = 10
    var s3 = 0;
    var s4 = 0;
    var NS = 0;     //NS é o novo valor de saque, que aavai ser utilizado e mudado 
    var flag = 0;
    var cont;
    var saida = "[";
    var strl = 0;       //variavel que contém o tamanho da string

    if (saque === "") {
        alert("Erro de valor nulo.");
    }
    else {
        if (saque < 1) {
            alert("Erro de valor inválido.")
        }
        else {
            if (saque % 10 != 0) {
                alert("Erro de notas disponíveis.");
            }
            else {

                NS = saque;             //Atribui o valor de saque para outra variave
                                        //que vai mudar de valor sempre, mantendo o valor do saque original
                while (flag < 1) {
                    s1 = parseInt(NS / 100);
                    s2 = parseInt(NS / 50);       //Aqui testa para decidir qual será a maior nota e a quantidade usada 
                    s3 = parseInt(NS / 20);       //que vai se repetir pra sempre ter a menor quantidade possivel
                    s4 = parseInt(NS / 10);

                    if (s1 > 0) {                      //Todos os testes consistem em saber a quantidade de notas a usar
                        NS = NS % 100;                 //e repetir o processo, já sabendo que não será mais usada a nota anterior(maior)
                        s2 = 0;
                        s3 = 0;
                        s4 = 0;
                        for (cont = 0; cont < s1; cont++) {
                            saida = saida + "100.00";
                            if (s1 > 1 && cont != s1 - 1) {
                                saida = saida + ", ";
                            }
                        }
                        if (NS < 1) {
                            flag = 1;

                        }
                    }
                    else {
                        if (s2 > 0) {
                            strl = saida.length;
                            NS = NS % 50;
                            s3 = 0;
                            s4 = 0;
                            if (strl > 1) {
                                saida = saida + ", ";
                            }
                            saida = saida + "50.00";
                            if (NS < 1) {
                                flag = 1;
                            }
                        }
                        else {
                            if (s3 > 0) {
                                NS = NS % 20;
                                s4 = 0;
                                for (cont = 0; cont < s3; cont++) {
                                    strl = saida.length;
                                    if (strl > 1) {
                                        saida = saida + ", ";
                                    }
                                    saida = saida + "20.00";
                                }
                                if (NS < 1) {
                                    flag = 1;
                                }
                            }
                            else {
                                if (s4 > 0) {
                                    NS = NS % 10;
                                    strl = saida.length;
                                    if (strl > 1) {
                                        saida = saida + ", ";
                                    }
                                    saida = saida + "10.00";
                                    if (NS < 1) {
                                        flag = 1;
                                    }
                                }
                            }
                        }
                    }
                }
                saida = saida + "]";
                alert("O valor do saque é R$" + saque + ".00\n" + saida);
            }
        }
    }
}