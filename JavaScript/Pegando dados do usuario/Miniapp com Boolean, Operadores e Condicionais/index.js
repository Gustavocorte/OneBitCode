let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o temopo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == "1"){
    let seconds0fDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: "+seconds0fDeparture+ "Segundos")
} else if(chosenOption == "2"){
    let minutes0fDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: "+minutes0fDeparture+"minutos")
} else if(chosenOption == "3"){
    let hours0fDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: "+hours0fDeparture+ "horas")
} else if(chosenOption == "4"){
    let days0fDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: "+days0fDeparture+ "dias")
}else{
    alert("Opção inválida")
}