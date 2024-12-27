function verificar(){
    var ini = window.document.getElementById("ini")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("itv")
    var res = window.document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar"
    }else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert("Passo inválido, considerando passo 1")
            p = 1
        } 
        if (i < f){
            for ( var c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for( var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
    

    }





    /*if (int < 1){
    int = 1

        window.alert("Pasoo inválido, considerando passo 1")
    }else if (cmc >= 1){
        
    esc.innerHTML = "";

  
    for (var i = cmc; i <= end; i += int) {
        esc.innerHTML += `${i} `;  
    }


    }else{
        esc.innerHTML = "Impossivel contar"
    }
    




   
}
*/