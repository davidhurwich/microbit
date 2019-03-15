
let lovetype = ""
let loveamount = 0
let screensaver = false
input.onButtonPressed(Button.AB, function () {
   basic.clearScreen()
   screensaver = false
   loveamount = Math.randomRange(1, 100)
   led.plotBarGraph(
   loveamount,
   100
   )
   basic.pause(5000)
   basic.clearScreen()
   if (loveamount < 25) {
       lovetype = "cold fish"
       music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
       for (let i = 0; i < 3; i++) {
           basic.showLeds(`
               . . . . .
               . # # . #
               # # # # .
               . # # . #
               . . . . .
               `)
           basic.pause(100)
           basic.clearScreen()
           basic.pause(100)
       }
   } else if (loveamount < 50) {
       lovetype = "Just Friends"
   } else if (loveamount < 75) {
       lovetype = "Compatible"
   } else {
       pins.digitalWritePin(DigitalPin.P0, 1)
       lovetype = "Hot Stuff"
       music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
       for (let i = 0; i < 3; i++) {
           basic.showIcon(IconNames.Heart)
           basic.pause(100)
           basic.clearScreen()
           basic.pause(100)
       }
   }
   basic.showString(lovetype)
   basic.pause(2000)
})
screensaver = true
music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
for (let i = 0; i < 5; i++) {
   basic.showIcon(IconNames.Heart)
   basic.pause(100)
   basic.clearScreen()
   basic.pause(100)
}
basic.showString("Love Meter")

