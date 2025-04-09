enum RadioMessage {
    message1 = 49434
}
// al pulsar el boton A, se detecta como digito de la contraseña.
input.onButtonPressed(Button.A, function () {
    código = "" + código + "A"
})
// al presionar A+B, se introduce la contraseña, una vez marcada con A y B, si es correcta se muestra un tick y si es incorrecta una X, si es 3 veces incorrecta se bloquea y sueno un timbre de emergencia.
input.onButtonPressed(Button.AB, function () {
    if (password == código) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        código = ""
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        código = ""
        contador += 1
        if (contador == 3) {
            basic.showString("SOCORRO")
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
