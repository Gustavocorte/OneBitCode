let distanceLightYears = prompt("Distancia em anos-luz")

let conversion = prompt("Seleciona a opção desejada para conversão\n1 - Parsec\n2 - Unidade astronômica\n3 - Quilômetros")

switch(conversion){
  case "1":
    let conversionParsec = distanceLightYears * 0.306601
    alert("Distancia em Anos-luz: "+distanceLightYears+" ly\nParsec : " +conversionParsec+" pc")
    break
  case "2":
    let astronomicalUnitConversion = distanceLightYears * 63241.1
    alert("Distancia em Anos-luz: "+distanceLightYears+" ly\nUnidade astronômica : " +astronomicalUnitConversion+" AU")
    break
  case "3":
    let conversionsKilometers = distanceLightYears * Math.pow(10, 12)
    alert("Distancia em Anos-luz: "+distanceLightYears+" ly\nQuilômetros : " +conversionsKilometers+" Km")
    break
  default:
    alert("Distancia em Anos-luz: " +distanceLightYears+ " ly\nUnidade não identificada: Conversão fora do escopo")
}