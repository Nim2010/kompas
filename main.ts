let kompasje = 0
basic.forever(function () {
    kompasje = input.compassHeading()
})
basic.forever(function () {
    if (kompasje > 315 && kompasje < 360 || kompasje > 0 && kompasje < 45) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (kompasje < 135 && kompasje > 45) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (kompasje < 225 && kompasje > 135) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (kompasje < 315 && kompasje > 225) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
