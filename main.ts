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
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        music.ringTone(262)
        basic.pause(500)
        music.rest(music.beat(BeatFraction.Whole))
        basic.clearScreen()
        if (password != ENTRY) {
            contador += 1
            if (contador == 3) {
                music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
                basic.showString("BLOQUEADO")
            }
        }
    }
    basic.pause(100)
})
// al presionar el boton B, es lo mismo que el boton A, se detecta como digito de la contraseña
input.onButtonPressed(Button.B, function () {
    ENTRY = "" + ENTRY + "B"
})
// recibe el mensaje de cuidado de la otra radio
// 
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("¡CUIDADO!")
})
// al iniciar establecemos las  variables y creamos una contraseña
// 
let contador = 0
let ENTRY = ""
let password = ""
password = "BABBA"
ENTRY = ""
contador = 0
pins.servoWritePin(AnalogPin.P0, 0)
// establecemos la radio
// 
basic.forever(function () {
    radio.setGroup(1)
})
// si la contraseña esta 3 veces mal se manda una señal de cuidado a la otra radio
// 
basic.forever(function () {
    if (contador == 3) {
        radio.sendMessage(RadioMessage.message1)
    }
})
