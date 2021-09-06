let Nome = prompt('Digite o nome da nave')

let Vel = 0

let ChosenOption

function Menu() {
    let option
    while (option != "1" && option != "2"  && option != "3"  && option != "4") {
        option =prompt("O que deseja fazer?\n" +
                       "1- Acelerar a nave em 5km/h\n" +
                       "2- Desacelerar a nave em 5km/h\n" +
                       "3- Imprimir dados de bordo\n" +
                       "4- Sair do programa")    
    }
    return option
}
function speedUp(Vel) {
    let newVel = Vel + 5
    return newVel
}
function slowDown(Vel) {
    let newVel = Vel - 5
    if(newVel < 0){
        newVel = 0
    }
    return newVel
}
function dadosBordo(Nome, Vel){
    alert("Espaçonave: "+ Nome +"\nVelocidade:" + Vel+"km/s")
}
do {
    ChosenOption  = Menu()
    switch (ChosenOption) {
        case "1":
                Vel = speedUp(Vel)
            break
        case "2":
                Vel = slowDown(Vel)
            break
        case "3":
                dadosBordo(Nome, Vel)
            break   
        default:
            alert("Encerrando progrma de bordo")         
    }
}while(ChosenOption !="4")