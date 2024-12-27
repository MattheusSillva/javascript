function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "masculino"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "bebehomen.jpg")
            }else if (idade  < 21){
                //jovem
                img.setAttribute("src", "jovemhomen.jpg")

            }else if (idade < 58){
                //adulto
                img.setAttribute("src", "adultohomen.jpg")

            }else { 
                //idoso
                img.setAttribute("src", "idosohomen.jpg")
            }

        }else if (fsex[1].checked) {
            genero = "feminino"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "bebemulher.jpg")
            }else if (idade  < 21){
                //jovem
                img.setAttribute("src", "jovemmulher.jpg")

            }else if (idade < 58){
                //adulto
                img.setAttribute("src", "adultomulher.jpg")

            }else { 
                //idoso
                img.setAttribute("src", "idosomulher.jpg")
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Uma pessoa de ${idade} anos do gênero ${genero}`  
        
        res.appendChild(img)


    }



}
   