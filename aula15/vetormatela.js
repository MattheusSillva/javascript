let valores = [8, 1, 7, 4, 2, 9]
console.log(valores[1])

for (let sum = 0; sum < valores.length; sum++ ){
    console.log(`A posicao ${sum} tem o valor ${valores[sum]}`)
}

for (let pos in valores){
    console.log(valores[pos])


}

num.indexOf(7) //vai procurar noi array omnde esta o valor 7