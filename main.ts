input.onButtonPressed(Button.A, function () {
    forward()
})
function backward () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 20)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 20)
    basic.showString("<")
}
input.onButtonPressed(Button.AB, function () {
    motor_stop()
})
input.onButtonPressed(Button.B, function () {
    backward()
})
function motor_stop () {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    basic.showIcon(IconNames.No)
}
radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "A") {
        forward()
    } else if (receivedString == "B") {
        backward()
    } else if (receivedString == "AB") {
        motor_stop()
    }
})
function forward () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 30)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 50)
    basic.showString(">")
}
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
	
})
