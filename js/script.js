const launch_screen = document.querySelector('.launch_screen')
const mainDiv = document.querySelector('.main_div')

const chosen_maps = document.querySelectorAll('.map')
const game_maps = document.querySelectorAll('.game_map')

let player_input = document.querySelector('.player_input')
let display_name = document.querySelector('.player_name')

const map1_td = document.querySelectorAll('.fst_map td')
const map2_td = document.querySelectorAll('.snd_map td')
const map3_td = document.querySelectorAll('.thd_map td')

const start_btn = document.querySelector('.start_btn')
const restart_btn = document.querySelector('.restart_btn')

let minutesLabel = document.querySelector(".minutes")
let secondsLabel = document.querySelector(".seconds")


window.addEventListener('load', function () {
    let stop
    /* ========================================= CHOOSING MAP ================================ */
    function chooseMap() {
        let isChosen = true
        for (let i = 0; i < chosen_maps.length; i++) {
            chosen_maps[i].addEventListener('click', event => {
                if (!chosen_maps[i].classList.contains('selected')) {
                    chosen_maps[i].classList.add('selected')
                } else {
                    chosen_maps[i].classList.remove('selected')
                }
            })
        }
        for (let i = 0; i < chosen_maps.length; i++) {
            if (chosen_maps[i].classList.contains('selected')) {
                game_maps[i].style.display = 'block';
                if (chosen_maps[i]) {
                    return isChosen = true
                }
            }
        }
    }
    chooseMap()

    /* ========================================= START GAME ================================ */
    function start() {
        if (player_input.value == "") {
            alert("PLEASE ENTER A PLAYER'S NAME");
        }
        if (chooseMap() && player_input.value != "") {
            launch_screen.style.display = 'none'
            mainDiv.style.display = 'block'
            display_name.innerText = player_input.value.toUpperCase();
        }
        illuminate()
        stop = setInterval(setTime, 1000)
    }
    start_btn.addEventListener('click', start)

    /* ====================================== ILLUMINATE FUNCTION ===================================== */
    function illuminate() {
        if (chosen_maps[0]) {
            for (let i = 0; i < map1_td.length; i++) {
                map1_td[i].addEventListener('click', () => {
                    if (!blockClick) {

                        // if (map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')) {
                        //     map1_td[i].classList.add('bulb')
                        // } 

                        let clicked_row = map1_td[i].dataset.rowIndex
                        if (map1_td[i].dataset.rowIndex == clicked_row && !map1_td[i].classList.contains('black_tiles') && !map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')) {
                            map1_td[i].setAttribute('value', 1)
                            map1_td[i].classList.add('bulb')
                            map1_td[i].classList.add('hasBulb')
                            map1_td[i].classList.add('lighten')


                            // if(!map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')){
                            //     map1_td[i].classList.add('bulb')
                            //     map1_td[i].classList.add('lighten')}
                            // } else if(map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')){
                            //     map1_td[i].classList.add('bulb')
                            // }



                            for (let rowUp = i - 7; rowUp >= 0; rowUp -= 7) {
                                if (map1_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map1_td[rowUp].classList.add('lighten')
                                    map1_td[rowUp].classList.add('up')
                                    map1_td[rowUp].classList.add('hasBulb')
                                    map1_td[rowUp].setAttribute('value', 1)
                                }
                            }
                            for (let rowDown = i + 7; rowDown < 49; rowDown += 7) {
                                if (map1_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map1_td[rowDown].classList.add('lighten')
                                    map1_td[rowDown].classList.add('down')
                                    map1_td[rowDown].classList.add('hasBulb')
                                    map1_td[rowDown].setAttribute('value', 1)

                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map1_td[colLeft].classList.contains('black_tiles') || map1_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map1_td[colLeft].classList.add('lighten')
                                    map1_td[colLeft].classList.add('left')
                                    map1_td[colLeft].classList.add('hasBulb')
                                    map1_td[colLeft].setAttribute('value', 1)

                                }
                            }
                            for (let colRight = i + 1; colRight < 49; colRight++) {
                                if (map1_td[colRight].classList.contains('black_tiles') || map1_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map1_td[colRight].classList.add('lighten')
                                    map1_td[colRight].classList.add('right')
                                    map1_td[colRight].classList.add('hasBulb')
                                    map1_td[colRight].setAttribute('value', 1)
                                }
                            }
                        } else if (map1_td[i].dataset.rowIndex == clicked_row && !map1_td[i].classList.contains('black_tiles') && map1_td[i].classList.contains('bulb') && map1_td[i].classList.contains('lighten')) {
                            map1_td[i].setAttribute('value', 0)
                            map1_td[i].classList.remove('bulb')
                            //map1_td[i].classList.remove('lighten')

                            // if(map1_td[i].classList.contains('lighten') && map1_td[i].classList.contains('bulb')){
                            //     map1_td[i].classList.remove('bulb')
                            //     map1_td[i].classList.remove('lighten')


                            // }
                            // } else if(map1_td[i].classList.contains('lighten') && map1_td[i].classList.contains('bulb')){
                            //     map1_td[i].classList.remove('bulb')
                            // }
                            for (let rowUp = i; rowUp >= 0; rowUp -= 7) {
                                if (map1_td[rowUp].classList.contains('black_tiles')) { break; }
                                else if (map1_td[i].classList.contains('hasBulb') && !map1_td[rowUp].classList.contains('bulb')) {
                                    
                                    
                                    map1_td[i].classList.remove('bulb')

                                    map1_td[rowUp].classList.remove('up')

                                    if (map1_td[rowUp].classList.contains('down') || map1_td[rowUp].classList.contains('left') || map1_td[rowUp].classList.contains('right') || map1_td[rowUp].classList.contains('bulb') ) { continue }
                                    else {
                                        map1_td[rowUp].classList.remove('lighten')
                                        map1_td[rowUp].setAttribute('value', 0)
                                    }
                                }
                                else if (map1_td[rowUp].classList.contains('hasBulb') && map1_td[i].classList.contains('bulb')) {
                                    //map1_td[i].classList.remove('bulb')

                                    map1_td[rowUp].classList.remove('up')

                                    if (map1_td[rowUp].classList.contains('down') || map1_td[rowUp].classList.contains('left') || map1_td[rowUp].classList.contains('right') || map1_td[rowUp].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[rowUp].classList.remove('lighten')
                                        map1_td[rowUp].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let rowDown = i + 7; rowDown < map1_td.length; rowDown += 7) {
                                if (map1_td[rowDown].classList.contains('black_tiles')) { break; }
                                else if (map1_td[i].classList.contains('hasBulb') && !map1_td[i].classList.contains('bulb')) {
                                    map1_td[i].classList.remove('bulb')

                                    map1_td[rowDown].classList.remove('down')

                                    if (map1_td[rowDown].classList.contains('up') || map1_td[rowDown].classList.contains('left') || map1_td[rowDown].classList.contains('right') || map1_td[rowDown].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[rowDown].classList.remove('lighten')
                                        map1_td[rowDown].setAttribute('value', 0)
                                    }
                                }
                                else if (map1_td[rowDown].classList.contains('hasBulb') && map1_td[i].classList.contains('bulb')) {
                                    map1_td[rowDown].classList.remove('down')

                                    if (map1_td[rowDown].classList.contains('up') || map1_td[rowDown].classList.contains('left') || map1_td[rowDown].classList.contains('right') || map1_td[rowDown].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[rowDown].classList.remove('lighten')
                                        map1_td[rowDown].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map1_td[colLeft].classList.contains('black_tiles') || map1_td[colLeft].classList.contains('left_end')) { break; }
                                else if (map1_td[i].classList.contains('hasBulb') && !map1_td[i].classList.contains('bulb')) {
                                    map1_td[i].classList.remove('bulb')
                                    map1_td[colLeft].classList.remove('left')
                                    if (map1_td[colLeft].classList.contains('up') || map1_td[colLeft].classList.contains('down') || map1_td[colLeft].classList.contains('right') || map1_td[colLeft].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[colLeft].classList.remove('lighten')
                                        map1_td[colLeft].setAttribute('value', 0)
                                    }
                                }
                                else if (map1_td[colLeft].classList.contains('hasBulb') && map1_td[i].classList.contains('bulb')) {
                                    map1_td[colLeft].classList.remove('left')

                                    if (map1_td[colLeft].classList.contains('up') || map1_td[colLeft].classList.contains('down') || map1_td[colLeft].classList.contains('right') || map1_td[colLeft].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[colLeft].classList.remove('lighten')
                                        map1_td[colLeft].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colRight = i + 1; colRight < 49; colRight++) {
                                if (map1_td[colRight].classList.contains('black_tiles') || map1_td[colRight].classList.contains('right_end')) { break; }
                                else if (map1_td[i].classList.contains('hasBulb') && !map1_td[i].classList.contains('bulb')) {
                                    map1_td[i].classList.remove('bulb')
                                    map1_td[colRight].classList.remove('right')
                                    if (map1_td[colRight].classList.contains('up') || map1_td[colRight].classList.contains('down') || map1_td[colRight].classList.contains('left') || map1_td[colRight].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[colRight].classList.remove('lighten')
                                        map1_td[colRight].setAttribute('value', 0)
                                    }
                                }
                                else if (map1_td[colRight].classList.contains('hasBulb') && map1_td[i].classList.contains('bulb')) {
                                    map1_td[colRight].classList.remove('right')

                                    if (map1_td[colRight].classList.contains('up') || map1_td[colRight].classList.contains('left') || map1_td[colRight].classList.contains('down') || map1_td[colRight].classList.contains('bulb')) { continue }
                                    else {
                                        map1_td[colRight].classList.remove('lighten')
                                        map1_td[colRight].setAttribute('value', 0)
                                    }
                                }
                            }
                        } else if (map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')) {
                            map1_td[i].classList.add('bulb')

                            for (let rowUp = i - 7; rowUp >= 0; rowUp -= 7) {
                                if (map1_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map1_td[rowUp].classList.add('lighten')
                                    map1_td[rowUp].classList.add('up')
                                    map1_td[rowUp].setAttribute('value', 1)
                                }
                            }
                            for (let rowDown = i + 7; rowDown < 49; rowDown += 7) {
                                if (map1_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map1_td[rowDown].classList.add('lighten')
                                    map1_td[rowDown].classList.add('down')
                                    map1_td[rowDown].setAttribute('value', 1)

                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map1_td[colLeft].classList.contains('black_tiles') || map1_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map1_td[colLeft].classList.add('lighten')
                                    map1_td[colLeft].classList.add('left')
                                    map1_td[colLeft].setAttribute('value', 1)

                                }
                            }
                            for (let colRight = i + 1; colRight < 49; colRight++) {
                                if (map1_td[colRight].classList.contains('black_tiles') || map1_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map1_td[colRight].classList.add('lighten')
                                    map1_td[colRight].classList.add('right')
                                    map1_td[colRight].setAttribute('value', 1)
                                }
                            }
                        }
                        win()
                    }
                })
            }
        }
        if (chosen_maps[1]) {
            for (let i = 0; i < map2_td.length; i++) {
                map2_td[i].addEventListener('click', () => {
                    if (!blockClick) {
                        let clicked_row = map2_td[i].dataset.rowIndex
                        if (map2_td[i].dataset.rowIndex == clicked_row && !map2_td[i].classList.contains('black_tiles') && !map2_td[i].classList.contains('lighten') && !map2_td[i].classList.contains('bulb')) {
                            map2_td[i].classList.add('bulb')
                            map2_td[i].classList.add('lighten')
                            map2_td[i].setAttribute('value', 1)

                            for (let rowUp = i - 10; rowUp >= 0; rowUp -= 10) {
                                if (map2_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map2_td[rowUp].classList.add('lighten')
                                    map2_td[rowUp].classList.add('up')
                                    map2_td[rowUp].setAttribute('value', 1)
                                }
                            }
                            for (let rowDown = i + 10; rowDown < map2_td.length; rowDown += 10) {
                                if (map2_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map2_td[rowDown].classList.add('lighten')
                                    map2_td[rowDown].classList.add('down')
                                    map2_td[rowDown].setAttribute('value', 1)

                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map2_td[colLeft].classList.contains('black_tiles') || map2_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map2_td[colLeft].classList.add('lighten')
                                    map2_td[colLeft].classList.add('left')
                                    map2_td[colLeft].setAttribute('value', 1)

                                }
                            }
                            for (let colRight = i + 1; colRight < map2_td.length; colRight++) {
                                if (map2_td[colRight].classList.contains('black_tiles') || map2_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map2_td[colRight].classList.add('lighten')
                                    map2_td[colRight].classList.add('right')
                                    map2_td[colRight].setAttribute('value', 1)
                                }
                            }
                        } else if (map2_td[i].dataset.rowIndex == clicked_row && map2_td[i].classList.contains('lighten') && map2_td[i].classList.contains('bulb')) {
                            map2_td[i].classList.remove('lighten')
                            map2_td[i].classList.remove('bulb')
                            map2_td[i].setAttribute('value', 0)
                            for (let rowUp = i; rowUp >= 0; rowUp -= 10) {
                                if (map2_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map2_td[rowUp].classList.remove('up')

                                    if (map2_td[rowUp].classList.contains('down') || map2_td[rowUp].classList.contains('left') || map2_td[rowUp].classList.contains('right') || map2_td[rowUp].classList.contains('bulb')) { continue }
                                    else {
                                        map2_td[rowUp].classList.remove('lighten')
                                        map2_td[rowUp].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let rowDown = i + 10; rowDown < map2_td.length; rowDown += 10) {
                                if (map2_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map2_td[rowDown].classList.remove('down')
                                    if (map2_td[rowDown].classList.contains('up') || map2_td[rowDown].classList.contains('left') || map2_td[rowDown].classList.contains('right') || map2_td[rowDown].classList.contains('bulb')) { continue }
                                    else {
                                        map2_td[rowDown].classList.remove('lighten')
                                        map2_td[rowDown].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map2_td[colLeft].classList.contains('black_tiles') || map2_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map2_td[colLeft].classList.remove('left')
                                    if (map2_td[colLeft].classList.contains('up') || map2_td[colLeft].classList.contains('down') || map2_td[colLeft].classList.contains('right') || map2_td[colLeft].classList.contains('bulb')) { continue }
                                    else {
                                        map2_td[colLeft].classList.remove('lighten')
                                        map2_td[colLeft].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colRight = i + 1; colRight < map2_td.length; colRight++) {
                                if (map2_td[colRight].classList.contains('black_tiles') || map2_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map2_td[colRight].classList.remove('right')
                                    if (map2_td[colRight].classList.contains('up') || map2_td[colRight].classList.contains('left') || map2_td[colRight].classList.contains('down') || map2_td[colRight].classList.contains('bulb')) { continue }
                                    else {
                                        map2_td[colRight].classList.remove('lighten')
                                        map2_td[colRight].setAttribute('value', 0)
                                    }
                                }
                            }
                        }
                        win()
                    }
                })
            }
        }
        if (chosen_maps[2]) {
            for (let i = 0; i < map3_td.length; i++) {
                map3_td[i].addEventListener('click', () => {
                    if (!blockClick) {


                        let clicked_row = map3_td[i].dataset.rowIndex
                        if (map3_td[i].dataset.rowIndex == clicked_row && !map3_td[i].classList.contains('black_tiles') && !map3_td[i].classList.contains('lighten') && !map3_td[i].classList.contains('bulb')) {
                            map3_td[i].classList.add('bulb')
                            map3_td[i].classList.add('lighten')
                            map3_td[i].setAttribute('value', 1)

                            for (let rowUp = i - 7; rowUp >= 0; rowUp -= 7) {
                                if (map3_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map3_td[rowUp].classList.add('lighten')
                                    map3_td[rowUp].classList.add('up')
                                    map3_td[rowUp].setAttribute('value', 1)
                                }
                            }
                            for (let rowDown = i + 7; rowDown < map3_td.length; rowDown += 7) {
                                if (map3_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map3_td[rowDown].classList.add('lighten')
                                    map3_td[rowDown].classList.add('down')
                                    map3_td[rowDown].setAttribute('value', 1)

                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map3_td[colLeft].classList.contains('black_tiles') || map3_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map3_td[colLeft].classList.add('lighten')
                                    map3_td[colLeft].classList.add('left')
                                    map3_td[colLeft].setAttribute('value', 1)

                                }
                            }
                            for (let colRight = i + 1; colRight < map3_td.length; colRight++) {
                                if (map3_td[colRight].classList.contains('black_tiles') || map3_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map3_td[colRight].classList.add('lighten')
                                    map3_td[colRight].classList.add('right')
                                    map3_td[colRight].setAttribute('value', 1)
                                }
                            }
                        } else if (map3_td[i].dataset.rowIndex == clicked_row && map3_td[i].classList.contains('lighten') && map3_td[i].classList.contains('bulb')) {
                            map3_td[i].classList.remove('lighten')
                            map3_td[i].classList.remove('bulb')
                            map3_td[i].setAttribute('value', 0)
                            for (let rowUp = i; rowUp >= 0; rowUp -= 7) {
                                if (map3_td[rowUp].classList.contains('black_tiles')) { break; }
                                else {
                                    map3_td[rowUp].classList.remove('up')

                                    if (map3_td[rowUp].classList.contains('down') || map3_td[rowUp].classList.contains('left') || map3_td[rowUp].classList.contains('right') || map3_td[rowUp].classList.contains('bulb')) { continue }
                                    else {
                                        map3_td[rowUp].classList.remove('lighten')
                                        map3_td[rowUp].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let rowDown = i + 7; rowDown < map3_td.length; rowDown += 7) {
                                if (map3_td[rowDown].classList.contains('black_tiles')) { break; }
                                else {
                                    map3_td[rowDown].classList.remove('down')
                                    if (map3_td[rowDown].classList.contains('up') || map3_td[rowDown].classList.contains('left') || map3_td[rowDown].classList.contains('right') || map3_td[rowDown].classList.contains('bulb')) { continue }
                                    else {
                                        map3_td[rowDown].classList.remove('lighten')
                                        map3_td[rowDown].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colLeft = i - 1; colLeft >= 0; colLeft--) {
                                if (map3_td[colLeft].classList.contains('black_tiles') || map3_td[colLeft].classList.contains('left_end')) { break; }
                                else {
                                    map3_td[colLeft].classList.remove('left')
                                    if (map3_td[colLeft].classList.contains('up') || map3_td[colLeft].classList.contains('down') || map3_td[colLeft].classList.contains('right') || map3_td[colLeft].classList.contains('bulb')) { continue }
                                    else {
                                        map3_td[colLeft].classList.remove('lighten')
                                        map3_td[colLeft].setAttribute('value', 0)
                                    }
                                }
                            }
                            for (let colRight = i + 1; colRight < map3_td.length; colRight++) {
                                if (map3_td[colRight].classList.contains('black_tiles') || map3_td[colRight].classList.contains('right_end')) { break; }
                                else {
                                    map3_td[colRight].classList.remove('right')
                                    if (map3_td[colRight].classList.contains('up') || map3_td[colRight].classList.contains('left') || map3_td[colRight].classList.contains('down') || map3_td[colRight].classList.contains('bulb')) { continue }
                                    else {
                                        map3_td[colRight].classList.remove('lighten')
                                        map3_td[colRight].setAttribute('value', 0)
                                    }
                                }
                            }
                        }
                        win()
                    }
                })
            }
        }
    }

    /* ========================================= WIN GAME ================================== */
    let blockClick = false
    function win() {
        let didWin = true
        if (chosen_maps[0].classList.contains('selected')) {
            for (let i = 0; i < map1_td.length; i++) {
                if (map1_td[i].getAttribute('value') != "1" && !map1_td[i].classList.contains('black_tiles')) {
                    didWin = false
                    break
                }
            }
            if (didWin) {
                blockClick = true
                clearInterval(stop)
                setTimeout(() => {
                    document.querySelector('.win').style.display = 'block';
                }, 1200);
            }
        } else if (chosen_maps[1].classList.contains('selected')) {
            for (let i = 0; i < map2_td.length; i++) {
                if (map2_td[i].getAttribute('value') != "1" && !map2_td[i].classList.contains('black_tiles')) {
                    didWin = false
                    break
                }
            }
            if (didWin) {
                blockClick = true
                clearInterval(stop)
                setTimeout(() => {
                    document.querySelector('.win').style.display = 'block';
                }, 1200);
            }
        } else if (chosen_maps[2].classList.contains('selected')) {
            for (let i = 0; i < map3_td.length; i++) {
                if (map3_td[i].getAttribute('value') != "1" && !map3_td[i].classList.contains('black_tiles')) {
                    didWin = false
                    break
                }
            }
            if (didWin) {
                blockClick = true
                clearInterval(stop)
                setTimeout(() => {
                    document.querySelector('.win').style.display = 'block';
                }, 1200);
            }
        }
    }

    /* ========================================= RESTART GAME ================================ */
    function restart() {
        refreshTimer()
        blockClick = false
        if (chosen_maps[0]) {
            for (let i = 0; i < map1_td.length; i++) {
                map1_td[i].classList.remove('bulb')
                map1_td[i].classList.remove('lighten')
                map1_td[i].classList.remove('up')
                map1_td[i].classList.remove('down')
                map1_td[i].classList.remove('left')
                map1_td[i].classList.remove('right')
                map1_td[i].setAttribute('value', 0)
            }
            document.querySelector('.win').style.display = 'none';
        }
        if (chosen_maps[1]) {
            for (let i = 0; i < map2_td.length; i++) {
                map2_td[i].classList.remove('bulb')
                map2_td[i].classList.remove('lighten')
                map2_td[i].classList.remove('up')
                map2_td[i].classList.remove('down')
                map2_td[i].classList.remove('left')
                map2_td[i].classList.remove('right')
                map2_td[i].setAttribute('value', 0)
            }
            document.querySelector('.win').style.display = 'none';
        }
        if (chosen_maps[2]) {
            for (let i = 0; i < map3_td.length; i++) {
                map3_td[i].classList.remove('bulb')
                map3_td[i].classList.remove('lighten')
                map3_td[i].classList.remove('up')
                map3_td[i].classList.remove('down')
                map3_td[i].classList.remove('left')
                map3_td[i].classList.remove('right')
                map3_td[i].setAttribute('value', 0)
            }
            document.querySelector('.win').style.display = 'none';
        }
    }
    restart_btn.addEventListener('click', restart)

    /* ================================== TIMER =============================== */
    let totalSeconds = 0;
    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
    function refreshTimer() {
        totalSeconds = 0
        secondsLabel.innerHTML = pad(0);
        minutesLabel.innerHTML = pad(0);
        stop = setInterval(setTime, 1000)
    }
})
