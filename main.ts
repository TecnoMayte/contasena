enum RadioMessage {
    message1 = 49434
}
// al pulsar el boton A, se detecta como digito de la contraseña.
input.onButtonPressed(Button.A, function () {
    ENTRY = "" + ENTRY + "A"
})
// al presionar A+B, se introduce la contraseña, una vez marcada con A y B, si es correcta se muestra un tick y si es incorrecta una X, si es 3 veces incorrecta se bloquea y sueno un timbre de emergencia.
// 
input.onButtonPressed(Button.AB, function () {
    if (password == ENTRY) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
        ENTRY = ""
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        ENTRY = ""
    }
})
// al presionar el boton B, es lo mismo que el boton A, se detecta como digito de la contraseña
input.onButtonPressed(Button.B, function () {
    ENTRY = "" + ENTRY + "B"
})
// al iniciar establecemos las  variables y creamos una contraseña
// 
let ENTRY = ""
let password = ""
password = "ABBA"
ENTRY = ""
