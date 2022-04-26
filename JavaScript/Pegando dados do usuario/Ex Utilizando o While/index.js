let dobra = 0
let warpSpace = ""

let nave = prompt("Qual nome da nave?")

warpSpace = prompt("Desesa entrar em dobra espacial?\n1 - Sim\n2 - Não")

while(warpSpace == "1"){
    dobra += 1
    warpSpace = prompt("Deseja realizar a proxima dobra?\n1 - Sim\n2 - Não")
}

alert("Nave: " + nave+ "\nQuantidade de dobras: "+dobra)