input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.East)
    }
})
