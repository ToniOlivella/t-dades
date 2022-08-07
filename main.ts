input.onPinPressed(TouchPin.P0, function () {
	
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    0
    )
    serial.writeValue("x", input.lightLevel())
    serial.writeValue("Y", input.soundLevel())
})
