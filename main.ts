enum RadioMessage {
    message1 = 49434
}
// al pulsar el boton A, se detecta como digito de la contraseña.
input.onButtonPressed(Button.A, function () {
    código = "" + código + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (código == password) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        código = ""
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        contador += 1
        if (contador == 3) {
            basic.showString("ALARMA")
            código = ""
            contador = 0
        }
    }
})
// al presionar el boton B, es lo mismo que el boton A, se detecta como digito de la contraseña
input.onButtonPressed(Button.B, function () {
    código = "" + código + "B"
})
// al iniciar establecemos las  variables y creamos una contraseña
let contador = 0
let código = ""
let password = ""
password = "ABBA"
código = ""
contador = 0
