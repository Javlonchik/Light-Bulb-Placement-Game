const map_1 = document.querySelector('.fst_map')
const map_2 = document.querySelector('.snd_map')
const map_3 = document.querySelector('.thd_map')


function chooseMap(){
    let isChosen = false
    for(let i = 0; i < choose_maps.length; i++){
        if(choose_maps[0].classList.contains('selected')){
            map_1.style.display = 'block'
            return isChosen = true
        } else if(choose_maps[1].classList.contains('selected')){
            map_2.style.display = 'block'
            return isChosen = true
        } else if(choose_maps[2].classList.contains('selected')){
            map_3.style.display = 'block'
            return isChosen = true
        } else{
            return isChosen
        }
    }
}




//////////////////////////
white_cells[i].addEventListener('click', () => {
    let clicked_row = white_cells[i].dataset.rowIndex //0
    let clicked_col = white_cells[i].dataset.colIndex //0
    if (!white_cells[i].classList.contains('black_tiles') ) {
         white_cells[i].classList.toggle('bulb');
    }
    for(let rowUp = i; rowUp >= 0; rowUp-=7){
        if (white_cells[i].dataset.rowIndex == clicked_row && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[rowUp].classList.contains('black_tiles') || white_cells[rowUp].classList.contains('colored') ){break;}
            white_cells[rowUp].classList.toggle('colored') 
        } 
    }
    for(let rowDown = i+7; rowDown < 49; rowDown+=7){
        if (white_cells[i].dataset.rowIndex == clicked_row && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[rowDown].classList.contains('black_tiles') || white_cells[rowDown].classList.contains('colored')){break;}
            white_cells[rowDown].classList.toggle('colored') 
        } 
    }
    for(let colLeft = i-1; colLeft >= 0; colLeft--){
        if (white_cells[i].dataset.colIndex == clicked_col && !white_cells[i].classList.contains('black_tiles') ) {
            if(white_cells[colLeft].classList.contains('black_tiles') || white_cells[colLeft].classList.contains('left_end') || white_cells[colLeft].classList.contains('colored')){break;}
            white_cells[colLeft].classList.toggle('colored') 
        } 
    }
    for(let colRight = i+1; colRight < 49; colRight++){
        if (white_cells[i].dataset.colIndex == clicked_col && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[colRight].classList.contains('black_tiles') || white_cells[colRight].classList.contains('right_end') || white_cells[colRight].classList.contains('colored')){break;}
            white_cells[colRight].classList.toggle('colored') 
        } 
    }

    ///////////////////////////////////////////////////////
    for(let rowUp = i; rowUp >= 0; rowUp-=7){
        if (white_cells[i].dataset.rowIndex == clicked_row && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[rowUp].classList.contains('black_tiles')){break;}
            white_cells[rowUp].classList.toggle('lighten') 
        }
    }
    for(let rowDown = i+7; rowDown < 49; rowDown+=7){
        if (white_cells[i].dataset.rowIndex == clicked_row && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[rowDown].classList.contains('black_tiles')){break;}
            else if(!white_cells[rowDown].classList.contains('lighten')){
                white_cells[rowDown].classList.toggle('lighten')  
            } 
        }
    }
    for(let colLeft = i-1; colLeft >= 0; colLeft--){
        if (white_cells[i].dataset.colIndex == clicked_col && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[colLeft].classList.contains('black_tiles') || white_cells[colLeft].classList.contains('left_end')){break;}
            else if(!white_cells[colLeft].classList.contains('lighten')){
                white_cells[colLeft].classList.toggle('lighten')  
            } 
        } 
    }
    for(let colRight = i+1; colRight < 49; colRight++){
        if (white_cells[i].dataset.colIndex == clicked_col && !white_cells[i].classList.contains('black_tiles')) {
            if(white_cells[colRight].classList.contains('black_tiles') || white_cells[colRight].classList.contains('right_end')){break;}
            else if(!white_cells[colRight].classList.contains('lighten')){
                white_cells[colRight].classList.toggle('lighten')  
            } 
        } 
    }


    /**
     * 
     * 
     */


    if(map1_td[i].classList.contains('lighten') && map1_td[i].classList.contains('bulb')){
                                map1_td[i].classList.remove('lighten')
                                map1_td[i].classList.remove('bulb')
                            }
                            else if(map1_td[i].classList.contains('lighten') && !map1_td[i].classList.contains('bulb')){
                                map1_td[i].classList.remove('bulb')
                            }