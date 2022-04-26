let name = prompt("Qual seu nome piloto?")

let vel = 0

let newvel = prompt("Qual a velocidade que você gostaria de acelerar a nave?")

let conf = confirm("Estamos acelerando a " + newvel+ " Km/s")

if(conf){
    vel = newvel
}

if(vel <= 0){
        alert("Nave está parada. Considdere a partir e aumentar a velocidade")
    } else if(vel < 40){
        alert("Você está devagar, podemos almentar mais")
        vel = prompt("Você deseja alterar a velocidade da nave?")
    }else if(vel >= 40 && vel < 80){
        alert("Parece uma boa velocidade para manter")
    } else if(vel >= 80 && vel < 100){
        alert("Velocidade alta. Considere diminuir.")
        vel = prompt("Você deseja alterar a velocidade da nave?")
    } else if(vel >= 100){
        alert("Velocidade perigosa. Controle automático forçado.")
        vel = prompt("Você deseja alterar a velocidade da nave?")
    }



alert("Pilolo: "+name+ "\nVelocidade: " +vel+ " Km/s")