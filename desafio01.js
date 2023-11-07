let nickname = "Luquinhas"
let exp = 10500

switch(true){
    case (exp <= 1000):
      console.log(`O Herói de nome ${nickname} está no nível Ferro.`)
      break

    case (exp >= 1001) && (exp <= 2000):
        console.log(`O Herói de nome ${nickname} está no nível Bronze.`)
        break  
    
    case (exp >= 2001) && (exp <= 6000):
        console.log(`O Herói de nome ${nickname} está no nível Prata.`)
        break
    
    case (exp >= 6001) && (exp <= 7000):
        console.log(`O Herói de nome ${nickname} está no nível Ouro.`)
        break
    
    case (exp >= 7001) && (exp <= 8000):
        console.log(`O Herói de nome ${nickname} está no nível Platina.`)
        break
    
    case (exp >= 8001) && (exp <= 9000):
        console.log(`O Herói de nome ${nickname} está no nível Ascendente.`)
        break
    
    case (exp >= 9001) && (exp <= 10000):
        console.log(`O Herói de nome ${nickname} está no nível Imortal.`)
        break
    
    default:
        console.log(`O Herói de nome ${nickname} está no nível Radiante.`)
    }