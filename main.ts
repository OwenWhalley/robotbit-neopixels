input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        strip.show()
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        strip.show()
        strip.clear()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(2000)
        strip.show()
        strip.clear()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        basic.pause(2000)
        strip.show()
        strip.clear()
        basic.showIcon(IconNames.Happy)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
