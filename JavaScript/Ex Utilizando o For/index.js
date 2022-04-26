let spaceship = prompt("Qual o nome da espaçonave?")

let oldLetter = prompt("Qual caractere você deseja subistituir?")

let newLetter = prompt("Por qual caractere você deseja substituir?")

let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i] == oldLetter){
        newSpaceship += newLetter
    } else{
        newSpaceship += spaceship[i]
    }
}

alert("O novo nome da nave é "+newSpaceship)