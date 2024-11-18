let STONE = 0 // Мы думаем, что камень - это 1.
let PAPER = 1 // Мы думаем, что бумага - это 1.
let SCISSORS = 2 // Мы думаем, что ножницы - это 2.

let intro_melody = `C - C D - E C - ` // играет, на старте
let win_melody = `A A - B B - - A ` // играет, когда победил
let lose_melody = `G G - E G - E G` // играет, когда проиграл
let draw_melody = `- - - - - - - -` // играет, когда ничья

let fast_temp = 480
let slow_temp = 120

// Preloader - показывает иконку и играет мелодию заставкию
function preloader (cycle_count: number, melody: string, melody_temp: number) {
    music.play(
        music.stringPlayable(melody, melody_temp),
        music.PlaybackMode.LoopingInBackground)
    for (let i = cycle_count; i >= 0; i--) {
        basic.showNumber(i)
        // timer.wait()
    }
    music.stopAllSounds()
}

// If A pressed:
input.onButtonPressed(Button.A, function () {
    preloader(5, lose_melody, slow_temp)
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function() {
    preloader(5, win_melody, fast_temp)
    basic.clearScreen()
})


preloader(5, win_melody, 360)
basic.clearScreen()

