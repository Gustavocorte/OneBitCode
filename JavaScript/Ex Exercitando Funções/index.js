let velocidade = 0
let spaceship = prompt("Digite o nome da nave")

// Função Menu
function menu() {
    let chooseOption = prompt("Escolha a opção desejada: \n1- Acelerar a nave em 5Km/s \n2- Desacelerar em 5km/s \n3- Imprimir dados de bordo \n4- Sair do programa")

    return chooseOption
}

// Função Acelerar
function acelerar(){
    velocidade += 5
    return velocidade
}

// Função Desacelerar
function desacelerar(){
    if(velocidade > 0){
        velocidade -= 5
    } else{
        alert("Impossivel desacelerar \nVelocidade: " + velocidade +" Km/s")
    }
}

// Função Dados de Bordo
function bordo(){
    alert("Dados de Bordo: \nNave: " + spaceship + "\nVelocidade: " + velocidade)
}

// Função Encerrar
function encerrar(){
    alert("Sistema Encerrado \nDados Finais: \nNave:" + spaceship + "\nVelocidade: " + velocidade)
}

let chooseOption = menu()
while(chooseOption < 1 || chooseOption > 4){
    chooseOption = menu()
}
while(chooseOption == 1){
    acelerar()
    chooseOption = menu()
}
while(chooseOption == 2){
    desacelerar()
    chooseOption = menu()
}
if(chooseOption == 3){
    bordo()
} else if(chooseOption == 4){
    encerrar()
}