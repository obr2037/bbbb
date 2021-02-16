radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
    radio.setGroup(420)
})
