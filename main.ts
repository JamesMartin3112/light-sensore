let NoOfPeople = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    let light_sensore = 0
    basic.showNumber(input.lightLevel())
    basic.pause(1000)
    basic.showNumber(NoOfPeople)
    if (input.lightLevel() < 128) {
        NoOfPeople = 0
    } else if (light_sensore) {
        NoOfPeople += 1
    }
})
